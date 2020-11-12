// 1. 加载http模块
const http = require('http');
// 2. 创建服务对象
const server = http.createServer();
// 3. 监听端口，启动服务
server.listen(3006, () => console.log('服务器启动了'))
// 4. 处理客户端的请求
server.on('request', (req, res) => {
    // 获取请求方式和url
    // let {method, url} = req;
    // let method = req.method, url = req.url;
    let method = req.method; // GET / POST
    let url = req.url;
    //console.log(url); // /api/getbooks  |  /api/addbook  |  /api/delbook?id=2
    // 解析url
    let obj = new URL(url, 'http://sss.com');
    // 获取接口地址
    let api = obj.pathname;
    // 获取id参数
    // let id = obj.searchParams.get('id');
    // 统一设置响应头
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    // 判断，判断客户端请求的是哪个接口
    if (method === 'GET' && api === '/api/getbooks') {
        // 说明客户端请求的是获取图书列表的接口
        res.end('你发送的是GET请求,接口是:/api/getbooks');
    } else if (method === 'POST' && api === '/api/addbook') {
        // 说明客户端请求是为了添加图书
        res.end('你发送的是POST请求,接口是:/api/addbook');
    } else if (method === 'GET' && api === '/api/delbook') {
        // 说明客户端请求是为了删除一本书
        res.end('你发送的是GET请求,接口是:/api/delbook');
    } else {
        // 说明客户端请求了一个不存在的接口
        res.end('小朋友，你走错了');
    }

});