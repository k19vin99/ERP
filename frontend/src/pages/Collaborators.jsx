import { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarHome from '../components/NavbarHome';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

export default function Collaborators() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/users')
      .then(res => {
        const mapped = res.data.map((u, i) => ({
          id: u.id || i,
          avatar: u.avatar ? `http://localhost:4000/uploads/${u.avatar}` : '',
          name: `${u.first_name || ''} ${u.second_name || ''} ${u.first_lastname || ''} ${u.second_lastname || ''}`.trim(),
          username: u.username || '',
          email: u.email || '',
          rut: u.rut || '',
          fecha_nacimiento: u.fecha_nacimiento ? new Date(u.fecha_nacimiento).toLocaleDateString() : '',
          fecha_ingreso: u.fecha_ingreso ? new Date(u.fecha_ingreso).toLocaleDateString() : '',
          direccion: u.direccion || '',
          cargo: u.cargo || '',
          role: u.role || '',
          status: u.status || '',
        }));
        setUsers(mapped);
      })
      .catch(err => console.error('Error al obtener usuarios:', err));
  }, []);

  return (
    <>
      <NavbarHome onLogout={() => {
        localStorage.removeItem('token');
        window.location.href = '/';
      }} />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6 text-black text-center">Listado de Colaboradores</h1>
        <div className="mx-auto max-w-6xl bg-white p-4 rounded-lg shadow-md">
          <table className="w-full border-collapse rounded-lg overflow-hidden shadow">
            <thead className="bg-gray-300 text-black">
              <tr>
                <th className="p-2 text-left">Avatar</th>
                <th className="p-2 text-left">Nombre</th>
                <th className="p-2 text-left">Usuario</th>
                <th className="p-2 text-left">Correo</th>
                <th className="p-2 text-left">RUT</th>
                <th className="p-2 text-left">Nacimiento</th>
                <th className="p-2 text-left">Ingreso</th>
                <th className="p-2 text-left">Dirección</th>
                <th className="p-2 text-left">Cargo</th>
                <th className="p-2 text-left">Rol</th>
                <th className="p-2 text-left">Estado</th>
                <th className="p-2 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="bg-gray-100 text-gray-700">
                  <td className="p-2">
                    <img
                      src={user.avatar}
                      alt="avatar"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </td>
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.username}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">{user.rut}</td>
                  <td className="p-2">{user.fecha_nacimiento}</td>
                  <td className="p-2">{user.fecha_ingreso}</td>
                  <td className="p-2">{user.direccion}</td>
                  <td className="p-2">{user.cargo}</td>
                  <td className="p-2">{user.role}</td>
                  <td className="p-2">{user.status}</td>
                  <td className="p-2 text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => window.location.href = `/edit/${user.rut}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <PencilIcon className="w-5 h-5" />
                      </button>

                      <button className="text-red-600 hover:text-red-800">
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-6 flex justify-end">
            <button
              onClick={() => window.location.href = '/register'}
              className="px-4 py-2 border border-yellow-700 text-yellow-700 bg-white rounded hover:bg-yellow-700 hover:text-black hover:border-black transition"
            >
              Registrar usuario
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
