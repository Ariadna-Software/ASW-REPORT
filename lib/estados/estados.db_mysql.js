/*
 estados_db_mysql.js
 Gestión del acceso a la base de datos para los grupos de usuarios
*/
var mysql = require("mysql"),
    moment = require("moment"),
    comun = require("../comun/comun");

var estadosDbAPI = {
    get: function (done) {
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "SELECT * FROM estados";
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
            var sql = "SELECT * FROM estados WHERE estadoId = ?";
            sql = mysql.format(sql, id);
            con.query(sql, function (err, grupos) {
                con.end();
                if (err) return done(err);
                done(null, grupos);
            });
        });
    },
    post: function(estado, done){
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "INSERT INTO estados SET ?";
            sql = mysql.format(sql, estado);
            con.query(sql, function (err, grupo) {
                con.end();
                if (err) return done(err);
                estado.estadoId = grupo.insertId;
                done(null, estado);
            });
        });
    },
    put: function(estado, done){
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "UPDATE estados SET ? WHERE estadoId = ?";
            sql = mysql.format(sql, [estado, estado.estadoId]);
            con.query(sql, function (err, estado) {
                con.end();
                if (err) return done(err);
                done(null, estado);
            });
        });
    },
    delete: function(id, done){
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "DELETE FROM estados WHERE estadoId =  ?";
            sql = mysql.format(sql, id);
            con.query(sql, function (err, grupo) {
                con.end();
                if (err) return done(err);
                done(null, 'OK');
            });
        });
    }
}

module.exports = estadosDbAPI;