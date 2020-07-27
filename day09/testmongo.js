// 使用NodeJs连接数据库
var MongoClient = require("mongodb").MongoClient;

// 连接地址
var url = "mongodb://localhost:27017";

// 连接选项
var opt = {useUnifiedTopology: true};

// 开始连接
MongoClient.connect(url,opt,function(err,client){
    if(err){
        console.log(err);
        return MongoClient;
    }
    console.log("连接成功");
    // 操作结束后,一定要关闭连接
    // client.close();
    // 获取数据库
    var db = client.db("web");
    // 获取集合
    var col = db.collection("emp");
    // 增加数据
    /* var obj = {
                name: '王磊',
                age: 30,
                likes: [ '爬山', '烧烤' ],
                score: { html: '78', css: '69', js: '80' }
            };
    // 向集合中添加一条数据
    col.insertOne(obj,function(err,result){
        if(err){
            console.log(err);
            return ;
        }
        console.log(result);
        // 关闭连接
        client.close();
    }); */
    // 删除数据
    /* col.deleteOne({name:"赵六"},function(err,result){
        if(err){
            console.log(err);
            return ;
        }
        console.log(result);
        // 关闭连接
        client.close();
    }); */
    // 修改数据
    /* col.updateOne({name:"张三"},{$set:{age:35}},function(err,result){
        if(err){
            console.log(err);
            return ;
        }
        console.log(result);
        // 关闭连接
        client.close();
    }); */
    // 查询集合中的所有数据
    col.find().toArray(function(err,docs){
        if(err){
            console.log(err);
            client.close();
            return ;
        }
        console.log(docs);
        // 关闭连接
        client.close();
    });
})