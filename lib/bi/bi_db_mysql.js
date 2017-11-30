var mysql = require("mysql"),
    moment = require("moment"),
    comun = require("../comun/comun");

var biDbAPI = {
    bi: function (db, table, done) {
        comun.getConnectionDb(db, function (err, con) {
            if (err) return done(err);
            var sql = "SELECT * FROM " + table;
            con.query(sql, function (err, data) {
                con.end();
                if (err) return done(err);
                done(null, data);
            });
        });
    }
}

module.exports = biDbAPI;