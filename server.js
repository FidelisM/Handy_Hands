let express = require('express'),
    app = express(),
    pageRedirect = require('./server/pageRedirect/pageRedirect'),
    port = process.env.PORT || 3000;

app.use(pageRedirect);
app.use(express.static('dist'));

app.listen(port, function () {
    console.log('Server is running on port: ' + port);
});