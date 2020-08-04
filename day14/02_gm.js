var gm = require('gm');

// annotate an image
gm('./1.jpg')
.stroke("red")//描边颜色,字体颜色
.drawCircle(10, 10, 20, 10)//画圆
.font("./arial.ttf", 12)//字体
.drawText(30, 20, "GMagick!")//x,y坐标,写的内容
.write("./3.jpg", function (err) {
    if(err){
        console.log('done');
        return ;
    }
    console.log('SUCCESS');
});

// crazytown
/* gm('./1.jpg')//被处理图片的路径
// .flip() //垂直翻转
// .magnify() 图片放大一倍
// .rotate('green', 45)//旋转45度,空白部分使用绿色填充
// .blur(7, 3) //使图片模糊化,失去焦点
// .crop(300, 300, 150, 130) // 剪切图片,宽高xy坐标,宽300,高300,从(150,130)的位置开始剪切
// gm convert 1.jpg -crop 100x100x0x0x  22.jpg
.crop(300, 600, 150, 130,true) // 
// .edge(3) //刻板雕花(锐化)
.write('./2.jpg', function (err) {
    // 处理后得到的新的图片的路径(输出路径)
    if (err){
        console.log(err);
        console.log('修图出错');
        return ;
    }
    console.log('修图成功');
}) */