var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});
router.get('/messege', function (req, res, next) {
    res.render('node', {message: 'Hello'});
});



module.exports = router;
