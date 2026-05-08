import type { ReactNode } from 'react'
import { Button } from '../../ui/Button'
import { Icon } from '../../ui/Icon'
import { MenuBarsIcon } from '../../ui/Icon/icons/menu-bars'
import { XCloseIcon } from '../../ui/Icon/icons/x-close'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SideNavProps {
  /** Whether the nav is expanded or collapsed */
  isOpen: boolean
  /** Called when the toggle icon is clicked — owner manages state */
  onToggle: () => void
  /** Nav items — rendered when expanded */
  children?: ReactNode
  className?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export function SideNav({ isOpen, onToggle, children, className = '' }: SideNavProps) {
  return (
    <aside
      className={`flex flex-col bg-(--bg-surface-base) ${className}`}
      style={{
        width:       isOpen ? 'var(--sidenav-width-expanded)' : undefined,
        borderRight: 'var(--space-1) solid var(--border-surface-base)',
        flexShrink:  0,
        height:      '100%',
        transition:  'width 0.2s ease',
      }}
    >
      {isOpen ? (
        // ── Expanded ──────────────────────────────────────────────────────────
        <div
          className="flex flex-col"
          style={{ padding: 'var(--space-24)' }}
        >
          {/* X close — right-aligned */}
          <div className="flex justify-end">
            <Button
              variant="tertiary"
              iconOnly
              onClick={onToggle}
              aria-label="Close navigation"
            >
              <Icon icon={XCloseIcon} size="regular" />
            </Button>
          </div>

          {/* Nav items */}
          {children && (
            <div className="flex flex-col mt-(--space-24)">
              {children}
            </div>
          )}
        </div>
      ) : (
        // ── Collapsed ─────────────────────────────────────────────────────────
        <div
          className="flex justify-center"
          style={{
            paddingTop:   'var(--space-24)',
            paddingLeft:  'var(--space-8)',
            paddingRight: 'var(--space-8)',
          }}
        >
          <Button
            variant="tertiary"
            iconOnly
            onClick={onToggle}
            aria-label="Open navigation"
          >
            <Icon
              icon={MenuBarsIcon}
              size="regular"
              style={{ color: 'var(--icon-action-secondary-idle)' }}
            />
          </Button>
        </div>
      )}
    </aside>
  )
}
