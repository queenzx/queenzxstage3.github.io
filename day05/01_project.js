//  创建服务并启动监听
// 当访问时,返回index.html页面的内容

var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
    /* if(req.url == "/favicon.ico"){
        return ;
    } */
    // 获取每一个请求地址
    var url = req.url;
    // console.log(url);
    if(url == "/"){
        url = "/index.html";
    }
    // res.setHeader("content-type","text/html;charset=utf-8");
    // 设置之后,index.html引入的css样式就没有作用了
    fs.readFile("./project"+url,function(err,data){
        if(err){
            // console.log(err);
            res.end("<h1>Open Page Error</h1>");
            return ;
        }
        // 读取成功,返回页面给浏览器
        res.end(data);
    });

}).listen(4000);