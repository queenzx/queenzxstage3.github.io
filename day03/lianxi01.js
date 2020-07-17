var http = require("http");

var server = http.createServer(function(req,res){
    if(req.url == "/favicon.ico"){
        return ;
    }
    var params = req.url.split("?")[1].split("&");
    // [username=xxxx,password=xxxx]
    var username ,password;
    for(var i=0;i<params.length;i++){
        var arr = params[i].split("=");
        if("username" == arr[0]){
            username = arr[1];
        }
        if("password" == arr[0]){
            password = arr[1];
        }
    }
    // 设置响应头
    res.setHeader("Content-Type","text/html;charset=utf-8");
    // res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.end("你的用户名是:"+username+",密码是:"+password);
});

server.listen(4000);