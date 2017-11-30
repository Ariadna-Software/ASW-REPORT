/*
 responsables_db_mysql.js
 Gestión del acceso a la base de datos para los grupos de responsables
*/
var mysql = require("mysql"),
    moment = require("moment"),
    comun = require("../comun/comun");

var responsablesDbAPI = {
    get: function (done) {
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "SELECT r.*, u.nombre as usuario FROM responsables as r";
            sql += " LEFT JOIN usuarios as u ON u.usuarioId = r.usuarioId";
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
            var sql = "SELECT r.*, u.nombre as usuario FROM responsables as r";
            sql += " LEFT JOIN usuarios as u ON u.usuarioId = r.usuarioId";
            sql += " WHERE r.responsableId = ?";
            sql = mysql.format(sql, id);
            con.query(sql, function (err, grupos) {
                con.end();
                if (err) return done(err);
                done(null, grupos);
            });
        });
    },
    post: function (responsable, done) {
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "INSERT INTO responsables SET ?";
            sql = mysql.format(sql, responsable);
            con.query(sql, function (err, grupo) {
                con.end();
                if (err) return done(err);
                responsable.responsableId = grupo.insertId;
                done(null, responsable);
            });
        });
    },
    put: function (responsable, done) {
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "UPDATE responsables SET ? WHERE responsableId = ?";
            sql = mysql.format(sql, [responsable, responsable.responsableId]);
            con.query(sql, function (err, responsable) {
                con.end();
                if (err) return done(err);
                done(null, responsable);
            });
        });
    },
    delete: function (id, done) {
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "DELETE FROM responsables WHERE responsableId =  ?";
            sql = mysql.format(sql, id);
            con.query(sql, function (err, grupo) {
                con.end();
                if (err) return done(err);
                done(null, 'OK');
            });
        });
    }
}

module.exports = responsablesDbAPI;