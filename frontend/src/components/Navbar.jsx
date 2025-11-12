import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-blue-700 text-white">
      <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
        <span className="text-xl font-bold">KICS ERP</span>
        <a href="/login" className="bg-white text-blue-700 px-4 py-2 rounded hover:bg-gray-100">
          Iniciar Sesión
        </a>
      </div>
    </Disclosure>
  );
}
