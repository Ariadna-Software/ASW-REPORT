/*
 estados.controller.js
 Gestión de las rutas de estados de usuarios en la API
*/
var express = require("express");
var router = express.Router();
var estadosDb = require("../estados/estados.db_mysql");

router.get('/', function (req, res) {
    estadosDb.get(function (err, estados) {
        if (err) return res.status(500).send(err.message);
        res.json(estados);
    });
});

router.get('/:estadoId', function (req, res) {
    var estadoId = req.params.estadoId;
    if (!estadoId) return res.status(400).send('Debe indicar el identificador de estado');
    estadosDb.getById(estadoId, function (err, estados) {
        if (err) return res.status(500).send(err.message);
        if (estados.length == 0) return res.status(404).send("Grupo no encontrado");
        res.json(estados[0]);
    });
})

router.post('/', function (req, res) {
    var estado = req.body;
    if (!estado) return res.status(400).send('Debe incluir un objeto de estado en el cuerpo del mensaje');
    estadosDb.post(estado, function (err, estado) {
        if (err) return res.status(500).send(err.message);
        res.json(estado);
    });
});

router.put('/', function (req, res) {
    var estado = req.body;
    if (!estado) return res.status(400).send('Debe incluir un objeto de estado en el cuerpo del mensaje');
    estadosDb.put(estado, function (err, estado) {
        if (err) return res.status(500).send(err.message);
        res.json(estado);
    });
});

router.delete('/:estadoId', function (req, res) {
    var estadoId = req.params.estadoId;
    if (!estadoId) return res.status(400).send('Debe indicar el identificador de estado');
    estadosDb.delete(estadoId, function (err, result) {
        if (err) return res.status(500).send(err.message);
        res.json(result);
    });
});

module.exports = router;