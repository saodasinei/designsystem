const routerApi = require ('./router');
const bodyParser = require('body-parser');
const express = require('express');



// 创建服务器
const server = express();


// 中间件

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));

server.use('/api', routerApi);

// server.use('/', function(request, response, next){
//     console.log('中间件')
//     next()
// })



// server.get('/', function(request, response){
//     response.send('get请求成功')
// })

server.get('/get', function(request, response, next){
    console.log(request.query.page)
    console.log("从数据库中取数")
    next()
}, function(request, response){
    response.send('get请求成功')
})


server.post('/post', function(request, response){
    console.log(request.body)
    console.log(request.body.email)
    console.log(request.body.remarkInfo)
    response.send("post请求成功")
})

server.listen(3030);
console.log('success listen at port: 3030......')