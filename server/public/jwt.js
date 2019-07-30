const expressJwt = require('express-jwt');
const { secretKey } = require('../constant/constant');

const jwtAuth = expressJwt({secret: secretKey}).unless({path: ['/login', '/regist', '/acticle/list']});

module.exports = jwtAuth;