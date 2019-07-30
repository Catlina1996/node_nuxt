const express = require('express');
const expressWs = require('express-ws');
const router = express.Router();
expressWs(router);
const app = express();

app.use(function (req, res, next) {
    console.log('middleware');
    req.testing = 'testing';
    return next();
});

router
    .ws('/', function(ws, req) {
    console.log('开始连接');
    ws.on('message', function (msg) {
        console.log(msg);
        ws.send({
            'data': '连接上了'
        })
    });
    console.log('socket', req.testing);
})
    .get('/', function(req, res, next){
        console.log('get route', req.testing);
    res.end({
        'data': '连接上了'
    });
});

module.exports = router;