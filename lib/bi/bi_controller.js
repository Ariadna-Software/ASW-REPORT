/*
 bi_controller.js
 Rutas de manejo de l bi
*/

var express = require("express");
var router = express.Router();
var biDb = require("../bi/bi_db_mysql");

router.get('/:db/:table', function(req, res){
    var db = req.params.db;
    var table = req.params.table;
    biDb.bi(db, table, function(err, regs){
        if (err) return res.status(500).send(err.message);
        res.json(regs);
    })
});


module.exports = router;