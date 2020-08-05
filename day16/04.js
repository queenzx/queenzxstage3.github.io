// 箭头函数的声明方式:
{
    // 箭头函数的声明方式:
    let a = ()=>{
        console.log('这是箭头函数');
    }
    // 调用方式不变
    a();

    // 有参无返回值
    // 如果参数有且只有一个,则小括号 可以省略不写
    // let b =(msg)=>{
    let b = msg=>{
        console.log(`一个参数${msg}`);
    }
    b('zzzz');

    // 多个参数,小括号不可省略
    let c = (x,y)=>{
        console.log(x+y);
    }
    c(2,5);

    // 有返回值
    let d = ()=>{
        let rand = Math.random();
        return rand;
    }
    console.log(d());

    // 如果函数体中只有一句返回语句,则大括号和return可以省略不写
    let e = ()=>Math.random();
    console.log(e());
}

// 最简函数
{
    let a = x=>2*x;
    console.log(a(10));//20
}

// 箭头函数参数的默认值
{
    let fn = (a=0,b=0)=> a+b;
    console.log(fn(1,2));// 3
    console.log(fn());// 0
}
// 箭头函数没有属于自己的this
{
    // 箭头函数没有属于自己的this
    /* let stu = {
        name:'张三',
        sayHello:function(){
            console.log(this.name);
        }
    };
    stu.sayHello();//张三 */
    let stu = {
        name:'张三',
        sayHello:function(){
            console.log(`${this.name}打招呼了`);
        },
        // 普通函数
        /* work:function(){
            var _this = this;
            return function(){
                console.log(this);//this指向window
                console.log(`${_this.name}工作了`);
            }
        } */
        // 箭头函数
        work:function(){
            return ()=>{
                // 因为箭头函数中没有this,在这里使用的this实际上是从外层继承进来的
                console.log(this);
                console.log(`${this.name}工作了`);
            }
        }
    };
    stu.sayHello();//张三打招呼了
    stu.work()();//张三工作了
}

{
    // 普通函数
    function Stu(id,name){
        this.id = id;
        this.name =name;
    }
    // 箭头函数不能作为构造函数来使用
    /* let Stu = (id,name)=>{
        this.id = id;
        this.name =name;
    } */
}