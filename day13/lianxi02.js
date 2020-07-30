var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
// 引入mongoose
var mongoose = require('mongoose');

app.listen(4000);

var userSchema = new mongoose.Schema({
    username:String,
    password:String
});

var User = mongoose.model("user",userSchema);

// 连接数据库
var url = 'mongodb://localhost:27017/web';
var opt = {
    useUnifiedTopology:true,
    useNewUrlParser: true
};
mongoose.connect(url,opt);


// 设置post请求参数的解析方式
app.use(express.urlencoded({extended:true}));

app.use(cookieParser('keyboart cat'));

app.get('/',function(req,res){
    // 获取cookie,判断用户有没有登录过
    var username = req.cookies.username;
    console.log(username);
    if(username){//找到了username的cookie,说明之前已经登录过了,不需要再登录
        res.send("<h1>欢迎你:"+username+"</h1>");
        return ;
    }
    // 没有找到username的cookie,说明没有登录
    // 直接跳转到登录页面
    res.render('login.ejs');
});
// 登录
app.get('/login',function(req,res){
    res.render('login.ejs');
}); 
app.post('/login',function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    User.find({username:username},function(err,docs){
        if(err){
            console.log(err);
            res.send("<h1>网络波动,稍后再试</h1>");
            return ;
        }
        // 没有查到数据
        if(docs.length == 0){
            res.send("<h1>用户名错误</h1>");
        }else{
            // 用户名正确,检查密码是否匹配
            if(password == docs[0].password){
                // 登录成功,保存登录状态
                res.cookie("username",username);
                res.send("<h1>登录成功</h1>");
            }else{
                res.send("<h1>密码错误</h1>");
            }
        }
        
    })
});
// 注册
app.get('/regist',function(req,res){
    res.render('regist.ejs');
}); 

app.post('/regist',function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    // 判断username是否存在
    User.find({username:username},function(err,docs){
        if(err){
            console.log(err);
            res.send('<h1>网络波动,稍后再试</h1>');
            return ;
        }
        // docs如果不是空数组,则说明查到了数据
        if(docs.length>0){
            res.send('<h1>用户名已存在</h1>');
            return ;
        }
        // 空数组,没有查到数据
        var data = {
            username:username,
            password:password
        }
        User.insertMany(data,function(err,result){
            if(err){
                console.log(err);
                res.send('<h1>注册失败</h1>');
                return ;
            }
            if(result.insertedCount == 0){
                res.send('<h1>注册失败</h1>');
            }else{
                res.cookie("username",username);
                res.send('<h1>注册成功,欢迎你:'+username+'</h1>');
            }
        });
    });
});