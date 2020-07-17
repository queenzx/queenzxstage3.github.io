var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
    if(req.url == "/favicon.ico"){
        return ;
    }

    res.setHeader("content-type","text/html;charset=utf-8")
    if(req.url=="/circle"){
        fs.readFile("./lianxi02_circle.html",function(err,data){
            if(err){
                res.end("读取页面出错");
                return ;
            }
            res.end(data);
        });
        return ;
    }
    if(req.url=="/square"){
        fs.readFile("./lianxi02_square.html",function(err,data){
            if(err){
                res.end("读取页面出错");
                return ;
            }
            res.end(data);
        });
        return ;
    }
    // 其他情况,读取错误
    res.end("读取页面出错");
}).listen(4000);