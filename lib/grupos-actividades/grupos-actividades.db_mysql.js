/*
 grupos-actividades_db_mysql.js
 Gestión del acceso a la base de datos para los grupos de usuarios
*/
var mysql = require("mysql"),
    moment = require("moment"),
    comun = require("../comun/comun");

var grupoActividadesDbAPI = {
    get: function (done) {
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "SELECT * FROM grupos_actividades";
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
            var sql = "SELECT * FROM grupos_actividades WHERE grupoActividadId = ?";
            sql = mysql.format(sql, id);
            con.query(sql, function (err, grupos) {
                con.end();
                if (err) return done(err);
                done(null, grupos);
            });
        });
    },
    post: function(grupoActividad, done){
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "INSERT INTO grupos_actividades SET ?";
            sql = mysql.format(sql, grupoActividad);
            con.query(sql, function (err, grupo) {
                con.end();
                if (err) return done(err);
                grupoActividad.grupoActividadId = grupo.insertId;
                done(null, grupoActividad);
            });
        });
    },
    put: function(grupoActividad, done){
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "UPDATE grupos_actividades SET ? WHERE grupoActividadId = ?";
            sql = mysql.format(sql, [grupoActividad, grupoActividad.grupoActividadId]);
            con.query(sql, function (err, grupo) {
                con.end();
                if (err) return done(err);
                done(null, grupoActividad);
            });
        });
    },
    delete: function(id, done){
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "DELETE FROM grupos_actividades WHERE grupoActividadId =  ?";
            sql = mysql.format(sql, id);
            con.query(sql, function (err, grupo) {
                con.end();
                if (err) return done(err);
                done(null, 'OK');
            });
        });
    }
}

module.exports = grupoActividadesDbAPI;