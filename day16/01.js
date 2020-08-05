{
    // 对象的解构赋值
    // 对象解构成功,必须满足一个条件:
    // 变量名与属性名保持一致
    let {a,b} = {a:1,b:2};
    console.log(a,b);//1 2
    // cd取不到值,等号右边的对象中没有对应的属性
    let {c,d} = {a:1,b:2};
    console.log(c,d);//undefined undefined
}

{
    // let t = require('./test.js');//浏览器不支持require
    // console.log(t);// { a: 1, b: 2, c: '333', d: [Function] }

    // 在node环境下使用对象的解构赋值获取其他模块中的属性
    // let {a,b,c,d} = require("./test.js");
    // console.log(a,b,c,d);//1 2 333 [Function]

}

{
    let obj = {
        a:1,
        b:{
            x:10
        }
    };
    let {a,b} = obj;
    console.log(a,b);//1  {x: 10}
    // 取对象中某个属性里的值
    let {b:{x}} = obj;
    console.log(x);//10
}

{
    // 对象的扩展
    let username = "zhangsan";
    let password = "123";
    // 完整的对象写法
    let data = {
        username :username,
        password:password
    }
    // 当变量名与属性名相同时,可以采用简写的方式
    let data2 = {
        username,
        password
    }
}

{
    // 对象解构赋值的完整模式和简写模式
    // 1) 因为变量名为a,b和属性名相同,所以采用简写模式
    let {a,b} = {a:1,b:2};
    // 完整写法
    // let {a:a,b:b} = {a:1,b:2};
    console.log(a,b);//1 2
    // 2) 变量名与属性名不一致,变量名为x,y
    // let {x:a,y:b} = {b:1,a:2}; //报错,属性名和变量写反了
    let {a:x,b:y} = {b:1,a:2};
    console.log(a,b);//1 2
}

{
    // 先声明,后解构
    let a,b,c;
    // 数组的解构赋值
    [a,b,c] = [1,2,3];//1 2 3
    // 对象的解构赋值
    // 必须用小括号包裹起来,否则会报错
    ({a,b,c} = {a:1,b:2,c:3});//1 2 3
    console.log(a,b,c);
}

{   
    // 对象解构赋值的默认值
    // 数组的默认值
    /* let [a=0,b=0,c=0] = [1,2];
    console.log(a,b);//1 2 */
    // 对象的默认值
    let {a=0,b=0} = {a:1};
    console.log(a,b);//1 0
    let {c:c=0,d:d=0} = {c:1}
    console.log(c,d);//1 0
    
}

{
    // 展开运算符的使用 ...
    let obj = {
        name:'jim',
        age:20,
        sex:'man'
    };
    // 使用...展开赋值obj
    let obj2 = {
        ...obj//2015之后更新出来的,浏览器谷歌52,53版本不支持
    };
    console.log(obj);//{name: "jim", age: 20, sex: "man"}
    console.log(obj2);//{name: "jim", age: 20, sex: "man"}

    // 将两个以上的对象合并成一个对象
    let o1 = {
        a:1,
        b:2
    }
    let o2 = {
        c:3,
        d:4
    }
    let o = {
        ...o1,
        ...o2
    }
    console.log(o); // {a: 1, b: 2, c: 3, d: 4}
}

{
    let news = [
        {
            title:"新闻",
            msg:"这是一条新闻"
        }
    ];
    let title,msg;
    [{title,msg}] = news;
    
    console.log(title,msg);
}

{
    let news = [
        {
            title:"新闻1",
            contents:[
                {t:'体育',m:'篮球比赛开始了'},
                {t:'娱乐',m:'电影院开放了'}
            ]
        },
        {
            title:"新闻2",
            contents:[
                {t:'体育',m:'乒乓球世锦赛'},
                {t:'娱乐',m:'夺宝奇兵'}
            ]
        }
    ];

    let [{title:title1,contents:[{t:t1,m:m1},{t:t2,m:m2}]},{title:title2,contents:[{t:t3,m:m3},{t:t4,m:m4}]}]=news;
    console.log(title1,t1,m1,t2,m2,title2,t3,m3,t4,m4);
    //新闻1 体育 篮球比赛开始了 娱乐 电影院开放了 新闻2 体育 乒乓球世锦赛 娱乐 夺宝奇兵
    
    // 老师示例,
    /* // let [m1,m2] = news;//数组的解构
    // console.log(m1,m2);//{title: "新闻1", contents: Array(2)} {title: "新闻2", contents: Array(2)}
    // let {title,contents} = m1;
    let [{title,contents}] = news;
    console.log(title,contents);//新闻1 (2) [{…}, {…}]
    let [{contents:[{t:t1,m:m1},{t:t2,m:m2}]}] = news;
    console.log(t1,m1); // 体育 篮球比赛开始了
    */
}

{
    // 后端返回的数据
    let result = {
        status:'ok',
        responseType:'json',
        responseData:[
            {
                id:101,msg:'服务器返回的数据'
            }
        ]
    };
    let {status,responseType,responseData,responseData:[{id,msg}]} = result;
    console.log(status,responseType,responseData,id,msg);//ok json [{…}] 101 服务器返回的数据
}

{
    // 函数参数的解构赋值
    function add1(a,b){
        return a+b;
    }
    console.log(add1(1,4));//5

    let arr = [2,5];
    console.log(add1(...arr));// add1(2,5) 7

    // 参数的数组解构
    function add2([a,b]){
        return a+b;
    }
    console.log(add2(arr));// add2(2,5) 7
}

{
    // 函数的参数解构
    /* function total(a,b){
        console.log(a,b);
    }
    total(1);//1 undefined
    total(1,2,3,4);//1 undefined */

    // 剩余参数
    function total(...a){
        console.log(a);
    }
    total(1);//[1]
    total(1,2,3,4);//[1, 2, 3, 4]

    function total1(x,y,...a){
        console.log(a);
    }
    total1(1,2,3,4,5,6,7);//[3, 4, 5, 6, 7]

    function info(name,age,tel,obj){
        this.name =name;
        this.age =age;
        this.tel =tel;
        ({pro1,pro2} = obj);
        this.pro1 = pro1;
        this.pro2 = pro2;
    }
    let obj = {
        pro1:'pro1',
        pro2:'pro2',
        pro3:'pro3'
    }
    let o = new info('jim',12,159,{});
    console.log(o);// {name: "jim", age: 12, tel: 159, pro1: undefined, pro2: undefined}
}

{
    // 函数参数的解构: 参数为对象
    function show({a,b}){
        console.log(a,b);
    }
    let obj = {
        a:1,
        b:2
    }
    show(obj);// 1 2
}