import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import CategoriesModal from './CategoriesModal';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesModalOpen, setIsCategoriesModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOpenCategoriesModal = () => {
    setIsCategoriesModalOpen(true);
    setIsMenuOpen(false); // Fecha o menu quando abre o modal
  };

  const handleCloseCategoriesModal = () => {
    setIsCategoriesModalOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Benner Grife</h1>
          <span className="admin-label">Admin</span>
        </div>
        
        <nav className="navigation">
          <div className="nav-item">
            <button 
              className="hamburger-btn"
              onClick={toggleMenu}
              aria-label="Menu de Cadastros"
            >
              <span className="hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span className="nav-label">Cadastro</span>
            </button>
            <HamburgerMenu 
              isOpen={isMenuOpen} 
              onClose={() => setIsMenuOpen(false)}
              onOpenCategoriesModal={handleOpenCategoriesModal}
            />
          </div>
        </nav>
      </div>
      
      <CategoriesModal 
        isOpen={isCategoriesModalOpen}
        onClose={handleCloseCategoriesModal}
      />
    </header>
  );
};

export default Header;