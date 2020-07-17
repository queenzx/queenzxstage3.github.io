var fs = require("fs");

// 读取当前文件夹里面的内容
/* fs.readdir("./",{withFileTypes:true},function(err,files){
    console.log(err);
    console.log(files);//null
    console.log(files[0]);
    console.log(files[0]["Symbol('type')"]);//undefined
    console.log(files[0].isFile());//true
    for(var i=0;i<files.length;i++){
        if(files[i].isFile()){
            console.log(files[i].name+"是一个文件");
        }else{
            console.log(files[i].name+"是一个文件夹")
        }
    }
}); */

/* var file = "zuoye";
fs.stat(file,function(err,stats){
  console.log(err);
  // console.log(stats);
  if(stats.isFile()){
    console.log(file+" is file");
  }else{
    console.log(file+" is directory");
  }
}); */




// 数据被污染，结果出错
// fs.readdir("./",function(err,files){ 
//   for(var i=0;i<files.length;i++){
//     console.log(files[i])
//     fs.stat(files[i],function(err,stats){
//       if(stats.isFile()){
//         console.log(files[i]+ " is file")
//       }else{
//         console.log(files[i]+ " is dir")
//       }
//     })
//   }
// })



fs.readdir("./",function(err,files){
    // 闭包
    (function iterate(i){
      // 判断递归结束的条件
      if(i>=files.length){
        return ;
      }
      fs.stat(files[i],function(err,stats){
        if(stats.isFile()){
          console.log(files[i]+" is file")
        }else{
          console.log(files[i]+" is dir")
        }
        i++
        iterate(i)
      });
    })(0)
  })
  