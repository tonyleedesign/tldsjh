import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SideNavItemProps {
  label: string
  /** Provide href to navigate via React Router <Link>. Omit to use onClick state-based navigation. */
  href?: string
  /** Used when href is omitted — switches the active section without routing */
  onClick?: () => void
  /** Highlights the item as active */
  active?: boolean
  /** Optional lozenge rendered on the far right */
  lozenge?: ReactNode
  className?: string
}

// ─── Shared styles ────────────────────────────────────────────────────────────

const itemStyle: React.CSSProperties = {
  paddingTop:     'var(--space-8)',
  paddingBottom:  'var(--space-8)',
  paddingLeft:    'var(--space-6)',
  paddingRight:   'var(--space-6)',
  fontSize:       'var(--menu-item-lg-size)',
  lineHeight:     'var(--menu-item-lg-line-height)',
  fontWeight:     'var(--menu-item-lg-weight)',
  textDecoration: 'none',
  borderRadius:   'var(--radius-s)',
  cursor:         'pointer',
  border:         'none',
  background:     'none',
  width:          '100%',
  textAlign:      'left',
}

// ─── Component ────────────────────────────────────────────────────────────────

export function SideNavItem({
  label,
  href,
  onClick,
  active = false,
  lozenge,
  className = '',
}: SideNavItemProps) {
  const stateClasses = active
    ? 'bg-(--bg-navigation-item-primary-active) text-(--text-navigation-item-primary-active)'
    : 'bg-(--bg-navigation-item-primary-idle) hover:bg-(--bg-navigation-item-primary-hover) text-(--text-navigation-item-primary-idle) hover:text-(--text-navigation-item-primary-hover)'

  const sharedClass = `flex items-center justify-between w-full ${stateClasses} ${className}`

  const content = (
    <>
      <span>{label}</span>
      {lozenge && <span className="shrink-0">{lozenge}</span>}
    </>
  )

  if (href) {
    return (
      <Link to={href} className={sharedClass} style={itemStyle}>
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={sharedClass} style={itemStyle}>
      {content}
    </button>
  )
}
