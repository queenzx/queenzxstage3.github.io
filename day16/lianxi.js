{
    // 1. 定义一个方法,根据传入的参数,计算得出参数的总和(使用扩展运算符)
    let sum=(...a)=>{
        let S = 0;
        for(let i=0;i<a.length;i++){
            S += Number(a[i]);
        }
        return S;
    }
    console.log(sum(1,2,3,4));
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
    let {status,data,data:[{id,msg}],user,user:{name,score,score:{math,chinese}}} = obj;
    console.log(data);
    console.log(user);
    console.log(score);
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
    
    let str = `
    <table>
        <tr>
            <td>姓名</td>
            <td>年龄</td>
        </tr>
        <tr>
            <td><%= name %></td>
            <td><%= age %></td>
        </tr>
    </table>`
    console.log(str);
    
}