const ejs = require('ejs');

// 定义模板
var str = '这是模板<%= name %>';

// 定义数据
var data = {
    name: "ejs"
}

// 编译模板-compile
// 渲染模板-rander
var html = ejs.render(str,data);
console.log(html);