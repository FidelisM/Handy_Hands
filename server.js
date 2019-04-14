let express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    pageRedirect = require('./server/pageRedirect/pageRedirect'),
    mailing = require('./server/mailing/mailing'),
    port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(pageRedirect);
app.use(mailing);

app.use(express.static('dist'));

app.listen(port, function () {
    console.log('Server is running on port: ' + port);
});