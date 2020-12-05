const pg = require( "pg" );

const Pool = pg.Pool
const pool = new Pool( {
    "user": 'postgres',
    "host":"testfargatedb.c7kvoifgxp3q.ap-southeast-1.rds.amazonaws.com",
    "database": "test",
    "password": 'postgresMasterPassword',
    "port":5432
    } );

module.exports = pool;
