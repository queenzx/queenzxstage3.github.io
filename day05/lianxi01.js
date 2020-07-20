var http = require("http");
var router = require("./router");
// 方法1:
/* router.showIndex();
router.showInfo();
router.showErr(); */
http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    if(req.url == "/favicon.ico"){
        return ;
    }
    if(req.url == "/"){
        // 方法2:
        // 2-1
        // res.end(router.showIndex());
        // 2-2 
        router.showIndex(req,res);
        // 方法3:
        /* var index = new router();
        res.end(index.showIndex()); */
        return ;
    }
    if(req.url == "/info"){
        // 方法2:
        // 2-1
        // res.end(router.showInfo());
        // 2-2
        router.showInfo(req,res);
        // 方法3:
        /* var info = new router();
        res.end(info.showInfo()); */
        return ;
    }
    // 其他请求
    // 方法2:
    // 2-1
    // res.end(router.showErr());
    // 2-2
    router.showErr(req,res);
    // 方法3:
    /* var err = new router();
    res.end(err.showErr()); */

}).listen(4000);