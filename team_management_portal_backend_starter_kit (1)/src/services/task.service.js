const { getPool } = require('../config/database');

async function getAllTasks() {
  const pool = await getPool();
  const result = await pool.request().query('SELECT * FROM Tasks');
  return result.recordset;
}

module.exports = { getAllTasks };
