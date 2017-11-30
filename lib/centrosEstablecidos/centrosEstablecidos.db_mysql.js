/*
 centrosEstablecidos_db_mysql.js
 Gestión del acceso a la base de datos para los grupos de usuarios
*/
var mysql = require("mysql"),
    moment = require("moment"),
    comun = require("../comun/comun");

var centrosEstablecidosDbAPI = {
    get: function (done) {
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "SELECT * FROM centros_establecidos";
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
            var sql = "SELECT * FROM centros_establecidos WHERE centroEstablecidoId = ?";
            sql = mysql.format(sql, id);
            con.query(sql, function (err, grupos) {
                con.end();
                if (err) return done(err);
                done(null, grupos);
            });
        });
    },
    post: function(centroEstablecido, done){
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "INSERT INTO centros_establecidos SET ?";
            sql = mysql.format(sql, centroEstablecido);
            con.query(sql, function (err, grupo) {
                con.end();
                if (err) return done(err);
                centroEstablecido.centroEstablecidoId = grupo.insertId;
                done(null, centroEstablecido);
            });
        });
    },
    put: function(centroEstablecido, done){
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "UPDATE centros_establecidos SET ? WHERE centroEstablecidoId = ?";
            sql = mysql.format(sql, [centroEstablecido, centroEstablecido.centroEstablecidoId]);
            con.query(sql, function (err, centroEstablecido) {
                con.end();
                if (err) return done(err);
                done(null, centroEstablecido);
            });
        });
    },
    delete: function(id, done){
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "DELETE FROM centros_establecidos WHERE centroEstablecidoId =  ?";
            sql = mysql.format(sql, id);
            con.query(sql, function (err, grupo) {
                con.end();
                if (err) return done(err);
                done(null, 'OK');
            });
        });
    }
}

module.exports = centrosEstablecidosDbAPI;