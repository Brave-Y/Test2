const express = require('express');
const app = express();
app.listen(3006, () => console.log('服务器启动了'));

// 写接口
app.get('/api/login', (req, res) => {
    // res.end(JSON.stringify({id: 1, age: 20})); // end 方法是http模块中的方法。使用express，仍然可以使用原来http模块的方法
    // express提供的新方法
    /**
     * set 用于设置响应头
     * status 用于设置响应状态码`
     * send 用于设置响应体 以及 做出响应
     */
    res.set({
        'Author': 'Laotang'
    });
    res.status(200).send('123');
});