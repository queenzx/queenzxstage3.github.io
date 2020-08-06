{
    // Promise.all()
    // 将多个promise对象封装成一个新的promise对象
    // 只有当所有promise对象的状态都变成fulfilled时
    // 新的promise对象才会变成fulfilled状态
    // 只要有一个是rejected状态，新的promise对象就是rejected状态

    // 同时加载多张图片,将其显示在页面上

    // let loadImg = src =>{}
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src = src;
            img.width = 500;
            // 图片加载完成后调用
            img.onload = ()=>{
                // 加载完成,返回img
                resolve(img);
            }
            img.onerror = err=>{
                // 加载失败,返回错误信息
                reject(err);
            }
        });
    }

    // Promise.race()
    // 参数和all方法一样,是一个promise实例数组
    // 返回值也是一个新的promise对象
    // 当参数中的promise有一个状态转变为fulfilled
    // 新的promise的状态就会变成fulfilled，剩下的忽略
    /* Promise.race([
        loadImg('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1216054614,3977800481&fm=26&gp=0.jpg'),
        loadImg('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4201614549,2318355746&fm=26&gp=0.jpg'),
        loadImg('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=278758595,2423468234&fm=26&gp=0.jpg'),
        loadImg('https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2090572129,2744853961&fm=26&gp=0.jpg')
    ])
    // 全部加载成功
    .then(img=>{
        console.log(img);
        document.body.appendChild(img);
    })
    // 捕获第一个加载失败的promise对象
    .catch(err=>{
        console.log(err);
    }); */


    // all方法的参数是一个promise实例数组
    // 返回值是一个新的promise对象
    /* Promise.all([
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596704840868&di=29c6cce593b8b1f620403ddd2f81a563&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F05%2F00%2F01300000194285122188000535877.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596704840867&di=ae2e1e44dd36d79ecdfca5e9bddcce21&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F62%2F02%2F01300542526392139955025309984.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596704840859&di=41e72612ea410e73150db1c22d0f5d74&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F55%2F22%2F20300000929429130630222900050.jpg'),
        loadImg('https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2090572129,2744853961&fm=26&gp=0.jpg')
    ])
    // 全部加载成功
    .then(imgs=>{
        console.log(imgs);//imgs是一个数组
        imgs.forEach(img=>{//img是遍历出来的每一个img
            document.body.appendChild(img);
        });
    })
    // 捕获第一个加载失败的promise对象
    .catch(err=>{
        console.log(err);
    }); */

    // Promise.allSettled()
    // 没有错误事件
    Promise.allSettled([
        loadImg('https://ss1.bdstatic.om/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1216054614,3977800481&fm=26&gp=0.jpg'),
        loadImg('https://ss1.bdstatic.om/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4201614549,2318355746&fm=26&gp=0.jpg'),
        loadImg('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=278758595,2423468234&fm=26&gp=0.jpg'),
        loadImg('https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2090572129,2744853961&fm=26&gp=0.jpg')
    ])
    .then(results=>{
        console.log(results);
        results.forEach(img=>{
            console.log(img);
            if(img.status=='fulfilled'){
                document.body.appendChild(img.value);
            }else{
                let h1 = document.createElement('h1');
                h1.innerHTML = '图片加载失败';
                document.body.appendChild(h1);
            }
        });
    })
}

// return 可以在函数,if,for循环