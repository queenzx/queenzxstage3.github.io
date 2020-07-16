console.log("使用NodeJs运行的js");

function show(){
    for(var i=0;i<5;i++){
        console.log(i);
    }
}
show();
// console.log(window); window是浏览器的
// console.log(location);
console.log(global);