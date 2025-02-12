"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
var pg_1 = require("pg");
/*const pool = new Pool({
user: 'postgres',
password: '1623',
host: 'localhost',
port: 5432, //default Postgres port
database:'Trivial'
}); */
var connectionString = 'postgresql://postgresql://proyecto_final_ztst_user:vP4cL6tj1ucTgo0BEtqDKeJKm5tPAWt8@dpg-cum64u0gph6c73dbu160-a.frankfurt-postgres.render.com';
var pool = new pg_1.Pool({
    connectionString: connectionString
});
function query(text) {
    return pool.query(text);
}
exports.query = query;
