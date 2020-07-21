const fd = require('formidable');
const fs = require('fs');
const http = require('http');
http.createServer(function(req,res){
    if(req.url == '/tijiao' && req.method.toLocaleLowerCase()=="post"){
        // 新版本
        // const form = fd({ multiples: true });
        // 获取表单对象
        const form = fd();
        // 设置上传文件临时保存的路径
        form.uploadDir = "./uploads";
        
        /* // 更新之前的写法
        const form = fd.IncomingForm();
        // 获取表单对象 
        const form = new fd.IncomingForm(); 
        */
        /* 
        form.parse()解析请求对象,获取其中的数据
        err: 错误信息,解析出错
        fields: 解析得到的表单中的文本域的内容
        files: 解析得到的表单中上传的文件(文件默认保存在C盘)
        */
        form.parse(req, (err, fields, files) => {
            console.log(fields);
            console.log(files.pic1.path);
            // res.end('over');
            // 修改上传文件的名称
            var oldName = files.pic1.path;
            var newName = files.pic1.name;// x.jpg 
            newName = './uploads/'+newName;
            // 改名
            fs.rename(oldName,newName,function(err){
                console.log(err);
                res.end('rename over');
            });
        });
        return ;
    }
    fs.readFile('./01.html',function(err,data){
        if(err){
            res.end('read file err');
            return ;
        }
        res.end(data);
    });
}).listen(4000);
