var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function(req,res){
    // 小图标请求
    if(req.url == "/favicon.ico"){
        return ;
    }
    
    // 转换请求地址
    var urlObj = url.parse(req.url,true);
    // 请求路径
    var path = urlObj.pathname;
    // 设置请求头
    res.setHeader("Content-Type","text/html;charset=utf-8");
    // 接收数据 
    if(path == "/tijiao"){
        // 获取请求参数
        var username = urlObj.query.username;
        var mess = urlObj.query.mess;
        // 
        fs.writeFile("./text/"+username+".txt",mess+"\n",{flag:"a"},function(err){
            if(err){
                res.end("填写失败");
                console.log(err);
                return ;
            }
            res.end("填写成功");
        });
        return ;
    }
    // 显示数据
    if(req.url == "/show"){
        fs.readdir("./text",function(err,files){
            if(err){
                res.end("服务器问题");
                return ;
            }
            // 闭包
            (function iterate(i){
                // 判断递归结束的条件
                if(i>=files.length){
                    res.end("<font color='green'>显示完成</font>");
                    return ;
                }
                // 开始读取文件内容
				fs.readFile("./text/"+files[i],"utf-8",function(err, data){
					if(err) {
						console.log(files[i]+"读取失败");                       
						return ;
					}
					res.write("<h3>"+files[i]+"的留言：</h3>");
					var arr = data.split("\n");
					// console.log(files[i]+"的内容：");
					for(var j=0; j<arr.length; j++) {
						// console.log(arr[j]);
						res.write("<p>"+arr[j]+"</p>");
					}
                iterate(++i)
                });
            })(0);
        });
        return ;
    }

    // 其他情况,显示提交页面
    fs.readFile("./lianxi01_login.html",function(err,data){
        if(err){
            res.end("读取页面失败");
            return ;
        }
        // 读取成功,返回页面给浏览器
        res.end(data);
    });

}).listen(4000);