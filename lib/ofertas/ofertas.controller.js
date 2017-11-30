/*
 ofertas.controller.js
 Gestión de las rutas de ofertas de usuarios en la API
*/
var express = require("express");
var router = express.Router();
var ofertasDb = require("../ofertas/ofertas.db_mysql");

router.get('/', function (req, res) {
    ofertasDb.get(function (err, ofertas) {
        if (err) return res.status(500).send(err.message);
        res.json(ofertas);
    });
});

router.get('/:ofertaId', function (req, res) {
    var ofertaId = req.params.ofertaId;
    if (!ofertaId) return res.status(400).send('Debe indicar el identificador de oferta');
    ofertasDb.getById(ofertaId, function (err, ofertas) {
        if (err) return res.status(500).send(err.message);
        if (ofertas.length == 0) return res.status(404).send("Grupo no encontrado");
        res.json(ofertas[0]);
    });
});

router.get('/responsable/:responsableId', function (req, res) {
    var responsableId = req.params.responsableId;
    if (!responsableId) return res.status(400).send('Debe indicar el identificador de responsable');
    ofertasDb.getPorResponsable(responsableId, function (err, ofertas) {
        if (err) return res.status(500).send(err.message);
        res.json(ofertas);
    });
});

router.get('/responsable/grupo/:responsableId', function (req, res) {
    var responsableId = req.params.responsableId;
    if (!responsableId) return res.status(400).send('Debe indicar el identificador de responsable');
    ofertasDb.getPorGrupoResponsable(responsableId, function (err, ofertas) {
        if (err) return res.status(500).send(err.message);
        res.json(ofertas);
    });
});

router.post('/', function (req, res) {
    var oferta = req.body;
    if (!oferta) return res.status(400).send('Debe incluir un objeto de oferta en el cuerpo del mensaje');
    ofertasDb.post(oferta, function (err, oferta) {
        if (err) return res.status(500).send(err.message);
        res.json(oferta);
    });
});

router.put('/', function (req, res) {
    var oferta = req.body;
    if (!oferta) return res.status(400).send('Debe incluir un objeto de oferta en el cuerpo del mensaje');
    ofertasDb.put(oferta, function (err, oferta) {
        if (err) return res.status(500).send(err.message);
        res.json(oferta);
    });
});

router.delete('/:ofertaId', function (req, res) {
    var ofertaId = req.params.ofertaId;
    if (!ofertaId) return res.status(400).send('Debe indicar el identificador de oferta');
    ofertasDb.delete(ofertaId, function (err, result) {
        if (err) return res.status(500).send(err.message);
        res.json(result);
    });
});

module.exports = router;