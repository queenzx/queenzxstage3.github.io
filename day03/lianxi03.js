var http = require("http");
var fs = require("fs");

var server  = http.createServer(function(req,res){
    if(req.url == "/favicon.ico"){
        return ;
    }
    res.setHeader('Content-Type','text/html;charset=utf-8');
    if(req.url == "/xiaoming"){
      res.end("Hello,I am 小明");
      return;
    }
    if(req.url == "/xiaohong"){
      res.end("Hello,I am 小红");
      return;
    }
    fs.readFile('./lianxi03.html',function(err,data){
      if(err){
        res.end('文件读取错误');
        return ;
      }
      res.end(data);
    });
}).listen(4000);