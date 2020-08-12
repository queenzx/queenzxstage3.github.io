let webSocket = require('ws');

// 创建websocket服务
let wss = new webSocket.Server({
    port:4000
});

// 连接成功后,得到一个ws连接 对象,用于数据的接收和发送
wss.on('connection',ws=>{
    // 监听客户端发送过来的数据
    ws.on('message',msg=>{
        console.log(msg);
        msg = msg.split('').reverse().join('');//翻转
        ws.send(msg);
    });
});