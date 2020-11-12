const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test1',
})
conn.connect();
//select * from student
//inser into student set name="张杰杰" sex ="男" age =19 tel= 562325
//updata student set sex= "男" where id>6
//delete from student where id>9
conn.query('select * from student', (err, result) => {
    if (err) throw err;
    console.log(result)
});
conn.end();