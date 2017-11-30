/*
 centros_db_mysql.js
 Gestión del acceso a la base de datos para los grupos de usuarios
*/
var mysql = require("mysql"),
    moment = require("moment"),
    comun = require("../comun/comun");

var centrosDbAPI = {
    get: function (done) {
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "SELECT * FROM centros";
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
            var sql = "SELECT * FROM centros WHERE centroId = ?";
            sql = mysql.format(sql, id);
            con.query(sql, function (err, grupos) {
                con.end();
                if (err) return done(err);
                done(null, grupos);
            });
        });
    },
    post: function(centro, done){
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "INSERT INTO centros SET ?";
            sql = mysql.format(sql, centro);
            con.query(sql, function (err, grupo) {
                con.end();
                if (err) return done(err);
                centro.centroId = grupo.insertId;
                done(null, centro);
            });
        });
    },
    put: function(centro, done){
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "UPDATE centros SET ? WHERE centroId = ?";
            sql = mysql.format(sql, [centro, centro.centroId]);
            con.query(sql, function (err, centro) {
                con.end();
                if (err) return done(err);
                done(null, centro);
            });
        });
    },
    delete: function(id, done){
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "DELETE FROM centros WHERE centroId =  ?";
            sql = mysql.format(sql, id);
            con.query(sql, function (err, grupo) {
                con.end();
                if (err) return done(err);
                done(null, 'OK');
            });
        });
    }
}

module.exports = centrosDbAPI;