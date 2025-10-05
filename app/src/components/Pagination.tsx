import React from 'react'
import '../styles/Pagination.css'

type PageItem = number | 'ellipsis'

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  siblingCount?: number
  disabled?: boolean
  className?: string
}

/**
 * Componente de paginação reutilizável para listas e tabelas.
 * Controla o número de página atual, renderiza botões de navegação e aplica reticências
 * quando há muitas páginas. Os estados devem ser controlados pelo componente pai via props.
 *
 * @param {PaginationProps} props - Propriedades de paginação, incluindo página atual,
 * total de páginas, callback de alteração e opções de vizinhança/estilo.
 * @returns JSX.Element|null
 */
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  disabled = false,
  className = '',
}) => {
  if (totalPages <= 1) {
    return null
  }

  const handleChangePage = (page: number) => {
    if (disabled || page === currentPage || page < 1 || page > totalPages) {
      return
    }

    onPageChange(page)
  }

  const createRange = (start: number, end: number): number[] => {
    const range: number[] = []
    for (let value = start; value <= end; value += 1) {
      range.push(value)
    }

    return range
  }

  const getPageItems = (): PageItem[] => {
    const totalVisibleNumbers = siblingCount * 2 + 3
    const totalVisibleBlocks = totalVisibleNumbers + 2 // including first and last pages

    if (totalPages <= totalVisibleBlocks) {
      return createRange(1, totalPages)
    }

    const pages: PageItem[] = []
    const leftSibling = Math.max(currentPage - siblingCount, 2)
    const rightSibling = Math.min(currentPage + siblingCount, totalPages - 1)

    const showLeftEllipsis = leftSibling > 2
    const showRightEllipsis = rightSibling < totalPages - 1

    pages.push(1)

    if (showLeftEllipsis) {
      pages.push('ellipsis')
    } else {
      pages.push(...createRange(2, leftSibling - 1))
    }

    pages.push(...createRange(leftSibling, rightSibling))

    if (showRightEllipsis) {
      pages.push('ellipsis')
    } else {
      pages.push(...createRange(rightSibling + 1, totalPages - 1))
    }

    pages.push(totalPages)

    return pages
  }

  const pageItems = getPageItems()

  return (
    <nav
      className={`pagination ${className}`.trim()}
      aria-label="Paginação"
    >
      <button
        type="button"
        className="pagination-btn"
        onClick={() => handleChangePage(currentPage - 1)}
        disabled={disabled || currentPage === 1}
        aria-label="Página anterior"
      >
        ◀
      </button>

      {pageItems.map((item, index) => {
        if (item === 'ellipsis') {
          return (
            <span key={`ellipsis-${index}`} className="pagination-ellipsis" aria-hidden>
              …
            </span>
          )
        }

        const isActive = item === currentPage

        return (
          <button
            key={`page-${item}`}
            type="button"
            className={`pagination-btn pagination-page${isActive ? ' active' : ''}`}
            onClick={() => handleChangePage(item)}
            aria-current={isActive ? 'page' : undefined}
            aria-label={`Ir para a página ${item}`}
            disabled={disabled}
          >
            {item}
          </button>
        )
      })}

      <button
        type="button"
        className="pagination-btn"
        onClick={() => handleChangePage(currentPage + 1)}
        disabled={disabled || currentPage === totalPages}
        aria-label="Próxima página"
      >
        ▶
      </button>
    </nav>
  )
}

export default Pagination
