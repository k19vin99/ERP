import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Home from './pages/Home';
import Collaborators from './pages/Collaborators';
import RegisterUser from './pages/RegisterUser';
import EditUser from './pages/EditUsers'


function App() {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        {/* Página pública */}
        <Route path="/" element={<Landing />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Rutas protegidas */}
        <Route
          path="/home"
          element={token ? <Home /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/collaborators"
          element={token ? <Collaborators /> : <Navigate to="/login" replace />}
        />
        <Route path="/register" element={<RegisterUser />} />

        {/* Fallback para rutas no encontradas */}
        <Route path="*" element={<Navigate to="/" replace />} />


        <Route path="/edit/:id" element={<EditUser />} />

      </Routes>
    </Router>
  );
}

export default App;
