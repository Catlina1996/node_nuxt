const express = require('express');
const router = express.Router();
const login = require('../models/login');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

router.post('/', function (req, res, next) {
    console.log(`用户：${req.body.name} 执行了登录操作`);
    login(req.body).then((val) => {
        if(val.status == 200) {
            res.status(200).send({
                'token': val.token
            });
            return
        }
        if(val.status == 400) {
            res.status(400).send({
                'msg': val.msg
            });
            return
        }
        if(val.status == 499) {
            res.status(499).send({
                'msg': val.msg
            });
            return
        }
        if(val.status == 500) {
            res.status(500).send({
                'msg': val.msg
            });
            return
        }
    })


});

module.exports = router;