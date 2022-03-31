var express = require('express');
var awssql = express.Router();

var dbconfig = require('../db/config')
var mysql = require('mysql');

var connection = mysql.createConnection(dbconfig);

awssql.get('/',(req,res)=>{
    connection.query('SELECT * FROM interview',(error,rows) =>{
        if(error) throw error;
        console.log('해당스키마안의 테이블 내용 : ', rows);
        res.send(rows);
    })
})

module.exports = awssql;