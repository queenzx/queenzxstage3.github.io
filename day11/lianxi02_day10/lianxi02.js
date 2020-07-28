var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var app = express();
// 连接地址
var url = "mongodb://localhost:27017";
// 连接选项
var opt = {useUnifiedTopology: true};

app.listen(4000);
// 设置post请求参数的解析方式
app.use(express.urlencoded({extended:true}));

// 默认是登录页
app.get('/',function(req,res){
    res.render('login.ejs');
});

// 跳转到登录页
app.get('/login',function(req,res){
    res.render('login.ejs');
});

// 处理登录请求
app.post("/login",function(req,res){
    var param = req.body;// {username:xxx,password:xxxx}
    MongoClient.connect(url,opt,function(err,client){
        if(err){
            res.send('error');
            return ;
        }
        var col = client.db('web').collection('users');
        var username = param.username;
        var password = param.password;
        // 根据用户名查询数据 
        col.find({username:username}).toArray(function(err,docs){
            if(err){
                console.log(err);
                res.send('网络波动,稍后再试');
                client.close();
                return ;
            }
            // 没有查到数据
            if(docs.length == 0){
                res.send("用户名错误");
            }else{
                // 用户名正确,检查密码是否匹配
                if(password == docs[0].password){
                    res.send("登录成功");
                }else{
                    res.send("密码错误");
                }
                client.close();
            }
        });
    });
});

// 跳转到注册页
app.get('/regist',function(req,res){
    res.render('regist.ejs');
});

// 处理注册请求
app.post('/regist',function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    // 对username和password的合法性进行判断
    // 判断数据库中是否存在该用户名
    MongoClient.connect(url,opt,function(err,client){
        if(err){
            console.log(err);
            res.send('网络波动,稍后再试');
            return ;
        }
        var col = client.db('web').collection('users');
        // 判断username是否存在
        col.find({username:username}).toArray(function(err,docs){
            if(err){
                console.log(err);
                res.send('网络波动,稍后再试');
                client.close();
                return ;
            }
            // docs如果不是空数组,则说明查到了数据
            if(docs.length>0){
                res.send('用户名已存在');
                client.close();
                return ;
            }
            // 空数组,没有查到数据
            var data = {
                username:username,
                password:password
            }
            col.insertOne(data,function(err,result){
                if(err){
                    console.log(err);
                    res.send('注册失败');
                    client.close();
                    return ;
                }
                if(result.insertedCount == 0){
                    res.send('注册失败');
                }else{
                    res.send('注册成功');
                }
                client.close();
            });
        });
    });
});


