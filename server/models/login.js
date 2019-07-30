
const express = require('express');
const OptPool = require('../routes/sql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../constant/constant');

const salt = bcrypt.genSaltSync(10);

let optPool = new OptPool();
let pool = optPool.getPool();

const login = (body) => {
    return new Promise((resolve, reject) => {
        const user = `SELECT * from user WHERE name='${body.name}'`;
        pool.getConnection((err, conn) => {
            if (err) {
                console.log(err);
                reject({
                    'status': 500,
                    'msg': '出错了'
                })
            } else {
                conn.query(user, function (err2, rs) {
                    if (err2) {
                        console.log(err2);
                        return
                    }
                    const message = rs[0];
                    if (message != null || message != undefined) {
                        // 加密密码
                        if(bcrypt.compareSync(body.password, message.password)) {
                            // 生成token
                            let token = jwt.sign({username: body.name}, secretKey, {
                                expiresIn: 60 * 60 * 24
                            });
                            resolve({
                                'status': 200,
                                // 'name': message.name,
                                'token': token
                            })
                        } else {
                            resolve({
                                'status': 400,
                                'msg': '用户名或密码错误'
                            })
                        }
                    } else {
                        resolve({
                            'status': 499,
                            'msg': '暂无此用户'
                        })
                    }
                });
            }
            conn.release();
        });
    });

};

module.exports = login;