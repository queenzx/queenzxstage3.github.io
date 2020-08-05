{
    // class类的使用
    /* function Point(x,y){
        this.x=x;
        this.y=y;
    }
    console.log(new Point(1,3));//Point {x: 1, y: 3}
    Point.prototype.toString = function(){
        return `(${this.x},${this.y})`
    }
    console.log(new Point(1,3).toString());//(1,3) */

    class Stu{
        constructor(id,name){ // 构造方法
            this.id = id;
            this.name = name;
        }
        say(){};
        work(){};
        run(){};
    }
    let s = new Stu(1,'jim');
    console.log(s);
}


{
    function Stu(id,name){
        this.id = id;
        this.name = name;
    }
    Stu.prototype = {
        say:function(){},
        walk:function(){},
        run:function(){}
    }
    let s = new Stu(1,'jim');
    console.log(s);
}