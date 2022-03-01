const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'estudiantes',
    password: '1234',
    max: 20,
    min: 2,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
});

async function consultar() {
    const client = await pool.connect()
    const res = await client.query('select * from ropa')
    console.log(res.rows)
    client.release()
    pool.end()
}

consultar();

async function insertar() {
    const client = await pool.connect()
    const res = await client.query(`insert into estudiantes (nombre, rut, curso, nivel) values('Julio','1365247','postgres', 7`);

    console.log(res.rows);
    client.release();
    pool.end()
}