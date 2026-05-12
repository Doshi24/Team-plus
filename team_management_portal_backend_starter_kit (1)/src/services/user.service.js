const { getPool } = require('../config/database');

async function getAllUsers() {
  const pool = await getPool();
  const result = await pool.request().query('SELECT UserID, FullName, Email FROM Users');
  return result.recordset;
}

module.exports = { getAllUsers };
