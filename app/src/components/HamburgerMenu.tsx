import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HamburgerMenu.css';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleProductClick = () => {
    // Futuramente navegará para a página de cadastro de produtos
    // navigate('/produtos'); // Descomentado quando a rota for criada
    console.log('Navegando para cadastro de produtos...');
    onClose();
  };

  const handleCategoryClick = () => {
    // Futuramente navegará para a página de categorias
    // navigate('/categorias'); // Descomentado quando a rota for criada
    console.log('Navegando para cadastro de categorias...');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="menu-overlay" />
      <div ref={menuRef} className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <h3>Cadastros</h3>
          <button className="close-btn" onClick={onClose} aria-label="Fechar menu">
            ×
          </button>
        </div>
        
        <div className="menu-content">
          <nav className="menu-nav">
            <button 
              className="menu-item"
              onClick={handleCategoryClick}
            >
              <span className="menu-icon">📊</span>
              <span className="menu-text">Categorias</span>
            </button>
            
            <button 
              className="menu-item"
              onClick={handleProductClick}
            >
              <span className="menu-icon">📦</span>
              <span className="menu-text">Produtos</span>
            </button>
            
            {/* Futuramente pode ser adicionado mais itens aqui */}
            {/* 
            <button className="menu-item">
              <span className="menu-icon">👥</span>
              <span className="menu-text">Clientes</span>
            </button>
            */}
          </nav>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;