/*
 tiposSoporte_db_mysql.js
 Gestión del acceso a la base de datos para los grupos de usuarios
*/
var mysql = require("mysql"),
    moment = require("moment"),
    comun = require("../comun/comun");

var tiposSoporteDbAPI = {
    get: function (done) {
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "SELECT * FROM tipos_soporte";
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
            var sql = "SELECT * FROM tipos_soporte WHERE tipoSoporteId = ?";
            sql = mysql.format(sql, id);
            con.query(sql, function (err, grupos) {
                con.end();
                if (err) return done(err);
                done(null, grupos);
            });
        });
    },
    post: function(tipoSoporte, done){
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "INSERT INTO tipos_soporte SET ?";
            sql = mysql.format(sql, tipoSoporte);
            con.query(sql, function (err, grupo) {
                con.end();
                if (err) return done(err);
                tipoSoporte.tipoSoporteId = grupo.insertId;
                done(null, tipoSoporte);
            });
        });
    },
    put: function(tipoSoporte, done){
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "UPDATE tipos_soporte SET ? WHERE tipoSoporteId = ?";
            sql = mysql.format(sql, [tipoSoporte, tipoSoporte.tipoSoporteId]);
            con.query(sql, function (err, tipoSoporte) {
                con.end();
                if (err) return done(err);
                done(null, tipoSoporte);
            });
        });
    },
    delete: function(id, done){
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "DELETE FROM tipos_soporte WHERE tipoSoporteId =  ?";
            sql = mysql.format(sql, id);
            con.query(sql, function (err, grupo) {
                con.end();
                if (err) return done(err);
                done(null, 'OK');
            });
        });
    }
}

module.exports = tiposSoporteDbAPI;