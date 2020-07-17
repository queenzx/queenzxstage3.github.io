var fs = require("fs");

/* fs.writeFile("test.txt","哈哈哈",function(err){
    if(err){
        console.log(err);
        return ;
    }
    console.log("写入成功");
}); */

var path = "test.txt";
var data = "\n呵呵呵";
var ops = {flag:"a"}
fs.writeFile(path,data,ops,function(err){
    if(err){
        console.log(err);
        return ;
    }
    console.log("写入成功");
});