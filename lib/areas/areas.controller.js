/*
 areas.controller.js
 Gestión de las rutas de areas de usuarios en la API
*/
var express = require("express");
var router = express.Router();
var areasDb = require("../areas/areas.db_mysql");

router.get('/', function (req, res) {
    areasDb.get(function (err, areas) {
        if (err) return res.status(500).send(err.message);
        res.json(areas);
    });
});

router.get('/:areaId', function (req, res) {
    var areaId = req.params.areaId;
    if (!areaId) return res.status(400).send('Debe indicar el identificador de area');
    areasDb.getById(areaId, function (err, areas) {
        if (err) return res.status(500).send(err.message);
        if (areas.length == 0) return res.status(404).send("Grupo no encontrado");
        res.json(areas[0]);
    });
})

router.post('/', function (req, res) {
    var area = req.body;
    if (!area) return res.status(400).send('Debe incluir un objeto de area en el cuerpo del mensaje');
    areasDb.post(area, function (err, area) {
        if (err) return res.status(500).send(err.message);
        res.json(area);
    });
});

router.put('/', function (req, res) {
    var area = req.body;
    if (!area) return res.status(400).send('Debe incluir un objeto de area en el cuerpo del mensaje');
    areasDb.put(area, function (err, area) {
        if (err) return res.status(500).send(err.message);
        res.json(area);
    });
});

router.delete('/:areaId', function (req, res) {
    var areaId = req.params.areaId;
    if (!areaId) return res.status(400).send('Debe indicar el identificador de area');
    areasDb.delete(areaId, function (err, result) {
        if (err) return res.status(500).send(err.message);
        res.json(result);
    });
});

module.exports = router;