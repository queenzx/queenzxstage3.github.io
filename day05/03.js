var  a = require("./03_module");
/* console.log(a);

console.log(a.name);

a.say(); */

// 构造函数,调用
var s = new a(1,"张三");
console.log(s);
s.say();

var s2 = new a(0,"李四");
console.log(s2);
s2.say();
