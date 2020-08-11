let express = require('express');
let fd = require('formidable');

let app = express();
app.listen(4000);

app.post('/upload',(req,res)=>{
    // 创建formidable对应的表单对象
    let form = new fd.IncomingForm();
    form.uploadDir = './';
    form.parse(req,(err,fields,files)=>{
        console.log(err);
        console.log(fields);
        console.log(files);
        res.send('上传成功');
    })
});