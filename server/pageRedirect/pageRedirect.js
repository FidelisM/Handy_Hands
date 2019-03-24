let express = require('express'),
    router = express.Router();

router.get('/careers', function (req, res) {
    res.redirect('/#/careers');
});

router.get('/career', function (req, res) {
    res.redirect('/#/careers');
});

module.exports = router;