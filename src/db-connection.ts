import { Pool } from 'pg';

/*const pool = new Pool({
user: 'postgres',
password: '1623',
host: 'localhost',
port: 5432, //default Postgres port
database:'Trivial'
}); */

const connectionString= 'postgresql://postgresql://proyecto_final_ztst_user:vP4cL6tj1ucTgo0BEtqDKeJKm5tPAWt8@dpg-cum64u0gph6c73dbu160-a.frankfurt-postgres.render.com/proyecto_final_ztst'


const pool = new Pool({
connectionString

})


export function query(text: any): any{
    return pool.query(text);
}