
function sql(sql, val, cb) {
    const mysql = require('mysql')
    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'test1',
    })
    conn.connect();
    conn.query(sql, val, cb);
    conn.end();
}
module.exports = sql;