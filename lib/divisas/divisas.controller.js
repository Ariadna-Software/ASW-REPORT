/*
 divisas.controller.js
 Gestión de las rutas de divisas de usuarios en la API
*/
var express = require("express");
var router = express.Router();
var divisasDb = require("../divisas/divisas.db_mysql");

router.get('/', function (req, res) {
    divisasDb.get(function (err, divisas) {
        if (err) return res.status(500).send(err.message);
        res.json(divisas);
    });
});

router.get('/:divisaId', function (req, res) {
    var divisaId = req.params.divisaId;
    if (!divisaId) return res.status(400).send('Debe indicar el identificador de divisa');
    divisasDb.getById(divisaId, function (err, divisas) {
        if (err) return res.status(500).send(err.message);
        if (divisas.length == 0) return res.status(404).send("Grupo no encontrado");
        res.json(divisas[0]);
    });
})

router.post('/', function (req, res) {
    var divisa = req.body;
    if (!divisa) return res.status(400).send('Debe incluir un objeto de divisa en el cuerpo del mensaje');
    divisasDb.post(divisa, function (err, divisa) {
        if (err) return res.status(500).send(err.message);
        res.json(divisa);
    });
});

router.put('/', function (req, res) {
    var divisa = req.body;
    if (!divisa) return res.status(400).send('Debe incluir un objeto de divisa en el cuerpo del mensaje');
    divisasDb.put(divisa, function (err, divisa) {
        if (err) return res.status(500).send(err.message);
        res.json(divisa);
    });
});

router.delete('/:divisaId', function (req, res) {
    var divisaId = req.params.divisaId;
    if (!divisaId) return res.status(400).send('Debe indicar el identificador de divisa');
    divisasDb.delete(divisaId, function (err, result) {
        if (err) return res.status(500).send(err.message);
        res.json(result);
    });
});

module.exports = router;