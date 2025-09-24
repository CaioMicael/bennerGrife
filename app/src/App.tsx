import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        {/* Futuramente outras rotas podem ser adicionadas aqui */}
        {/* <Route path="/produtos" element={<ProdutosPage />} /> */}
        {/* <Route path="/clientes" element={<ClientesPage />} /> */}
      </Routes>
    </Router>
  )
}

export default App