const pool = require('../config/db');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
  try {
    const {
      rut,
      username,
      first_name,
      second_name,
      first_lastname,
      second_lastname,
      fecha_nacimiento,
      fecha_ingreso,
      direccion,
      email,
      password,
      role,
      status,
    } = req.body;

    const avatar = req.file ? req.file.filename : null;
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = `
      INSERT INTO users (
        rut, username, first_name, second_name, first_lastname, second_lastname,
        fecha_nacimiento, fecha_ingreso, direccion, email, password, role, status, avatar
      ) VALUES (
        $1, $2, $3, $4, $5, $6,
        $7, $8, $9, $10, $11, $12, $13, $14
      )
    `;

    const values = [
      rut, username, first_name, second_name, first_lastname, second_lastname,
      fecha_nacimiento, fecha_ingreso, direccion, email, hashedPassword, role, status, avatar
    ];

    await pool.query(query, values);
    res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateUser = async (req, res) => {
  const { rut } = req.params;
  const {
    username,
    first_name,
    second_name,
    first_lastname,
    second_lastname,
    fecha_nacimiento,
    fecha_ingreso,
    direccion,
    email,
    password,
    cargo,
    role,
    status,
  } = req.body;

  const avatar = req.file ? req.file.filename : null;

  try {
    await pool.query(
      `UPDATE users SET
        username = $1,
        first_name = $2,
        second_name = $3,
        first_lastname = $4,
        second_lastname = $5,
        fecha_nacimiento = $6,
        fecha_ingreso = $7,
        direccion = $8,
        email = $9,
        password = $10,
        cargo = $11,
        role = $12,
        status = $13,
        avatar = COALESCE($14, avatar)
      WHERE rut = $15`,
      [
        username,
        first_name,
        second_name,
        first_lastname,
        second_lastname,
        fecha_nacimiento,
        fecha_ingreso,
        direccion,
        email,
        password,
        cargo,
        role,
        status,
        avatar,
        rut,
      ]
    );
    res.json({ message: 'Usuario actualizado correctamente' });
  } catch (err) {
    console.error('Error al actualizar usuario:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

