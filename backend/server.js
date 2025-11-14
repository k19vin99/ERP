const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./src/routes/auth.routes');
const userRoutes = require('./src/routes/user.routes');

dotenv.config();

const app = express(); // ✅ primero se define app

app.use(cors());
app.use(express.json());

// ✅ servir archivos estáticos (como imágenes de perfil)
app.use('/uploads', express.static('uploads'));

// ✅ rutas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// ✅ iniciar servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
