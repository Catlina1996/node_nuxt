const express = require('express');
const router = express.Router();
const OptPool = require('../routes/sql');
const findUser = require('../models/findUser');
const login = require('../models/login');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

let optPool = new OptPool();
let pool = optPool.getPool();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

router.post('/', function(req, res, next) {
    findUser(req.body.name).then(val => {
        if(val.status == true) {
            const insertUser = `INSERT INTO user(name, password, user_score) VALUES(?,?,?)`;
            const pwd = bcrypt.hashSync(req.body.password, salt);
            const param = [req.body.name, pwd, 0];
            pool.getConnection((err, conn) => {
                if(err) {
                    console.log('连接数据库失败')
                } else {
                    conn.query(insertUser, param, function(err2, rs) {
                        if(err2) {
                            console.log(err2);
                            return
                        } else {
                            console.log('注册成功');
                            login(req.body).then(val2 => {
                                if(val2.status == 200) {
                                    res.status(200).send({
                                        'token': val2.token
                                    });
                                    return
                                }
                                if(val2.status == 400) {
                                    res.status(400).send({
                                        'msg': val2.msg
                                    });
                                    return
                                }
                                if(val2.status == 499) {
                                    res.status(499).send({
                                        'msg': val2.msg
                                    });
                                    return
                                }
                                if(val2.status == 500) {
                                    res.status(500).send({
                                        'msg': val2.msg
                                    });
                                    return
                                }
                            })
                        }
                    });
                    conn.release()
                }
            })
        } else {
            res.status(405).send({
                'msg': '用户名已存在'
            })
        }
    });
});

module.exports = router;