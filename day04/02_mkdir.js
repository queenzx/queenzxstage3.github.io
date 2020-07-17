var fs = require("fs");

// recursive: 是否要创建父目录
// 异步方法
console.log(1);
fs.mkdir("a",{recursive:true},function(err){
    if(err){
        console.log("创建失败");
        console.log(err);
        console.log(4);
        return ;
    }
    console.log("创建成功");
    console.log(2);
});
console.log(3);
// 创建成功: 打印结果13创建成功2
// 创建失败: 打印结果13创建失败-错误信息4

// 同步方法
// console.log(1);
// fs.mkdirSync("a");
// console.log(2);
// 创建成功: 打印结果12
// 创建失败: 打印结果1