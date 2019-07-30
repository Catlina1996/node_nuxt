const express = require('express');
const OptPool = require('../routes/sql');

let optPool = new OptPool();
let pool = optPool.getPool();

const len = (name) => {
    return new Promise((resolve, reject) => {
        const user = `SELECT MAX(id) AS max_id FROM ${name}`;
        pool.getConnection((err, conn) => {
            if(err) {
                reject({
                    'status': 500,
                    'msg': '查找失败'
                })
            } else {
                conn.query(user, function(err2, rs) {
                    console.log(rs)
                    if(err2) {
                        console.log('查找失败',err2);
                        return
                    }
                    resolve({
                        'len': rs[0].RowDataPacket.max_id
                    })
                });
                conn.release()
            }
        })
    })
};

module.exports = len;