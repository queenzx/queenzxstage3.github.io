// 被引入的模块文件
console.log('这是02_module文件');

for(var i=0;i<4;i++){
    console.log("您好");
}

function say(){
    console.log("你好");
}
say();

function Stu(id,name){
    this.id = id;
    this.name = name;
}
Stu.prototype = {
    say:function(){
        console.log(this.name);
    }
}

new Stu(1,"apple").say()
;