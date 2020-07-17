var http = require("http");
var url = require("url");
var fs = require("fs");

var server = http.createServer(function(req,res){
    // 小图标请求
    if(req.url=="/favicon.ico"){
        return ;
    }
    // 登录请求
    res.setHeader("content-type","text/html;charset=utf-8");
    // 将字符串的地址转换为对象
    var urlObj = url.parse(req.url,true);
    var path = urlObj.pathname;
    var query = urlObj.query;
    if(path=="/login"){
        var username = query.username;
        var password = query.password;
        fs.readFile("./lianxi04.json",function(err,data){
            if(err){
                res.end("服务器故障,稍后再试");
                return ;
            }
            data = data.toString();
            var obj = JSON.parse(data);
            var flag = false;//假设用户名密码错误
            for(var i=0;i<obj.length;i++){
                var u = obj[i];
                if(username == u.username && password == u.password){
                    flag = true;//假设错误,修改为true
                    break;
                }
            }
            if(flag){
                res.end("欢迎你,"+username);
            }else{
                res.end("用户名或密码错误!");
            }
        });
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