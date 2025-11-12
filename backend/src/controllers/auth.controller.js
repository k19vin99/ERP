const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { findByRut } = require('../models/user.model');

exports.login = async (req, res) => {
  const { rut, password } = req.body;
  const user = await findByRut(rut);
  if (!user) return res.status(401).json({ error: 'Usuario no encontrado' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: 'Credenciales inválidas' });

  const token = jwt.sign({ rut: user.rut }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ token, user });
};
