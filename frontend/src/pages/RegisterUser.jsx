import { useState } from 'react';
import NavbarHome from '../components/NavbarHome';

export default function RegisterUser() {
  const [form, setForm] = useState({
    rut: '',
    username: '',
    first_name: '',
    second_name: '',
    first_lastname: '',
    second_lastname: '',
    fecha_nacimiento: '',
    fecha_ingreso: '',
    direccion: '',
    email: '',
    password: '',
    cargo: '',
    role: 'user',
    status: 'activo',
    avatar: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      await fetch('http://localhost:4000/api/users', {
        method: 'POST',
        body: data,
      });
      alert('Usuario registrado');
      window.location.href = '/collaborators';
    } catch (err) {
      console.error('Error al registrar usuario:', err);
      alert('Error al registrar usuario');
    }
  };

  return (
    <>
      <NavbarHome />
      <div className="p-8 max-w-3xl mx-auto">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-black text-center">Registrar Usuario</h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            {[
              { label: 'RUT', name: 'rut' },
              { label: 'Nombre de Usuario (username)', name: 'username' },
              { label: 'Primer Nombre', name: 'first_name' },
              { label: 'Segundo Nombre', name: 'second_name' },
              { label: 'Primer Apellido', name: 'first_lastname' },
              { label: 'Segundo Apellido', name: 'second_lastname' },
              { label: 'Fecha de Nacimiento', name: 'fecha_nacimiento', type: 'date' },
              { label: 'Fecha de Ingreso a la empresa', name: 'fecha_ingreso', type: 'date' },
              { label: 'Dirección', name: 'direccion' },
              { label: 'Correo Electrónico', name: 'email', type: 'email' },
              { label: 'Contraseña', name: 'password', type: 'password' },
              { label: 'Cargo', name: 'cargo' },
              { label: 'Estado', name: 'status' },
            ].map(({ label, name, type = 'text' }) => (
              <div key={name}>
                <label className="block text-black mb-1">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-200 text-gray-800 rounded"
                  required={['rut', 'username', 'first_name', 'first_lastname', 'fecha_nacimiento', 'fecha_ingreso', 'email', 'password'].includes(name)}
                />
              </div>
            ))}

            {/* Rol */}
            <div>
              <label className="block text-black mb-1">Rol</label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full p-2 bg-gray-200 text-gray-800 rounded"
                required
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="superadmin">SuperAdmin</option>
              </select>
            </div>

            {/* Foto de perfil */}
            <div>
              <label className="block text-black mb-1">Foto de Perfil</label>
              <input
                type="file"
                name="avatar"
                onChange={handleChange}
                accept="image/*"
                className="w-full p-2 bg-gray-200 text-gray-800 rounded"
              />
            </div>

            <div className="mt-4 flex justify-center">
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                Registrar Usuario
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
