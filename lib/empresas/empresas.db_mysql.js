/*
 empresas_db_mysql.js
 Gestión del acceso a la base de datos para los grupos de usuarios
*/
var mysql = require("mysql"),
    moment = require("moment"),
    comun = require("../comun/comun");

var empresasDbAPI = {
    get: function (done) {
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "SELECT * FROM empresas";
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
            var sql = "SELECT * FROM empresas WHERE empresaId = ?";
            sql = mysql.format(sql, id);
            con.query(sql, function (err, grupos) {
                con.end();
                if (err) return done(err);
                done(null, grupos);
            });
        });
    },
    post: function(empresa, done){
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "INSERT INTO empresas SET ?";
            sql = mysql.format(sql, empresa);
            con.query(sql, function (err, grupo) {
                con.end();
                if (err) return done(err);
                empresa.empresaId = grupo.insertId;
                done(null, empresa);
            });
        });
    },
    put: function(empresa, done){
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "UPDATE empresas SET ? WHERE empresaId = ?";
            sql = mysql.format(sql, [empresa, empresa.empresaId]);
            con.query(sql, function (err, empresa) {
                con.end();
                if (err) return done(err);
                done(null, empresa);
            });
        });
    },
    delete: function(id, done){
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "DELETE FROM empresas WHERE empresaId =  ?";
            sql = mysql.format(sql, id);
            con.query(sql, function (err, grupo) {
                con.end();
                if (err) return done(err);
                done(null, 'OK');
            });
        });
    }
}

module.exports = empresasDbAPI;