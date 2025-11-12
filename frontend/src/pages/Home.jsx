import NavbarHome from '../components/NavbarHome';

export default function Home() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  const backgroundImage = 'https://source.unsplash.com/random/1600x900?office,technology';

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <NavbarHome onLogout={handleLogout} />
      <div className="text-white text-center mt-20 backdrop-blur-sm bg-black/30 p-6 rounded max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a KICSERP</h1>
        <p className="text-lg">
          Este es el panel principal para administrar tu empresa. Usa el menú superior para navegar entre módulos.
        </p>
      </div>
    </div>
  );
}
