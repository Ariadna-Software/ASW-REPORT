/*
 tiposActividades_db_mysql.js
 Gestión del acceso a la base de datos para los tipos de actividad
*/
var mysql = require("mysql"),
    moment = require("moment"),
    comun = require("../comun/comun");

var tiposActividadesDbAPI = {
    get: function (done) {
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "SELECT ta.*, ga.nombre as grupo FROM tipos_actividades as ta";
            sql += " LEFT JOIN grupos_actividades as ga ON ga.grupoActividadId = ta.grupoActividadId"
            con.query(sql, function (err, tipos) {
                con.end();
                if (err) return done(err);
                done(null, tipos);
            });
        });
    },
    getById: function (id, done) {
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "SELECT ta.*, ga.nombre as grupo FROM tipos_actividades as ta";
            sql += " LEFT JOIN grupos_actividades as ga ON ga.grupoActividadId = ta.grupoActividadId"
            sql += " WHERE ta.tipoActividadId = ?";
            sql = mysql.format(sql, id);
            con.query(sql, function (err, tipos) {
                con.end();
                if (err) return done(err);
                done(null, tipos);
            });
        });
    },
    post: function (tipoActividad, done) {
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "INSERT INTO tipos_actividades SET ?";
            sql = mysql.format(sql, tipoActividad);
            con.query(sql, function (err, tipo) {
                con.end();
                if (err) return done(err);
                tipoActividad.tipoActividadId = tipo.insertId;
                done(null, tipoActividad);
            });
        });
    },
    put: function (tipoActividad, done) {
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "UPDATE tipos_actividades SET ? WHERE tipoActividadId = ?";
            sql = mysql.format(sql, [tipoActividad, tipoActividad.tipoActividadId]);
            con.query(sql, function (err, tipo) {
                con.end();
                if (err) return done(err);
                done(null, tipoActividad);
            });
        });
    },
    delete: function (id, done) {
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "DELETE FROM tipos_actividades WHERE tipoActividadId =  ?";
            sql = mysql.format(sql, id);
            con.query(sql, function (err, tipo) {
                con.end();
                if (err) return done(err);
                done(null, 'OK');
            });
        });
    }
}

module.exports = tiposActividadesDbAPI;