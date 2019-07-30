const express = require('express');
const router = express.Router();
const OptPool = require('../routes/sql');

let optPool = new OptPool();
let pool = optPool.getPool();

var app = express();
router.get('/', function (req, res, next) {
    const acticleList = 'SELECT * from acticle';
    pool.getConnection((err, conn) => {
        if(err) {
            console.log(err);
            return
        }
        conn.query(acticleList, function(err2, rs) {
            if(err2) {
                console.log(err2);
                return
            }
            res.status(200).send({
                'data': rs
            });
        });
        conn.release()
    })
});

module.exports = router;