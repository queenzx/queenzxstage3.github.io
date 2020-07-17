var http = require("http");
var url = require("url");
var fs = require("fs");

var server = http.createServer(function(req,res){
    // 小图标请求
    if(req.url=="/favicon.ico"){
        return ;
    }
    var urlObj = url.parse(req.url,true);
    // console.log("urlStr: ", urlStr)
    // console.log("urlObj: ", urlObj)
    var path = urlObj.pathname;
    var query = urlObj.query;
    var username = query.username;
    var password = query.password;
    res.setHeader("content-type","text/html;charset=utf-8");
    // 登录请求
    if(path=="/login"){
        if(username == "apple" && password == "123456"){
            res.end("欢迎你,"+username);
        }else{
            res.end("用户名或密码错误!");
        }
        return ;
    }
    // 其他请求
    fs.readFile("./lianxi04.html",function(err,data){
        if(err){
            res.end("读取页面出错")
            return ;
        }
        res.end(data)
    })
}).listen(4000);