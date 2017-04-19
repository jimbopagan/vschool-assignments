var express = require('express');
var router = express.Router();

router
    .route('/')
    .get(function (req, res) {
        console.log('GET json');
        res
            .status(200)
            .json({
                "jsonData": true
            })
    })


module.exports = router;