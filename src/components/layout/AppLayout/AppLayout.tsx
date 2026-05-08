import { useState } from 'react'
import type { ReactNode } from 'react'
import { GlobalHeader } from '../../navigation/GlobalHeader'
import { ActionBar } from '../../navigation/ActionBar'
import { SideNav } from '../../navigation/SideNav'
import type { BreadcrumbItem } from '../../navigation/Breadcrumb'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface AppLayoutProps {
  // ── GlobalHeader ────────────────────────────────────────────────────────────
  /** Active module name shown in the header */
  appName?: string
  /** Called when the menu icon is clicked */
  onMenuClick?: () => void
  /** Optional content rendered to the left of the bell icon */
  headerActions?: ReactNode
  /** Called when the notifications icon is clicked */
  onNotificationsClick?: () => void
  /** Called when the account button is clicked */
  onAccountClick?: () => void
  /** Label for the account button */
  accountLabel?: string

  // ── ActionBar ───────────────────────────────────────────────────────────────
  /** Breadcrumb trail */
  breadcrumbs: BreadcrumbItem[]
  /** Page / module title */
  title?: string
  /** When provided, renders a ← Back button to the left of the title */
  onBackClick?: () => void
  /** Metadata rendered inline to the right of the title */
  titleMeta?: ReactNode
  /** Optional second row of content beneath the title row */
  secondaryContent?: ReactNode
  /** Action buttons for the far right of the ActionBar */
  actions?: ReactNode

  // ── SideNav ─────────────────────────────────────────────────────────────────
  /** Nav items rendered inside the SideNav when expanded */
  sideNavContent?: ReactNode
  /** Initial open state of the SideNav — defaults to true */
  defaultSideNavOpen?: boolean

  // ── Page content ────────────────────────────────────────────────────────────
  children?: ReactNode
  className?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export function AppLayout({
  // GlobalHeader
  appName,
  onMenuClick,
  headerActions,
  onNotificationsClick,
  onAccountClick,
  accountLabel,
  // ActionBar
  breadcrumbs,
  title,
  onBackClick,
  titleMeta,
  secondaryContent,
  actions,
  // SideNav
  sideNavContent,
  defaultSideNavOpen = true,
  // Content
  children,
  className = '',
}: AppLayoutProps) {
  const [sideNavOpen, setSideNavOpen] = useState(defaultSideNavOpen)

  return (
    <div className={`flex flex-col h-screen overflow-hidden bg-(--bg-surface-base) ${className}`}>

      {/* ── Sticky header block ── */}
      <div className="sticky top-0 z-50">
        <GlobalHeader
          appName={appName}
          onMenuClick={onMenuClick}
          headerActions={headerActions}
          onNotificationsClick={onNotificationsClick}
          onAccountClick={onAccountClick}
          accountLabel={accountLabel}
        />
        <ActionBar
          breadcrumbs={breadcrumbs}
          title={title}
          onBackClick={onBackClick}
          titleMeta={titleMeta}
          secondaryContent={secondaryContent}
          actions={actions}
        />
      </div>

      {/* ── Body — SideNav + scrollable content ── */}
      <div className="flex flex-1 overflow-hidden">
        <SideNav
          isOpen={sideNavOpen}
          onToggle={() => setSideNavOpen(prev => !prev)}
        >
          {sideNavContent}
        </SideNav>

        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>

    </div>
  )
}
