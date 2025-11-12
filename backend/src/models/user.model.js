const pool = require('../config/db');

const findByRut = async (rut) => {
  const res = await pool.query('SELECT * FROM users WHERE rut = $1', [rut]);
  return res.rows[0];
};

module.exports = { findByRut };
