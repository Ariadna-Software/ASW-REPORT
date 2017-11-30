/*
 tiposOferta.controller.js
 Gestión de las rutas de tiposOferta de usuarios en la API
*/
var express = require("express");
var router = express.Router();
var tiposOfertaDb = require("../tipos-oferta/tipos-oferta.db_mysql");

router.get('/', function (req, res) {
    tiposOfertaDb.get(function (err, tiposOferta) {
        if (err) return res.status(500).send(err.message);
        res.json(tiposOferta);
    });
});

router.get('/:tipoOfertaId', function (req, res) {
    var tipoOfertaId = req.params.tipoOfertaId;
    if (!tipoOfertaId) return res.status(400).send('Debe indicar el identificador de tipo soporte');
    tiposOfertaDb.getById(tipoOfertaId, function (err, tiposOferta) {
        if (err) return res.status(500).send(err.message);
        if (tiposOferta.length == 0) return res.status(404).send("Grupo no encontrado");
        res.json(tiposOferta[0]);
    });
})

router.post('/', function (req, res) {
    var tipoOferta = req.body;
    if (!tipoOferta) return res.status(400).send('Debe incluir un objeto de tipo soporte en el cuerpo del mensaje');
    tiposOfertaDb.post(tipoOferta, function (err, tipoOferta) {
        if (err) return res.status(500).send(err.message);
        res.json(tipoOferta);
    });
});

router.put('/', function (req, res) {
    var tipoOferta = req.body;
    if (!tipoOferta) return res.status(400).send('Debe incluir un objeto de tipo soporte en el cuerpo del mensaje');
    tiposOfertaDb.put(tipoOferta, function (err, tipoOferta) {
        if (err) return res.status(500).send(err.message);
        res.json(tipoOferta);
    });
});

router.delete('/:tipoOfertaId', function (req, res) {
    var tipoOfertaId = req.params.tipoOfertaId;
    if (!tipoOfertaId) return res.status(400).send('Debe indicar el identificador de tipo soporte');
    tiposOfertaDb.delete(tipoOfertaId, function (err, result) {
        if (err) return res.status(500).send(err.message);
        res.json(result);
    });
});

module.exports = router;