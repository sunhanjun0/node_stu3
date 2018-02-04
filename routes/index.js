var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(JSON.stringify(req.cookies));
    res.cookie('cookiename','i am a cookie',{ maxAge: 20000,httpOnly:true, path:'/'});
    res.render('Login', { title: '用户登陆' });
});

router.post()

module.exports = router;
