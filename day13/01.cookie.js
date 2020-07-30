var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.listen(4000);
// 设置密钥(设置签名cookie是需要密钥)
app.use(cookieParser('abc'));

// 设置cookie
app.get('/',function(req,res){
    res.cookie("cookie1","aaaa");
    // httpOnly:只能通过网页服务器访问,脚本无法访问
    //无法使用脚本获取该cookie(document.cookie)
    res.cookie("cookie2","bbbb",{httpOnly:true});
    //只能通过localhost访问(127.0.0.1访问不到)
    res.cookie("cookie3","cccc",{domain:"localhost"});
    // 设置cookie的有效期
    res.cookie("cookie4","dddd",{expires:new Date(Date.now()+5000)});
    // res.cookie("cookie5","eeee",{maxAge:5000});
    res.cookie("cookie5","eeee",{maxAge:1000*60*60*24*10});
    // path:只能在指定的请求路径下访问
    // localhost:4000/patha
    res.cookie("cookie6","pathpath",{path:"/patha"});
    // 设置签名cookie
    // 只有在使用cookieParser中间键才能使用
    // 安装npm i cookie-parser
    res.cookie("cookie7","signed",{signed:true});
    res.end();
});

// app.get('/patha/getcookie',function(req,res){//才能拿到cookie6
app.get('/getcookie',function(req,res){
    console.log(req.cookies);
    console.log(req.signedCookies);//拿被签名的cookie
    res.end();
});

app.get('/patha',function(req,res){
    res.end();
});

app.get('/pathb',function(req,res){
    res.end();
});