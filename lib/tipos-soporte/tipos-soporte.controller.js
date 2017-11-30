/*
 tiposSoporte.controller.js
 Gestión de las rutas de tiposSoporte de usuarios en la API
*/
var express = require("express");
var router = express.Router();
var tiposSoporteDb = require("../tipos-soporte/tipos-soporte.db_mysql");

router.get('/', function (req, res) {
    tiposSoporteDb.get(function (err, tiposSoporte) {
        if (err) return res.status(500).send(err.message);
        res.json(tiposSoporte);
    });
});

router.get('/:tipoSoporteId', function (req, res) {
    var tipoSoporteId = req.params.tipoSoporteId;
    if (!tipoSoporteId) return res.status(400).send('Debe indicar el identificador de tipo soporte');
    tiposSoporteDb.getById(tipoSoporteId, function (err, tiposSoporte) {
        if (err) return res.status(500).send(err.message);
        if (tiposSoporte.length == 0) return res.status(404).send("Grupo no encontrado");
        res.json(tiposSoporte[0]);
    });
})

router.post('/', function (req, res) {
    var tipoSoporte = req.body;
    if (!tipoSoporte) return res.status(400).send('Debe incluir un objeto de tipo soporte en el cuerpo del mensaje');
    tiposSoporteDb.post(tipoSoporte, function (err, tipoSoporte) {
        if (err) return res.status(500).send(err.message);
        res.json(tipoSoporte);
    });
});

router.put('/', function (req, res) {
    var tipoSoporte = req.body;
    if (!tipoSoporte) return res.status(400).send('Debe incluir un objeto de tipo soporte en el cuerpo del mensaje');
    tiposSoporteDb.put(tipoSoporte, function (err, tipoSoporte) {
        if (err) return res.status(500).send(err.message);
        res.json(tipoSoporte);
    });
});

router.delete('/:tipoSoporteId', function (req, res) {
    var tipoSoporteId = req.params.tipoSoporteId;
    if (!tipoSoporteId) return res.status(400).send('Debe indicar el identificador de tipo soporte');
    tiposSoporteDb.delete(tipoSoporteId, function (err, result) {
        if (err) return res.status(500).send(err.message);
        res.json(result);
    });
});

module.exports = router;