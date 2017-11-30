/*
responsables.controller.js
 Gestión de las rutas de responsables de responsables en la API
*/
var express = require("express");
var router = express.Router();
var responsablesDb = require("../responsables/responsables.db_mysql");

router.get('/', function (req, res) {
    responsablesDb.get(function (err, responsables) {
        if (err) return res.status(500).send(err.message);
        res.json(responsables);
    });
});

router.get('/:responsableId', function (req, res) {
    var responsableId = req.params.responsableId;
    if (!responsableId) return res.status(400).send('Debe indicar el identificador de responsable');
    responsablesDb.getById(responsableId, function (err, responsables) {
        if (err) return res.status(500).send(err.message);
        if (responsables.length == 0) return res.status(404).send("Grupo no encontrado");
        res.json(responsables[0]);
    });
})

router.post('/', function (req, res) {
    var responsable = req.body;
    if (!responsable) return res.status(400).send('Debe incluir un objeto de responsable en el cuerpo del mensaje');
    responsablesDb.post(responsable, function (err, responsable) {
        if (err) return res.status(500).send(err.message);
        res.json(responsable);
    });
});

router.put('/', function (req, res) {
    var responsable = req.body;
    if (!responsable) return res.status(400).send('Debe incluir un objeto de responsable en el cuerpo del mensaje');
    responsablesDb.put(responsable, function (err, responsable) {
        if (err) return res.status(500).send(err.message);
        res.json(responsable);
    });
});

router.delete('/:responsableId', function (req, res) {
    var responsableId = req.params.responsableId;
    if (!responsableId) return res.status(400).send('Debe indicar el identificador de responsable');
    responsablesDb.delete(responsableId, function (err, result) {
        if (err) return res.status(500).send(err.message);
        res.json(result);
    });
});

module.exports = router;