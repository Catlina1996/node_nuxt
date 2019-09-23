const express = require('express')
const app = express()
const OptPool = require('../routes/sql')
const bodyParser = require('body-parser')
const util = require('../util/util')
const myfn = new util()

let optPool = new OptPool()
let pool = optPool.getPool()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = {
    getList: (req, res, next) => { //获取分类列表
        let page = 0
        if (req.query.page) {
            if (req.query.limit) page = (req.query.page - 1) * req.query.limit
            else page = (req.query.page - 1) * 10
        }
        const acticleList = `SELECT * from jsnote  WHERE type=${req.query.type || 1} limit ${page}, ${req.query.limit || 10}`
        const listCount = `SELECT COUNT(*) AS nums FROM jsnote WHERE type=${req.query.type || 1}`
        pool.getConnection((err, conn) => {
            if (err) return console.log(err)
            let data = new Promise((resolve, reject) => {
                conn.query(acticleList, function(err2, rs) {
                    if (err2) reject(err)
                    else resolve(rs)
                })
            })
            let count = new Promise((resolve, reject) => {
                conn.query(listCount, function(err2, rs) {
                    if (err2) reject(err)
                    else resolve(rs[0].nums)
                })
            })

            Promise.all([data, count]).then(values => {
                values[0].forEach((item, index) => {
                    item.create_time = myfn.setTime(item.create_time)
                })
                res.status(200).send({
                    'list': values[0],
                    'counts': values[1]
                })
            }, err => {
                res.status(404).send({ 'msg': '类型出错了' })
            })
            conn.release()
        })
    },

    listDetail(req, res, next) { //根据id查询详情
        const that = this
        pool.getConnection((err, conn) => {
            if (err) {
                console.log(err)
                return
            }
            const sentence = `SELECT * FROM jsnote WHERE id=${req.query.id}`
            conn.query(sentence, function(err2, rs) {
                if (err2) {
                    console.log(err2)
                    return
                }
                let rsData = rs
                rsData[0].update_time = myfn.setTime(rsData[0].update_time)
                const data = {
                    id: rsData[0].id,
                    title: rsData[0].title,
                    content: rsData[0].content,
                    abstract: rsData[0].abstract,
                    show_time: rsData[0].update_time
                }
                res.status(200).send(data)
            })

            conn.release()
        })
    },

    write(req, res, next) { //上传文章
        const reqData = req.body
        if (!reqData.title || reqData.title == '') {
            res.status(400).send({ 'msg': '标题不能为空' })
            return
        }
        if (!reqData.content || reqData.content == '') {
            res.status(400).send({ 'msg': '内容不能为空' })
            return
        }
        if (!reqData.type || reqData.type == '') {
            res.status(400).send({ 'msg': '类型不能为空' })
            return
        }
        const sentence = `INSERT INTO jsnote(title, content, abstract, type, create_time, update_time) VALUES(?,?,?,?,?,?)`

        const time = new Date().getTime()
        const param = [reqData.title, reqData.content, reqData.abstract || '', reqData.type, time, time]
        pool.getConnection((err, conn) => {
            if (err) return
            conn.query(sentence, param, (err2, rs) => {
                if (err2) {
                    console.log(err2)
                    return
                }
                res.status(200).send({ 'msg': '写完了' })
            })

            conn.release()
        })
    }

}