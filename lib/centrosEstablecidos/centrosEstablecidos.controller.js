/*
 centrosEstablecidos.controller.js
 Gestión de las rutas de centrosEstablecidos de usuarios en la API
*/
var express = require("express");
var router = express.Router();
var centrosEstablecidosDb = require("../centrosEstablecidos/centrosEstablecidos.db_mysql");

router.get('/', function (req, res) {
    centrosEstablecidosDb.get(function (err, centrosEstablecidos) {
        if (err) return res.status(500).send(err.message);
        res.json(centrosEstablecidos);
    });
});

router.get('/:centroEstablecidoId', function (req, res) {
    var centroEstablecidoId = req.params.centroEstablecidoId;
    if (!centroEstablecidoId) return res.status(400).send('Debe indicar el identificador de centroEstablecido');
    centrosEstablecidosDb.getById(centroEstablecidoId, function (err, centrosEstablecidos) {
        if (err) return res.status(500).send(err.message);
        if (centrosEstablecidos.length == 0) return res.status(404).send("Grupo no encontrado");
        res.json(centrosEstablecidos[0]);
    });
})

router.post('/', function (req, res) {
    var centroEstablecido = req.body;
    if (!centroEstablecido) return res.status(400).send('Debe incluir un objeto de centroEstablecido en el cuerpo del mensaje');
    centrosEstablecidosDb.post(centroEstablecido, function (err, centroEstablecido) {
        if (err) return res.status(500).send(err.message);
        res.json(centroEstablecido);
    });
});

router.put('/', function (req, res) {
    var centroEstablecido = req.body;
    if (!centroEstablecido) return res.status(400).send('Debe incluir un objeto de centroEstablecido en el cuerpo del mensaje');
    centrosEstablecidosDb.put(centroEstablecido, function (err, centroEstablecido) {
        if (err) return res.status(500).send(err.message);
        res.json(centroEstablecido);
    });
});

router.delete('/:centroEstablecidoId', function (req, res) {
    var centroEstablecidoId = req.params.centroEstablecidoId;
    if (!centroEstablecidoId) return res.status(400).send('Debe indicar el identificador de centroEstablecido');
    centrosEstablecidosDb.delete(centroEstablecidoId, function (err, result) {
        if (err) return res.status(500).send(err.message);
        res.json(result);
    });
});

module.exports = router;