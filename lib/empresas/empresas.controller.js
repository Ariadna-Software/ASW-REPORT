/*
 empresas.controller.js
 Gestión de las rutas de empresas de usuarios en la API
*/
var express = require("express");
var router = express.Router();
var empresasDb = require("../empresas/empresas.db_mysql");

router.get('/', function (req, res) {
    empresasDb.get(function (err, empresas) {
        if (err) return res.status(500).send(err.message);
        res.json(empresas);
    });
});

router.get('/:empresaId', function (req, res) {
    var empresaId = req.params.empresaId;
    if (!empresaId) return res.status(400).send('Debe indicar el identificador de empresa');
    empresasDb.getById(empresaId, function (err, empresas) {
        if (err) return res.status(500).send(err.message);
        if (empresas.length == 0) return res.status(404).send("Grupo no encontrado");
        res.json(empresas[0]);
    });
})

router.post('/', function (req, res) {
    var empresa = req.body;
    if (!empresa) return res.status(400).send('Debe incluir un objeto de empresa en el cuerpo del mensaje');
    empresasDb.post(empresa, function (err, empresa) {
        if (err) return res.status(500).send(err.message);
        res.json(empresa);
    });
});

router.put('/', function (req, res) {
    var empresa = req.body;
    if (!empresa) return res.status(400).send('Debe incluir un objeto de empresa en el cuerpo del mensaje');
    empresasDb.put(empresa, function (err, empresa) {
        if (err) return res.status(500).send(err.message);
        res.json(empresa);
    });
});

router.delete('/:empresaId', function (req, res) {
    var empresaId = req.params.empresaId;
    if (!empresaId) return res.status(400).send('Debe indicar el identificador de empresa');
    empresasDb.delete(empresaId, function (err, result) {
        if (err) return res.status(500).send(err.message);
        res.json(result);
    });
});

module.exports = router;