var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.use(express.static('dist'));

app.listen(port, function () {
    console.log('Server is running on port: ' + port);
});