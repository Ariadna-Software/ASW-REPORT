/*
 grupos-actividades.controller.js
 Gestión de las rutas de grupos de usuarios en la API
*/
var express = require("express");
var router = express.Router();
var gruposActividadesDb = require("../grupos-actividades/grupos-actividades.db_mysql");

router.get('/', function (req, res) {
    gruposActividadesDb.get(function (err, grupos) {
        if (err) return res.status(500).send(err.message);
        res.json(grupos);
    });
});

router.get('/:grupoActividadId', function (req, res) {
    var grupoActividadId = req.params.grupoActividadId;
    if (!grupoActividadId) return res.status(400).send('Debe indicar el identificador de grupo');
    gruposActividadesDb.getById(grupoActividadId, function (err, grupos) {
        if (err) return res.status(500).send(err.message);
        if (grupos.length == 0) return res.status(404).send("Grupo no encontrado");
        res.json(grupos[0]);
    });
})

router.post('/', function (req, res) {
    var grupoActividad = req.body;
    if (!grupoActividad) return res.status(400).send('Debe incluir un objeto de grupo en el cuerpo del mensaje');
    gruposActividadesDb.post(grupoActividad, function (err, grupo) {
        if (err) return res.status(500).send(err.message);
        res.json(grupo);
    });
});

router.put('/', function (req, res) {
    var grupoActividad = req.body;
    if (!grupoActividad) return res.status(400).send('Debe incluir un objeto de grupo en el cuerpo del mensaje');
    gruposActividadesDb.put(grupoActividad, function (err, grupo) {
        if (err) return res.status(500).send(err.message);
        res.json(grupo);
    });
});

router.delete('/:grupoActividadId', function (req, res) {
    var grupoActividadId = req.params.grupoActividadId;
    if (!grupoActividadId) return res.status(400).send('Debe indicar el identificador de grupo');
    gruposActividadesDb.delete(grupoActividadId, function (err, result) {
        if (err) return res.status(500).send(err.message);
        res.json(result);
    });
});

module.exports = router;