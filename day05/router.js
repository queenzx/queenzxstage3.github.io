// 方法1:
/* exports.showIndex = function(){

}
exports.showInfo = function(){
    
}
exports.showErr = function(){
    
} */

// 方法2:
// 2-1
/* function showIndex(){
    return "这是首页";
}
function showInfo(){
    return "这是信息页";
}
function showErr(){
    return "这是错误页";
} */
// 2-2
function showIndex(req,res){
    res.end("这是首页");
}
function showInfo(req,res){
    res.end("这是信息页");
}
function showErr(req,res){
    res.end("这是错误页");
}
/* exports.showIndex = showIndex;
exports.showInfo = showIndex;
exports.showErr = showErr; */

module.exports = {
    showIndex : showIndex,
    showInfo : showInfo,
    showErr : showErr
}

// 方法3:
/* function show(){

}
show.prototype.showIndex = function(){
    return "这是首页";
}
show.prototype.showInfo = function(){
    return "这是信息页";
}
show.prototype.showErr = function(){
    return "这是错误页";
}

module.exports = show; */