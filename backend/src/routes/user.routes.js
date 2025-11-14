const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const userController = require('../controllers/user.controller');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const path = require('path');

const storage = multer.diskStorage({
  destination: 'uploads/', // carpeta raíz del backend
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  },
});


// ✅ GET: Listar usuarios
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM users ORDER BY fecha_ingreso DESC');
  res.json(result.rows);
});

// ✅ POST: Registrar usuario con foto
router.post('/', upload.single('avatar'), userController.createUser);

module.exports = router;

// ✅ Ruta corregida (usa rut como identificador)
router.get('/:rut', async (req, res) => {
  const { rut } = req.params;
  try {
    const result = await pool.query('SELECT * FROM users WHERE rut = $1', [rut]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error al obtener usuario:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.put('/:rut', upload.single('avatar'), userController.updateUser);
