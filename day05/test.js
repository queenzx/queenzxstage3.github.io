var sd = require("silly-datetime");

// var str = sd.format(new Date(),"YYYY年MM月DD日 HH时mm分ss秒");
// 2020年07月20日 17时11分39秒
var str = sd.format(new Date(),"YYYY年MM月DD日 hh时mm分ss秒");
//2020年07月20日 05时14分49秒
var str = sd.format(new Date(),"YYYY年MM月DD日 hh时mm分ss秒 a");
// 2020年07月20日 05时15分17秒 pm
// var str = sd.format(new Date(),"YY年M月D日 H时m分s秒");
// 20年7月20日 17时12分38秒
console.log(str);