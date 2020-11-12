const express = require('express')
const app = express();
app.listen(3006, () => {
    console.log("服务器启动了")
})
//解决跨域问题
const cors = require('cors');
app.use(cors());
//加载数据库
const sql = require('./sql');
//加载undercode
app.use(express.urlencoded({ extended: false }));
//开始写接口
//----------------登录接口
app.post('/api/login', (req, res) => {
    if (req.body.username === 'brave' && req.body.password === '123456') {
        res.send('登陆成功，欢迎您！')
    } else {
        res.send('您输入的账号或者密码有误哦')
    }
})
//获取数据库信息列表
app.get('/api/getsql', (req, res) => {
    sql('select * from student', (err, result) => {
        if (err) throw err;
        res.send({
            status: 200,
            msg: '获取数据库信息成功',
            data: result
        })
    })
})
//添加信息接口
app.post('/api/addsql', (req, res) => {
    sql('insert into student set ?', req.body, (err, result) => {
        if (err) throw err
        if (result.affectedRows > 0) {
            res.send({
                status: 201,
                masg: '添加信息成功',
            })
        } else {
            res.send({
                status: 200,
                msg: '添加信息失败',
            })
        }
    })
})
//根据id删除信息1
app.get('/api/del/:id', (req, res) => {
    console.log(req.params.id)
    res.send({
        status: 200,
        message: '模拟删除成功'
    })
})
//数据库删除
app.get('/api/del', (req, res) => {
    sql('delete from student where id=?', req.query.id, (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            res.send({
                status: 200,
                message: '删除信息成功'
            })
        } else {
            res.send({
                status: 201,
                message: '删除信息失败'
            })
        }
    })
})

//上传文件
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });// 配置上传的目录
app.post('/api/addfle', upload.single('qqimg'), (req, res) => {
    console.log(req.body)
    console.log(req.file);
    res.send('上传文件成功')
})