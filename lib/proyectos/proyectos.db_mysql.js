/*
 proyectos_db_mysql.js
 Gestión del acceso a la base de datos para los grupos de usuarios
*/
var mysql = require("mysql"),
    moment = require("moment"),
    comun = require("../comun/comun");

var proyectosDbAPI = {
    get: function (done) {
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "SELECT * FROM proyectos";
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
            var sql = "SELECT * FROM proyectos WHERE proyectoId = ?";
            sql = mysql.format(sql, id);
            con.query(sql, function (err, grupos) {
                con.end();
                if (err) return done(err);
                done(null, grupos);
            });
        });
    },
    post: function(proyecto, done){
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "INSERT INTO proyectos SET ?";
            sql = mysql.format(sql, proyecto);
            con.query(sql, function (err, grupo) {
                con.end();
                if (err) return done(err);
                proyecto.proyectoId = grupo.insertId;
                done(null, proyecto);
            });
        });
    },
    put: function(proyecto, done){
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "UPDATE proyectos SET ? WHERE proyectoId = ?";
            sql = mysql.format(sql, [proyecto, proyecto.proyectoId]);
            con.query(sql, function (err, proyecto) {
                con.end();
                if (err) return done(err);
                done(null, proyecto);
            });
        });
    },
    delete: function(id, done){
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "DELETE FROM proyectos WHERE proyectoId =  ?";
            sql = mysql.format(sql, id);
            con.query(sql, function (err, grupo) {
                con.end();
                if (err) return done(err);
                done(null, 'OK');
            });
        });
    }
}

module.exports = proyectosDbAPI;