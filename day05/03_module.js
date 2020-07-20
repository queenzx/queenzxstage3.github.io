var id = 1;
var name = "张三";
function say(){
    console.log("你好");
}

/* exports.id = id;
exports.name = name;
exports.say = say; */
// 暴露对象时,一个文件只能使用一个exports,不然会报错
/* exports = {
    sid:id,
    sname:name,
    say:say
} */
// 结果是一个空对象,已经被重写
// 在js文件中 module.exports只能出现一次,如果出现多次的话,暴露的是最后一个
/* module.exports = {
    sid:id,
    sname:name,
    say:say
} */

function Stu(id,name){
    this.id = id;
    this.name = name;
}
Stu.prototype.say = function(){
    console.log(this.name);
}
module.exports = Stu;