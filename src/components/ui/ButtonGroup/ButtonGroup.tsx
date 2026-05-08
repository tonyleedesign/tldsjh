import type { ReactNode } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ButtonGroupProps {
  /**
   * Pass buttons in left-to-right visual order:
   * tertiary → secondary → primary (primary always renders rightmost)
   */
  children: ReactNode
  className?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ButtonGroup({ children, className = '' }: ButtonGroupProps) {
  return (
    <div
      className={`flex items-center gap-(--space-8) ${className}`}
    >
      {children}
    </div>
  )
}
