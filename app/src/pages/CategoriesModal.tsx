import React, { useEffect, useMemo, useRef, useState } from 'react';
import CategoriesInclude, { CategoriesIncludeHandle } from './CategoriesInclude';
import Pagination from '../components/Pagination';
import '../styles/CategoriesModal.css';

interface Category {
  id: number;
  name: string;
  description: string;
  createdAt: string;
}

interface CategoriesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ITEMS_PER_PAGE = 3;

const CategoriesModal: React.FC<CategoriesModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const categoriesIncludeRef = useRef<CategoriesIncludeHandle | null>(null);
  const [isIncludeOpen, setIsIncludeOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Dados mockados das categorias - futuramente virão da API
  const categories: Category[] = [
    {
      id: 1,
      name: "Camisetas",
      description: "Camisetas masculinas de diversos estilos",
      createdAt: "2024-01-15"
    },
    {
      id: 2,
      name: "Calças",
      description: "Calças jeans, sociais e casuais",
      createdAt: "2024-01-20"
    },
    {
      id: 3,
      name: "Bermudas",
      description: "Bermudas para o verão e atividades casuais",
      createdAt: "2024-02-01"
    },
    {
      id: 4,
      name: "Camisas",
      description: "Camisas sociais e casuais",
      createdAt: "2024-02-10"
    },
    {
      id: 5,
      name: "Acessórios",
      description: "Cintos, carteiras e outros acessórios",
      createdAt: "2024-02-15"
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isIncludeOpen) {
        return;
      }

      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
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
  }, [isOpen, isIncludeOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setCurrentPage(1);
    }
  }, [isOpen]);

  const totalPages = useMemo(() => {
    if (categories.length === 0) {
      return 1;
    }

    return Math.ceil(categories.length / ITEMS_PER_PAGE);
  }, [categories.length]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedCategories = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return categories.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [categories, currentPage]);

  const handleOpenCreateForm = () => {
    categoriesIncludeRef.current?.open();
  };

  const handleConfirmCreate = (payload: { name: string; description: string }) => {
    console.log('Confirmar criação de categoria', payload);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-BR');
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" />
      <div ref={modalRef} className="categories-modal">
        <div className="modal-header">
          <h2>Categorias Cadastradas</h2>
          <button 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Fechar modal"
          >
            ×
          </button>
        </div>
        
        <div className="modal-content">
          {categories.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📂</div>
              <h3>Nenhuma categoria encontrada</h3>
              <p>Ainda não há categorias cadastradas no sistema.</p>
            </div>
          ) : (
            <>
              <div className="categories-grid">
                {paginatedCategories.map(category => (
                  <div key={category.id} className="category-card">
                  <div className="category-header">
                    <h3 className="category-name">{category.name}</h3>
                    <span className="category-id">#{category.id}</span>
                  </div>
                  <p className="category-description">{category.description}</p>
                  <div className="category-footer">
                    <span className="category-date">
                      Criado em: {formatDate(category.createdAt)}
                    </span>
                  </div>
                </div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="categories-pagination">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </div>
              )}
            </>
          )}
        </div>
        
        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>
            Fechar
          </button>
          <button className="btn-primary" onClick={handleOpenCreateForm}>
            Adicionar Nova Categoria
          </button>
        </div>
      </div>

      <CategoriesInclude
        ref={categoriesIncludeRef}
        onConfirm={handleConfirmCreate}
        onVisibilityChange={setIsIncludeOpen}
      />
    </>
  );
};

export default CategoriesModal;