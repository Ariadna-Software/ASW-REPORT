/*
 ofertas_db_mysql.js
 Gestión del acceso a la base de datos para los grupos de usuarios
*/
var mysql = require("mysql"),
    moment = require("moment"),
    comun = require("../comun/comun");

var ofertasDbAPI = {
    get: function (done) {
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "SELECT o.*, "
            sql += " e.nombre as empresa, p.nombre as proyecto, a.nombre as area,"
            sql += " ta.nombre as tipoActividad, pa.nombre as pais, es.nombre as estado, ces.nombre as centroEstablecido, d.nombre as divisa,"
            sql += " ts.nombre as tipoSoporte, r.nombre as responsable, c.nombre as centro, tof.nombre as tipoOferta"
            sql += " FROM ofertas as o";
            sql += " LEFT JOIN empresas as e on e.empresaId = o.empresaId";
            sql += " LEFT JOIN proyectos as p on p.proyectoId = o.proyectoId";
            sql += " LEFT JOIN areas as a on a.areaId = o.areaId";
            sql += " LEFT JOIN tipos_actividades as ta on ta.tipoActividadId = o.tipoActividadId";
            sql += " LEFT JOIN paises as pa on pa.paisId = o.paisId";
            sql += " LEFT JOIN estados as es on es.estadoId = o.estadoId";
            sql += " LEFT JOIN tipos_soporte as ts on ts.tipoSoporteId = o.tipoSoporteId";
            sql += " LEFT JOIN responsables as r on r.responsableId = o.responsableId";
            sql += " LEFT JOIN centros as c on c.centroId = o.centroId";
            sql += " LEFT JOIN tipos_oferta as tof on tof.tipoOfertaId = o.tipoOfertaId";
            sql += " LEFT JOIN centros_establecidos as ces on ces.centroEstablecidoId = o.centroEstablecidoId";
            sql += " LEFT JOIN divisas as d on d.divisaId = o.divisaId";
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
            var sql = "SELECT o.*, "
            sql += " e.nombre as empresa, p.nombre as proyecto, a.nombre as area,"
            sql += " ta.nombre as tipoActividad, pa.nombre as pais, es.nombre as estado, ces.nombre as centroEstablecido, d.nombre as divisa,"
            sql += " ts.nombre as tipoSoporte, r.nombre as responsable, c.nombre as centro, tof.nombre as tipoOferta"
            sql += " FROM ofertas as o";
            sql += " LEFT JOIN empresas as e on e.empresaId = o.empresaId";
            sql += " LEFT JOIN proyectos as p on p.proyectoId = o.proyectoId";
            sql += " LEFT JOIN areas as a on a.areaId = o.areaId";
            sql += " LEFT JOIN tipos_actividades as ta on ta.tipoActividadId = o.tipoActividadId";
            sql += " LEFT JOIN paises as pa on pa.paisId = o.paisId";
            sql += " LEFT JOIN estados as es on es.estadoId = o.estadoId";
            sql += " LEFT JOIN tipos_soporte as ts on ts.tipoSoporteId = o.tipoSoporteId";
            sql += " LEFT JOIN responsables as r on r.responsableId = o.responsableId";
            sql += " LEFT JOIN centros as c on c.centroId = o.centroId";
            sql += " LEFT JOIN tipos_oferta as tof on tof.tipoOfertaId = o.tipoOfertaId";
            sql += " LEFT JOIN centros_establecidos as ces on ces.centroEstablecidoId = o.centroEstablecidoId";
            sql += " LEFT JOIN divisas as d on d.divisaId = o.divisaId";
            sql += " WHERE o.ofertaId = ?";
            sql = mysql.format(sql, id);
            con.query(sql, function (err, grupos) {
                con.end();
                if (err) return done(err);
                done(null, grupos);
            });
        });
    },
    getPorResponsable: function (id, done) {
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "SELECT o.*, "
            sql += " e.nombre as empresa, p.nombre as proyecto, a.nombre as area,"
            sql += " ta.nombre as tipoActividad, pa.nombre as pais, es.nombre as estado, ces.nombre as centroEstablecido, d.nombre as divisa,"
            sql += " ts.nombre as tipoSoporte, r.nombre as responsable, c.nombre as centro, tof.nombre as tipoOferta"
            sql += " FROM ofertas as o";
            sql += " LEFT JOIN empresas as e on e.empresaId = o.empresaId";
            sql += " LEFT JOIN proyectos as p on p.proyectoId = o.proyectoId";
            sql += " LEFT JOIN areas as a on a.areaId = o.areaId";
            sql += " LEFT JOIN tipos_actividades as ta on ta.tipoActividadId = o.tipoActividadId";
            sql += " LEFT JOIN paises as pa on pa.paisId = o.paisId";
            sql += " LEFT JOIN estados as es on es.estadoId = o.estadoId";
            sql += " LEFT JOIN tipos_soporte as ts on ts.tipoSoporteId = o.tipoSoporteId";
            sql += " LEFT JOIN responsables as r on r.responsableId = o.responsableId";
            sql += " LEFT JOIN centros as c on c.centroId = o.centroId";
            sql += " LEFT JOIN tipos_oferta as tof on tof.tipoOfertaId = o.tipoOfertaId";
            sql += " LEFT JOIN centros_establecidos as ces on ces.centroEstablecidoId = o.centroEstablecidoId";
            sql += " LEFT JOIN divisas as d on d.divisaId = o.divisaId";
            sql += " WHERE o.responsableId = ?";
            sql = mysql.format(sql, id);
            con.query(sql, function (err, grupos) {
                con.end();
                if (err) return done(err);
                done(null, grupos);
            });
        });
    },
    getPorGrupoResponsable: function (id, done) {
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "SELECT o.*, "
            sql += " e.nombre as empresa, p.nombre as proyecto, a.nombre as area,"
            sql += " ta.nombre as tipoActividad, pa.nombre as pais, es.nombre as estado, ces.nombre as centroEstablecido, d.nombre as divisa,"
            sql += " ts.nombre as tipoSoporte, r.nombre as responsable, c.nombre as centro, tof.nombre as tipoOferta"
            sql += " FROM ofertas as o";
            sql += " LEFT JOIN empresas as e on e.empresaId = o.empresaId";
            sql += " LEFT JOIN proyectos as p on p.proyectoId = o.proyectoId";
            sql += " LEFT JOIN areas as a on a.areaId = o.areaId";
            sql += " LEFT JOIN tipos_actividades as ta on ta.tipoActividadId = o.tipoActividadId";
            sql += " LEFT JOIN paises as pa on pa.paisId = o.paisId";
            sql += " LEFT JOIN estados as es on es.estadoId = o.estadoId";
            sql += " LEFT JOIN tipos_soporte as ts on ts.tipoSoporteId = o.tipoSoporteId";
            sql += " LEFT JOIN responsables as r on r.responsableId = o.responsableId";
            sql += " LEFT JOIN centros as c on c.centroId = o.centroId";
            sql += " LEFT JOIN tipos_oferta as tof on tof.tipoOfertaId = o.tipoOfertaId";
            sql += " LEFT JOIN centros_establecidos as ces on ces.centroEstablecidoId = o.centroEstablecidoId";
            sql += " LEFT JOIN divisas as d on d.divisaId = o.divisaId";
            sql += " WHERE o.responsableId IN ";
            sql += " (SELECT r.responsableId";
            sql += " FROM responsables AS r";
            sql += " LEFT JOIN usuarios AS u ON u.usuarioId = r.usuarioId";
            sql += " WHERE u.grupoUsuarioId IN (SELECT gu.grupoUsuarioId";
            sql += " FROM responsables AS r";
            sql += " LEFT JOIN usuarios AS u ON u.usuarioId = r.usuarioId";
            sql += " LEFT JOIN grupos_usuarios AS gu ON gu.grupoUsuarioId = u.grupoUsuarioId";
            sql += " WHERE r.responsableId = ?))"
            sql = mysql.format(sql, id);
            con.query(sql, function (err, grupos) {
                con.end();
                if (err) return done(err);
                done(null, grupos);
            });
        });
    },
    post: function (oferta, done) {
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "INSERT INTO ofertas SET ?";
            sql = mysql.format(sql, oferta);
            con.query(sql, function (err, grupo) {
                con.end();
                if (err) return done(err);
                oferta.ofertaId = grupo.insertId;
                done(null, oferta);
            });
        });
    },
    put: function (oferta, done) {
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "UPDATE ofertas SET ? WHERE ofertaId = ?";
            sql = mysql.format(sql, [oferta, oferta.ofertaId]);
            con.query(sql, function (err, oferta) {
                con.end();
                if (err) return done(err);
                done(null, oferta);
            });
        });
    },
    delete: function (id, done) {
        comun.getConnectionCallback(function (err, con) {
            if (err) return done(err);
            var sql = "DELETE FROM ofertas WHERE ofertaId =  ?";
            sql = mysql.format(sql, id);
            con.query(sql, function (err, grupo) {
                con.end();
                if (err) return done(err);
                done(null, 'OK');
            });
        });
    }
}

module.exports = ofertasDbAPI;