var express = require('express');
var fs = require('fs');

var app = express();

app.listen(4000);
// app.use(express.static('./public'));
/* app.use('/',function(req,res,next){
    // 如果请求地址不是 / 
    if(req.url != '/'){
        var data = fs.readFileSync('./public'+req.url);
        // 颜色
        if(req.url == '/style/index.css'){
            res.setHeader("content-type","text/css");
        }
        res.send(data);
        return ;
    }
    // 如果请求地址是 / ,把请求放行,让后续的中间件来处理这个请求
    next();
}); */
// 封装函数调用                  
app.use(rootDir("./public"));
app.get('/',function(req,res){
    res.render('test.ejs');
});


function rootDir(root){
    return function(req,res,next){
        console.log(req.url);
        // 如果请求地址不是 / 
        if(req.url!='/'){
        var data = fs.readFileSync(root+req.url);
        if(req.url=='/style/index.css'){
            res.setHeader("content-type","text/css")
        }
        res.send(data);
        return ;
        }
        // 请求地址是 / ,把请求放行,让后续的中间件来处理这个请求
        next();
    }
}