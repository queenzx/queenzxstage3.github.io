{
    // 一对大括号就是一个块级作用域
    var a = 1;
    // let a;// let声明的变量只能声明一次
    let b = 10;

}
console.log(a);
// console.log(b); // 报错,b的作用域只在{}中

var c = 10;
let d = 2;
console.log('window.c:'+window.c);//10
console.log('window.d:'+window.d);//undefined
for(var i=0;i<5;i++){
    console.log(i);
}

// console.log(i);

{
    // const 用于声明常量
    // 必须同时初始化
    const PI = 3.14;
    // const a;
    // a = 1; 常量不能先声明后初始化,必须声明的同时就初始化

    // 声明出来的常量 不可以修改它的值
    // PI = 3.141592654;

    // 如果常量的值是一个对象或数组,则可以修改对象中的属性或数组中的元素
    // 通过常量所指向的引用修改的数据,而不是直接修改它的引用
    // 实际上修改的是obj的值,而不是obj属性的值
    const obj = {
        a:1
    };
    obj.a=10;
    console.log(obj);
    console.log(obj.a);
    // 只要不对obj重新复制,可以对obj进行任何操作
    obj.b=100;// 没有修改引用地址,所以不会报错
    console.log(obj);



}