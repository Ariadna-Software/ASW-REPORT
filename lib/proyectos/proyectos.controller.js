/*
 proyectos.controller.js
 Gestión de las rutas de proyectos de usuarios en la API
*/
var express = require("express");
var router = express.Router();
var proyectosDb = require("../proyectos/proyectos.db_mysql");

router.get('/', function (req, res) {
    proyectosDb.get(function (err, proyectos) {
        if (err) return res.status(500).send(err.message);
        res.json(proyectos);
    });
});

router.get('/:proyectoId', function (req, res) {
    var proyectoId = req.params.proyectoId;
    if (!proyectoId) return res.status(400).send('Debe indicar el identificador de proyecto');
    proyectosDb.getById(proyectoId, function (err, proyectos) {
        if (err) return res.status(500).send(err.message);
        if (proyectos.length == 0) return res.status(404).send("Grupo no encontrado");
        res.json(proyectos[0]);
    });
})

router.post('/', function (req, res) {
    var proyecto = req.body;
    if (!proyecto) return res.status(400).send('Debe incluir un objeto de proyecto en el cuerpo del mensaje');
    proyectosDb.post(proyecto, function (err, proyecto) {
        if (err) return res.status(500).send(err.message);
        res.json(proyecto);
    });
});

router.put('/', function (req, res) {
    var proyecto = req.body;
    if (!proyecto) return res.status(400).send('Debe incluir un objeto de proyecto en el cuerpo del mensaje');
    proyectosDb.put(proyecto, function (err, proyecto) {
        if (err) return res.status(500).send(err.message);
        res.json(proyecto);
    });
});

router.delete('/:proyectoId', function (req, res) {
    var proyectoId = req.params.proyectoId;
    if (!proyectoId) return res.status(400).send('Debe indicar el identificador de proyecto');
    proyectosDb.delete(proyectoId, function (err, result) {
        if (err) return res.status(500).send(err.message);
        res.json(result);
    });
});

module.exports = router;