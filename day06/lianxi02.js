// 获取uploads文件夹中的所有图片,将其展示在页面上

var express = require('express');
var fs = require('fs');
var app = express();

app.listen(4000);

// 设置试图模板引擎
app.set('view engine','ejs');

// 设置根目录
app.use(express.static('./uploads'));

// 处理 / 请求
app.get('/',function(req,res){
    // 获取uploads中的所有图片
    // 如果uploads里有text等其他文件,需要循环遍历判断后缀名取图片
    var pics = fs.readdirSync('./uploads');
    // 讲pics传递给视图模板解析
    res.render('lianxi02',{pics:pics});
});