import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;