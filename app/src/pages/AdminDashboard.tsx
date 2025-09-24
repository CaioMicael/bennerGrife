import React from 'react';
import Header from '../components/Header';
import '../styles/AdminDashboard.css';

const AdminDashboard: React.FC = () => {
  return (
    <div className="admin-dashboard">
      <Header />
      
      <main className="dashboard-content">
        <div className="dashboard-container">
          <div className="welcome-section">
            <h1>Bem-vindo ao Sistema Administrativo</h1>
            <p className="welcome-subtitle">
              Benner Grife - Painel de Controle
            </p>
          </div>
          
          <div className="dashboard-grid">
            <div className="dashboard-card">
              <div className="card-icon">📦</div>
              <div className="card-content">
                <h3>Produtos</h3>
                <p>Gerencie o catálogo de produtos da sua loja</p>
                <span className="card-hint">
                  Use o menu "Cadastro" para adicionar novos produtos
                </span>
              </div>
            </div>
            
            <div className="dashboard-card coming-soon">
              <div className="card-icon">📊</div>
              <div className="card-content">
                <h3>Vendas</h3>
                <p>Acompanhe as vendas e relatórios</p>
                <span className="card-status">Em breve</span>
              </div>
            </div>
            
            <div className="dashboard-card coming-soon">
              <div className="card-icon">👥</div>
              <div className="card-content">
                <h3>Clientes</h3>
                <p>Gerencie informações dos clientes</p>
                <span className="card-status">Em breve</span>
              </div>
            </div>
            
            <div className="dashboard-card coming-soon">
              <div className="card-icon">🎨</div>
              <div className="card-content">
                <h3>Categorias</h3>
                <p>Organize produtos por categorias</p>
                <span className="card-status">Em breve</span>
              </div>
            </div>
          </div>
          
          <div className="getting-started">
            <h2>Como começar?</h2>
            <div className="steps">
              <div className="step">
                <span className="step-number">1</span>
                <div className="step-content">
                  <h4>Acesse o Menu Cadastro</h4>
                  <p>Clique no botão "Cadastro" no cabeçalho da página</p>
                </div>
              </div>
              
              <div className="step">
                <span className="step-number">2</span>
                <div className="step-content">
                  <h4>Selecione Produtos</h4>
                  <p>No menu que abrir, clique em "Produtos"</p>
                </div>
              </div>
              
              <div className="step">
                <span className="step-number">3</span>
                <div className="step-content">
                  <h4>Cadastre seus produtos</h4>
                  <p>Adicione informações completas dos seus produtos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;