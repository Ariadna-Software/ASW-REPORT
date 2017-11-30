/*
 tipos-actividades.controller.js
 Gestión de las rutas de tipos de actividad en la API
*/
var express = require("express");
var router = express.Router();
var tiposActividadesDb = require("../tipos-actividades/tipos-actividades.db_mysql");

router.get('/', function (req, res) {
    tiposActividadesDb.get(function (err, tipos) {
        if (err) return res.status(500).send(err.message);
        res.json(tipos);
    });
});

router.get('/:tipoActividadId', function (req, res) {
    var tipoActividadId = req.params.tipoActividadId;
    if (!tipoActividadId) return res.status(400).send('Debe indicar el identificador de tipo actividad');
    tiposActividadesDb.getById(tipoActividadId, function (err, tipos) {
        if (err) return res.status(500).send(err.message);
        if (tipos.length == 0) return res.status(404).send("Tipo no encontrado");
        res.json(tipos[0]);
    });
})

router.post('/', function (req, res) {
    var tipo = req.body;
    if (!tipo) return res.status(400).send('Debe incluir un objeto de tipo actividad en el cuerpo del mensaje');
    tiposActividadesDb.post(tipo, function (err, tipo) {
        if (err) return res.status(500).send(err.message);
        res.json(tipo);
    });
});

router.put('/', function (req, res) {
    var tipo = req.body;
    if (!tipo) return res.status(400).send('Debe incluir un objeto de tipo actividad en el cuerpo del mensaje');
    tiposActividadesDb.put(tipo, function (err, tipo) {
        if (err) return res.status(500).send(err.message);
        res.json(tipo);
    });
});

router.delete('/:tipoActividadId', function (req, res) {
    var tipoActividadId = req.params.tipoActividadId;
    if (!tipoActividadId) return res.status(400).send('Debe indicar el identificador de tipo actividad');
    tiposActividadesDb.delete(tipoActividadId, function (err, result) {
        if (err) return res.status(500).send(err.message);
        res.json(result);
    });
});

module.exports = router;