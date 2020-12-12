const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap');

const pool = mysql.createPool({
     host: dbConfig.mysql.host,
     user: dbConfig.mysql.user,
     password: dbConfig.mysql.password,
     database: dbConfig.mysql.database,
     port: dbConfig.mysql.port,
     multipleStatements: true
});

module.exports = {
    login(req, res, next){
        var userid = req.body.userid;
        var password = req.body.password
        pool.getConnection((err, connection) => {
            var sql = sqlMap.login;
            connection.query(sql,[
                userid,
                password
            ],(err,data)=>{
                if(err) {
                    console.log(err)
                    var result = {
                        "code":500,
                        "result":0,
                        "message":"服务器错误",
                        "data":null
                    }
                    return res.json(result);
                }   else{
                    let result ={
                        "code":200,
                        "result": 1,
                        "message": null,
                        "data": data[0]
                    }
                    return res.json(result);
                }
            })
        })
    },
    getUserInfo(req, res, next) {
        var userid = req.body.userid;
        pool.getConnection((err, connection) => {
            var sql = sqlMap.getUserInfo;
            connection.query(sql, userid, (err, data)=>{
                if (err){
                    console.log(err)
                    var result = {
                        "result":0,
                        "code":500,
                        "message":null,
                        "data":data[0]
                    }
                    return res.json(result);
                }
            })
        })
    }


}