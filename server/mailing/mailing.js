const express = require('express'),
    path = require("path"),
    fs = require('file-system'),
    nodeMailer = require('nodeMailer'),
    HBS = require('hbs'),
    router = express.Router(),
    hbsHelpers = require(path.resolve(__dirname, '../utilities/hbsHelpers')),
    config = require(path.resolve(__dirname, '../utilities/config.json'));

hbsHelpers(HBS);

router.post('/handy_hands/applications/mail', function (request, response) {
    let srtHTML = generateResumeHTML(request.body);

    sendEmailInvite('Application (Resume)', srtHTML, function (err) {
        if (err) {
            return response.json({
                success: false,
                msg: 'There was a problem submitting your application. Please try again.'
            });
        }

        return response.json({
            success: true,
            msg: 'Your application has been submitted successfully.'
        });
    });
});

generateResumeHTML = function (data) {
    let template = fs.readFileSync(path.resolve(__dirname, './application.hbs'), 'utf8'),
        compileTemplate = HBS.compile(template);

    return compileTemplate(data);
};

sendEmailInvite = function (subject, message, callback) {
    let transporter = nodeMailer.createTransport({
        host: 'mail.privateemail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER || config.user,
            pass: process.env.EMAIL_AUTH || config.pass
        }
    });

    let mailOptions = {
        from: process.env.EMAIL_USER || config.user,
        to: config.receiver,
        subject: subject,
        html: message
    };

    return transporter.sendMail(mailOptions, callback);
};

module.exports = router;