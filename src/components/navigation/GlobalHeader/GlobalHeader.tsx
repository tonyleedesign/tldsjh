import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../ui/Button'
import { Icon } from '../../ui/Icon'
import { MenuGridIcon } from '../../ui/Icon/icons/menu-grid'
import { BellIcon } from '../../ui/Icon/icons/bell'
import { ChevronDownIcon } from '../../ui/Icon/icons/chevron-down'
import judiLogo from '../../../assets/judi-logo.svg'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface GlobalHeaderProps {
  /** Current app or module name shown next to the logo */
  appName?: string
  /** Called when the menu grid icon is clicked */
  onMenuClick?: () => void
  /** Optional content rendered to the left of the bell icon */
  headerActions?: ReactNode
  /** Called when the bell notification icon is clicked */
  onNotificationsClick?: () => void
  /** Called when the account button is clicked */
  onAccountClick?: () => void
  /** Label for the account button */
  accountLabel?: string
  className?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export function GlobalHeader({
  appName,
  onMenuClick,
  headerActions,
  onNotificationsClick,
  onAccountClick,
  accountLabel = 'Account',
  className = '',
}: GlobalHeaderProps) {
  return (
    <header
      className={`flex items-center justify-between px-(--space-16) py-(--space-10) ${className}`}
      style={{
        background:   'var(--bg-navigation-bar)',
        borderBottom: 'var(--space-1) solid var(--border-surface-base)',
      }}
    >
      {/* ── Left ── */}
      <div className="flex items-center gap-(--space-16)">
        <Button
          variant="inverse"
          iconOnly
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <Icon icon={MenuGridIcon} size="regular" />
        </Button>

        <div className="flex items-center" style={{ height: 'var(--space-24)' }}>
          <Link to="/" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
            <img src={judiLogo} alt="Judi" style={{ height: '100%', width: 'auto' }} />
          </Link>
        </div>

        {appName && (
          <span
            className="text-(--text-surface-inverse)"
            style={{
              fontSize:   'var(--global-header-module-title-size)',
              lineHeight: 'var(--global-header-module-title-line-height)',
              fontWeight: 'var(--global-header-module-title-weight)',
            }}
          >
            {appName}
          </span>
        )}
      </div>

      {/* ── Right ── */}
      <div className="flex items-center gap-(--space-16)">
        {headerActions}
        <Button
          variant="inverse"
          iconOnly
          onClick={onNotificationsClick}
          aria-label="Notifications"
        >
          <Icon icon={BellIcon} size="regular" />
        </Button>

        <Button
          variant="inverse"
          rightIcon={ChevronDownIcon}
          onClick={onAccountClick}
        >
          {accountLabel}
        </Button>
      </div>
    </header>
  )
}
