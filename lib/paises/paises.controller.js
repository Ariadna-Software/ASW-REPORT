/*
 paises.controller.js
 Gestión de las rutas de paises de usuarios en la API
*/
var express = require("express");
var router = express.Router();
var paisesDb = require("../paises/paises.db_mysql");

router.get('/', function (req, res) {
    paisesDb.get(function (err, paises) {
        if (err) return res.status(500).send(err.message);
        res.json(paises);
    });
});

router.get('/:paisId', function (req, res) {
    var paisId = req.params.paisId;
    if (!paisId) return res.status(400).send('Debe indicar el identificador de pais');
    paisesDb.getById(paisId, function (err, paises) {
        if (err) return res.status(500).send(err.message);
        if (paises.length == 0) return res.status(404).send("Grupo no encontrado");
        res.json(paises[0]);
    });
})

router.post('/', function (req, res) {
    var pais = req.body;
    if (!pais) return res.status(400).send('Debe incluir un objeto de pais en el cuerpo del mensaje');
    paisesDb.post(pais, function (err, pais) {
        if (err) return res.status(500).send(err.message);
        res.json(pais);
    });
});

router.put('/', function (req, res) {
    var pais = req.body;
    if (!pais) return res.status(400).send('Debe incluir un objeto de pais en el cuerpo del mensaje');
    paisesDb.put(pais, function (err, pais) {
        if (err) return res.status(500).send(err.message);
        res.json(pais);
    });
});

router.delete('/:paisId', function (req, res) {
    var paisId = req.params.paisId;
    if (!paisId) return res.status(400).send('Debe indicar el identificador de pais');
    paisesDb.delete(paisId, function (err, result) {
        if (err) return res.status(500).send(err.message);
        res.json(result);
    });
});

module.exports = router;