/*
 centros.controller.js
 Gestión de las rutas de centros de usuarios en la API
*/
var express = require("express");
var router = express.Router();
var centrosDb = require("../centros/centros.db_mysql");

router.get('/', function (req, res) {
    centrosDb.get(function (err, centros) {
        if (err) return res.status(500).send(err.message);
        res.json(centros);
    });
});

router.get('/:centroId', function (req, res) {
    var centroId = req.params.centroId;
    if (!centroId) return res.status(400).send('Debe indicar el identificador de centro');
    centrosDb.getById(centroId, function (err, centros) {
        if (err) return res.status(500).send(err.message);
        if (centros.length == 0) return res.status(404).send("Grupo no encontrado");
        res.json(centros[0]);
    });
})

router.post('/', function (req, res) {
    var centro = req.body;
    if (!centro) return res.status(400).send('Debe incluir un objeto de centro en el cuerpo del mensaje');
    centrosDb.post(centro, function (err, centro) {
        if (err) return res.status(500).send(err.message);
        res.json(centro);
    });
});

router.put('/', function (req, res) {
    var centro = req.body;
    if (!centro) return res.status(400).send('Debe incluir un objeto de centro en el cuerpo del mensaje');
    centrosDb.put(centro, function (err, centro) {
        if (err) return res.status(500).send(err.message);
        res.json(centro);
    });
});

router.delete('/:centroId', function (req, res) {
    var centroId = req.params.centroId;
    if (!centroId) return res.status(400).send('Debe indicar el identificador de centro');
    centrosDb.delete(centroId, function (err, result) {
        if (err) return res.status(500).send(err.message);
        res.json(result);
    });
});

module.exports = router;