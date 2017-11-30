/*
 tiposOferta_db_mysql.js
 Gestión del acceso a la base de datos para los grupos de usuarios
*/
var mysql = require("mysql"),
    moment = require("moment"),
    comun = require("../comun/comun");

var tiposOfertaDbAPI = {
    get: function (done) {
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "SELECT * FROM tipos_oferta";
            con.query(sql, function (err, grupos) {
                con.end();
                if (err) return done(err);
                done(null, grupos);
            });
        });
    },
    getById: function (id, done) {
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "SELECT * FROM tipos_oferta WHERE tipoOfertaId = ?";
            sql = mysql.format(sql, id);
            con.query(sql, function (err, grupos) {
                con.end();
                if (err) return done(err);
                done(null, grupos);
            });
        });
    },
    post: function(tipoOferta, done){
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "INSERT INTO tipos_oferta SET ?";
            sql = mysql.format(sql, tipoOferta);
            con.query(sql, function (err, grupo) {
                con.end();
                if (err) return done(err);
                tipoOferta.tipoOfertaId = grupo.insertId;
                done(null, tipoOferta);
            });
        });
    },
    put: function(tipoOferta, done){
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "UPDATE tipos_oferta SET ? WHERE tipoOfertaId = ?";
            sql = mysql.format(sql, [tipoOferta, tipoOferta.tipoOfertaId]);
            con.query(sql, function (err, tipoOferta) {
                con.end();
                if (err) return done(err);
                done(null, tipoOferta);
            });
        });
    },
    delete: function(id, done){
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "DELETE FROM tipos_oferta WHERE tipoOfertaId =  ?";
            sql = mysql.format(sql, id);
            con.query(sql, function (err, grupo) {
                con.end();
                if (err) return done(err);
                done(null, 'OK');
            });
        });
    }
}

module.exports = tiposOfertaDbAPI;