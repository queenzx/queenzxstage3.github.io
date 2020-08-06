{
    // 1. 定义一个方法,根据传入的参数,计算得出参数的总和(使用扩展运算符)
    let sum=(...a)=>{
        let s = 0;
        for(let i=0;i<a.length;i++){
            s += Number(a[i]);
        }
        return s;
    }
    console.log(sum(1,2,3,4));
}
// 面试题:封装console.log
{
    // 封装console.log
    let log = (...a)=>{
        console.log(...a);
    }
    console.log('aaa%sbbb','NAME');
}

{
    // 2. 解构下面的数据
    let obj = {
        status: 0,
        data: [
            {
                id:1,msg:'返回的数据'
            }
        ],
        user:{
            name: 'jim',
            score: {
                math: 80,
                chinese: 88
            }
        }
    };
    /* let {status,data,user} = obj;
    let [o] = data;
    let {id,msg} = o;
    let {name,score} = user;
    let { math,chinese } = score; */

    let {status,data,data:[o],data:[{id,msg}],user,user:{name,score,score:{math,chinese}}} = obj;
    console.log(data);
    console.log(user);
    console.log(score);
    console.log(o);
    console.log(status,id,msg,name,math,chinese);
    
}

{
    /* 3. 使用字符串定义一个ejs模板
    table
        tr 
            td 姓名
            td 年龄
        tr
            td <%= name %>
            td <%= age %> */
    
    let {name,age} = {name:'jim',age:23};
    let str = `
    <table>
        <tr>
            <td>姓名</td>
            <td>年龄</td>
        </tr>
        <tr>
            <td><%= ${name} %></td>
            <td><%= ${age} %></td>
        </tr>
    </table>`
    console.log(str);
    
}