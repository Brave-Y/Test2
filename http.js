const express = require('express');
const app = express();
app.listen(3006, () => { console.log('服务器启动了') })
//加载cors解决跨域问题
const cors = require('cors');
app.use(cors());
//加载数据库模板
const db = require('./db');
//加载
app.use(express.urlencoded({ extended: false }));
//---------------------------------------------------------编写接口
//登录接口 ----------------------------1111111111111111111111
app.post('/api/login', (req, res) => {
    if (req.body.username === 'brave' && req.body.password === '123456') {
        res.send({ status: 0, message: '登陆成功' })
    } else {
        res.send({ status: 1, message: '登陆失败' })
    }
})
//获取数据库列表
app.get('/api/getbooks', (req, res) => {
    db('select * from student', (err, result) => {
        if (err) throw err;
        res.send({
            status: 200,
            msg: '获取数据库信息成功',
            data: result
        })
    })
})
//-----------------------------------------------------添加图书接口
app.post('/api/addbook', (req, res) => {
    db('insert into student set ?', req.body, (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            res.send({ status: 201, msg: '添加信息成功', })
        } else { res.send({ status: 500, msg: '添加信息失败', }) }
    })
})
//根据id删除id-----------------------------2222222222222
app.get('/api/del/:id', (req, res) => {
    console.log(req.params.id);
    res.send({ status: 200, msg: '删除成功' })
})
//删除-------------?id=12
app.get('/api/del', (req, res) => {
    db('delete from student where id=?', req.query.id, (err, result) => {
        console.log(req.query.id)
        if (err) throw err;
        if (result.affectedRows > 0) {
            res.send({ status: 200, message: '删除成功' })
        } else { res.send({ status: 500, message: '删除失败' }) }
    })
})
