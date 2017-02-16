var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

// router.post('/homepage', function (req, res) {
//     var query_doc = {username: req.body.name, password: req.body.pass};
//
//     user.count(query_doc, function (err, doc) {
//         if (doc == 1) {
//             console.log(query_doc.username + ": login success in ");
//             res.render('homepage', {title: 'homepage'});
//         } else {
//             console.log(query_doc.username + ": login failed in ");
//             res.redirect('/');
//         }
//     });
//
// });

router.post('/homepage', function (req, res) {

    var user_info = {username: req.body.name, password: req.body.pass};

    if (req.body.name == '123') {
        req.session.textuser = user_info;
        res.render('homepage', {title: 'HomePage'});
    } else {
        res.redirect('/');
    }
});

router.get('/childpage', function (req, res) {
    res.render('childpage', {title: 'ChildPage'});
});

router.get('/homepage', function (req, res) {
    res.render('homepage', {title: 'HomePage'});
});

module.exports = router;
