import { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react'

export type CategoriesIncludeHandle = {
  open: () => void
  close: () => void
}

interface CategoriesIncludeProps {
  onClose?: () => void
  onConfirm?: (payload: { name: string; description: string }) => void
  onVisibilityChange?: (isVisible: boolean) => void
}

const CategoriesInclude = forwardRef<CategoriesIncludeHandle, CategoriesIncludeProps>(
  ({ onClose, onConfirm, onVisibilityChange }, ref) => {
    const [isVisible, setIsVisible] = useState(false)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const resetForm = useCallback(() => {
      setName('')
      setDescription('')
    }, [])

    const closeOverlay = useCallback(() => {
      setIsVisible(false)
      resetForm()
      onVisibilityChange?.(false)
      onClose?.()
    }, [onClose, onVisibilityChange, resetForm])

    useImperativeHandle(
      ref,
      () => ({
        open: () => {
          setIsVisible(true)
          onVisibilityChange?.(true)
        },
        close: () => closeOverlay(),
      }),
      [closeOverlay, onVisibilityChange],
    )

    useEffect(() => {
      if (!isVisible) {
        return undefined
      }

      const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          closeOverlay()
        }
      }

      document.addEventListener('keydown', handleEscapeKey)

      return () => {
        document.removeEventListener('keydown', handleEscapeKey)
      }
    }, [isVisible, closeOverlay])

    const isConfirmDisabled = name.trim() === '' || description.trim() === ''

    const handleConfirm = () => {
      if (isConfirmDisabled) {
        return
      }

      onConfirm?.({
        name: name.trim(),
        description: description.trim(),
      })

      closeOverlay()
    }

    if (!isVisible) {
      return null
    }

    return (
      <div
        className="create-category-overlay"
        role="presentation"
        onMouseDown={(event) => event.stopPropagation()}
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className="create-category-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="create-category-title"
        >
          <div className="create-category-header">
            <h3 id="create-category-title">Adicionar nova categoria</h3>
            <p className="create-category-subtitle">
              Preencha os campos obrigatórios para cadastrar uma categoria.
            </p>
          </div>

          <form className="create-category-form" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="new-category-name">
              Nome
              <input
                id="new-category-name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Informe o nome da categoria"
                required
                autoFocus
              />
            </label>

            <label htmlFor="new-category-description">
              Descrição
              <textarea
                id="new-category-description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Descreva a categoria"
                required
                rows={4}
              />
            </label>
          </form>

          <div className="create-category-actions">
            <button type="button" className="btn-secondary" onClick={closeOverlay}>
              Fechar
            </button>
            <button
              type="button"
              className="btn-primary"
              onClick={handleConfirm}
              disabled={isConfirmDisabled}
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    )
  },
);

CategoriesInclude.displayName = 'CategoriesInclude'

export default CategoriesInclude
