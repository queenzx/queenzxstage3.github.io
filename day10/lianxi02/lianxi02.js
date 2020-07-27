var express = require("express");
// 使用NodeJs连接数据库
var MongoClient = require("mongodb").MongoClient;
var ObjectId = require('mongodb').ObjectID;

var app = express();

app.listen(4000);

// 设置post请求参数的解析方式
app.use(express.urlencoded({extended:true}));

// 连接地址
var url = "mongodb://localhost:27017";
// 连接选项
var opt = {useUnifiedTopology: true};

app.set("view engine","ejs");
// 设置根目录
app.use(express.static('./'));
//  /请求,展示所有数据
app.get('/',function(req,res){
    // 获取数据成功,将其渲染到视图模板上
    res.render('login'); 
});

// 注册
app.get('/register',function(req,res){
    // 获取数据成功,将其渲染到视图模板上
    res.render('register'); 
});

app.post('/register',function(req,res){
    // 获取请求参数
    var body = req.body;
    var data = {};
    data.username = body.username;
    data.password = body.password;
    // 连接数据库
    MongoClient.connect(url,opt,function(err,client){
        if(err){//连接数据库失败
            console.log(err);
            res.send('<h1>网络波动,稍后再试</h1>'); //连接失败后返回给浏览器的信息
            return ;
        }
        // 连接成功
        var col = client.db("web").collection("users");
        // 添加数据
        col.insertOne(data,function(err,result){
            if(err){//添加失败
                console.log(err);
                res.send("注册,稍后再试");
                client.close();
                return ;
            }
            console.log(result.result);
            // 添加成功
            if(result.result.n>0){
                // 添加成功,跳转回登录页
                res.redirect('/');
            }else{
                // 数据没添加成功
                res.send('注册失败');
            }
            client.close();
        });
    });
});

// 登录
app.get('/login',function(req,res){
    // 获取数据成功,将其渲染到视图模板上
    res.render('/login');  
});

app.post('/login',function(req,res){
    
});