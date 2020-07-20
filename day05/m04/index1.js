// 引入其他的小模块
var time = require("./formatTimer");
var say = require("./sayHello");

var timeStr = time.getTime();
timeStr = "当前时间:"+timeStr;

// 将功能重新暴露出去
module.exports = {
    time:timeStr,
    say:say
}