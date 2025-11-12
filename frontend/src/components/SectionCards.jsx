const sections = [
  'Gestión de Usuarios',
  'Gestión de Solicitudes',
  'Gestión de Facturas',
  'Gestión de Inventario',
  'Gestión de Bodegas',
  'Gestión de Beneficios',
];

export default function SectionCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto my-12 px-4">
      {sections.map((title, index) => (
        <div key={index} className="bg-white shadow-md rounded p-6 text-center">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">Módulo informativo del sistema ERP.</p>
        </div>
      ))}
    </div>
  );
}
