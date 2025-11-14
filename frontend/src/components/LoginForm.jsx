import { useState } from 'react';
import { login } from '../services/auth';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const { token } = await login(email, password);
        console.log('Token recibido:', token); // 👈 Aquí lo ves en la consola del navegador
        localStorage.setItem('token', token);
        window.location.href = '/home';
    } catch {
        alert('Credenciales inválidas');
    }
    };


  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
      <h2 className="text-xl font-bold mb-4">Iniciar sesión</h2>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        required
      />
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
        Entrar
      </button>
    </form>
  );
}
