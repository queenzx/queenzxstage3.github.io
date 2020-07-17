var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
    if(res.url == "/favicon.ico"){
        return ;
    }
    // res.end("<h1>over</h1>");
    // 访问已经写好的页面借助于fs模板
    // 使用fs模块读取页面的内容,然后将读取到的内容返回给浏览器
    fs.readFile("./root.html",function(err,data){
        if(err){
            // 读取出错
            console.log(err);
            res.end("read file error");//用于结束请求,返回数据
            return ;//不写return,将继续执行下面的代码
        }
        // 读取成功，返回data数据
        console.log(data);
        res.end(data);
    });
});

server.listen(4000);