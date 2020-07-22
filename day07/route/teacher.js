// 创建teacher的路由
var express = require('express');
// 创建路由对象
var router = express.Router();

// 使用路由对象处理具体的请求
router.get('/',function(req,res){
    res.send('<h1>老师的请求</h1>');
});

router.get('/login',function(req,res){
    res.send('<h1>老师的login请求</h1>');
});

router.get('/logout',function(req,res){
    res.send('<h1>老师的logout请求</h1>');
});

router.get('/publish',function(req,res){
    res.send('<h1>老师的publish请求</h1>');
});

module.exports = router;