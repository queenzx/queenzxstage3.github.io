{
    // 字符串新增的表示方式``
    let str1 = 'abc';
    let str2 = 'abc';
    let str3 = 'abc';

    // 使用``表示的字符串在引号中间可以换行
    let str4 = `
    <div>
        <h1>字符串</h1>
    </div>`;
    console.log(str4);
    document.write(str4);
    str4 = str4.replace(`h1`,`h4`);
    console.log(str4);
    document.write(str4);
}

{
    // 字符串的拼接
    let name = '张三';
    let age = 23;
    let str = `你好我叫${name},今年${age}岁`;
    console.log(str);//你好我叫张三,今年23岁

    str = `abcd${age}qwer`;
    console.log(str);//abcd23qwer
    str = `abcd${age>30?'中年人':'年轻人'}qwer`;
    console.log(str);//abcd年轻人qwer

    str = `今年${age}岁,明年就是${age+1}岁`;
    console.log(str);//今年23岁,明年就是24岁

    str = `aaaa${10>5}ssss`;
    console.log(str);//aaaatruessss
} 

// 字符串新增的方法:
// 实例方法：includes(), startsWith(), endsWith(),repeat()
// padStart(),padEnd(),trimStart(),trimEnd(),matchAll()
// includes(), startsWith(), endsWith()
{
    var str = `Hello,my name is HanMeimei. I'm thirteen years old.`;
    
    // includes() 判断字符串中是否包含某一个字符串
    // 是否包含me
    console.log(str.includes('me'));//true
    // 第二个参数表示从哪个位置开始查询
    console.log(str.includes('me',24));//false
    console.log(str.includes('me',str.lastIndexOf('me')+1));//false
    
    /* console.log(str.charAt(0));// H
    console.log(str.charCodeAt(0));// 72
    console.log(str.codePointAt(0));// 72
    console.log("𠮷".codePointAt(0));// 134071
    console.log("𠮷".length);// 2 */

    // startsWith() 判断字符串是否以某个字符串开头的
    console.log(str.startsWith('h'));// false
    console.log(str.startsWith('Hello'));// true

    // endsWith() 判断字符串是否以某个字符串结束的
    console.log(str.endsWith('old'));// false
    console.log(str.endsWith('old.'));// true

}
// repeat()
{
    // repeat() 重复某个字符串
    console.log('a'.repeat(12));// aaaaaaaaaaaa
    console.log('\\'.repeat(5));// \\\\\
    console.log('韩梅梅,我喜欢你'.repeat(3));// 韩梅梅,我喜欢你韩梅梅,我喜欢你韩梅梅,我喜欢你
    // 如果参数不是整数,则舍弃小数部分(向下取整)
    console.log('\\'.repeat(3.6));// \\\
    console.log('\\'.repeat(0.9));// 相当于0
    console.log('\\'.repeat(-0.9));// 相当于0
    // console.log('\\'.repeat(-1));// 报错

}
// padStart(),padEnd()
{
    // padStart(),padEnd() 向字符串的开头或结尾填充内容
    // 实现左对齐或右对齐
    // 第一个参数表示填充到目标长度,第二个参数表示使用什么字符串来填充
    console.log('123'.padStart(10,'#'));// #######123
    console.log('123456'.padStart(10,'#'));// ####123456
    console.log('1235'.padStart(10,'#'));// ####123456
    console.log('6'.padStart(10,'#'));// #########6

    console.log('123'.padEnd(10,'#'));// 123#######
    console.log('123456'.padEnd(10,'#'));// 123456####
    console.log('1235'.padEnd(10,'#'));// 1235######
    console.log('6'.padEnd(10,'#'));// 6#########

    // 如果填充的内容超过10位,则截取使其达到10位
    console.log('123456'.padStart(10,'abc'));// abca123456
    // 如果原字符串已经达到了10位,则不做操作
    console.log('123123123123'.padStart(10,'#'));// 123123123123
}
// trimStart(),trimEnd(),trim()
{
    // trimStart() 清除字符串开头部分的空格
    // trimEnd() 清除字符串尾部的空格
    // trim() 清除字符串尾开头和结尾的空格
}
// matchAll()
{
    // matchAll()
    // 返回的是一个迭代器(遍历器),迭代器里有next方法,
    // next方法会返回匹配得到的每一个结果vale,done:表示迭代器是否完成
    let result = 'abca2a'.matchAll(/a/g);
    /* console.log(result.next());
    console.log(result.next());
    console.log(result.next());
    console.log(result.next());
    console.log(result.next()); */
    console.log(result);// RegExpStringIterator {} 迭代器
    let res = null;
    res = result.next();
    while(!res.done){
        console.log(res);
        res = result.next();
    }
    console.log(res);// {value: undefined, done: true}
}