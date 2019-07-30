const express = require('express');
const OptPool = require('../routes/sql');

let optPool = new OptPool();
let pool = optPool.getPool();

const findUser = (name) => {
    return new Promise((resolve, reject) => {
        const user = `SELECT * from user WHERE name='${name}'`;
        pool.getConnection((err, conn) => {
            if(err) {
                reject({
                    'status': 500,
                    'msg': '查找失败'
                })
            } else {
                conn.query(user, function(err2, rs) {
                    if(err2) {
                        console.log('查找失败',err2);
                        return
                    }
                    if(rs[0] != null || rs[0] != undefined) {
                        console.log('用户存在');
                        //用户存在
                        resolve({
                            'status': false
                        })
                    } else {
                        resolve({
                            'status': true
                        })
                    }
                });
                conn.release()
            }
        })
    })
};

module.exports = findUser;