'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM employee'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json({data: response})
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM emoloyee WHERE id = ?'
        db.query(sql, [req.params.productId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let id = req.params.id;
        let sql = 'UPDATE employee SET ? WHERE id = ?'
        db.query(sql, [data, id], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = util.format("INSERT INTO `employee`(`name`, `mail`, `address`, `phone`) VALUES ('%s','%s','%s','%s')",
         data.name,data.mail,data.address,data.phone);
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({
                message: 'Insert success!',
                id: response.insertId
            })
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM employee WHERE id = ?'
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}