const express = require('express')
const router = express.Router()

const listfn = require('./listfn')


router.get('/jsnote/list', listfn.getList)
router.get('/jsnote/detail', listfn.listDetail)
router.post('/jsnote/write', listfn.write)

module.exports = router