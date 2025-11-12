import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

const menuItems = {
  Inventario: ['Listado de Bodegas', 'Agregar Bodega', 'Listado de Artículos', 'Agregar Artículo'],
  Solicitudes: ['Listado de Solicitudes', 'Agregar Solicitud'],
  Colaboradores: ['Listado de Colaboradores', 'Agregar Colaborador'],
  Facturas: ['Listado de Facturas', 'Agregar Factura'],
  'Gestión de Tickets': ['Listado de Tickets', 'Crear Ticket'],
  Finanzas: ['Resumen Financiero', 'Cuentas por Pagar', 'Cuentas por Cobrar'],
  Reportes: ['Generar Reporte', 'Historial de Actividad'],
};

function Dropdown({ title, items }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="px-4 py-2 hover:bg-blue-600 rounded">{title}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right bg-white shadow-lg rounded">
          {items.map((item, idx) => (
            <Menu.Item key={idx}>
              {({ active }) => (
                <div
                  className={`px-4 py-2 text-sm ${active ? 'bg-blue-100' : 'text-gray-700'}`}
                >
                  {item}
                </div>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default function Navbar({ onLogout }) {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center">
      <span className="text-xl font-bold">KICSERP</span>
      <div className="flex gap-4 items-center">
        {Object.entries(menuItems).map(([title, items]) => (
          <Dropdown key={title} title={title} items={items} />
        ))}
        <button
          onClick={onLogout}
          className="bg-white text-blue-700 px-4 py-2 rounded hover:bg-gray-100"
        >
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
}
