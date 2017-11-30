/*
 areas_db_mysql.js
 Gestión del acceso a la base de datos para los grupos de usuarios
*/
var mysql = require("mysql"),
    moment = require("moment"),
    comun = require("../comun/comun");

var areasDbAPI = {
    get: function (done) {
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "SELECT * FROM areas";
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
            var sql = "SELECT * FROM areas WHERE areaId = ?";
            sql = mysql.format(sql, id);
            con.query(sql, function (err, grupos) {
                con.end();
                if (err) return done(err);
                done(null, grupos);
            });
        });
    },
    post: function(area, done){
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "INSERT INTO areas SET ?";
            sql = mysql.format(sql, area);
            con.query(sql, function (err, grupo) {
                con.end();
                if (err) return done(err);
                area.areaId = grupo.insertId;
                done(null, area);
            });
        });
    },
    put: function(area, done){
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "UPDATE areas SET ? WHERE areaId = ?";
            sql = mysql.format(sql, [area, area.areaId]);
            con.query(sql, function (err, area) {
                con.end();
                if (err) return done(err);
                done(null, area);
            });
        });
    },
    delete: function(id, done){
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "DELETE FROM areas WHERE areaId =  ?";
            sql = mysql.format(sql, id);
            con.query(sql, function (err, grupo) {
                con.end();
                if (err) return done(err);
                done(null, 'OK');
            });
        });
    }
}

module.exports = areasDbAPI;