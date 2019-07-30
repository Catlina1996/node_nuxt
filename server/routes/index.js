const express = require('express');
const router = express.Router();
const jwtAuth = require('../public/jwt');

router.use(jwtAuth);

/* GET home page. */
router.use((req, res, next) => {
  next();
});

module.exports = router;
