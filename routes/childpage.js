/**
 * Created by Eloit on 2017/2/13.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/homepage', function (req, res) {
    res.render('./  homepage',{title: 'HomePage2'});
});

module.exports = router;
