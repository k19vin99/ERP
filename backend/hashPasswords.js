// hash.js
const bcrypt = require('bcrypt');

const password = 'Kicserp2025';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error al hashear:', err);
  } else {
    console.log('Hash generado:', hash);
  }
});
