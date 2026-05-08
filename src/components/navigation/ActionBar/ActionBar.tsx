import type { ReactNode } from 'react'
import { Button } from '../../ui/Button'
import { ArrowLeftIcon } from '../../ui/Icon'
import { Breadcrumb } from '../Breadcrumb'
import type { BreadcrumbItem } from '../Breadcrumb'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ActionBarProps {
  /** Breadcrumb trail — always present */
  breadcrumbs: BreadcrumbItem[]
  /** Page / module title — optional */
  title?: string
  /**
   * When provided, renders a secondary "← Back" button to the left of the title.
   * Use this for detail views (e.g. case level).
   */
  onBackClick?: () => void
  /**
   * Metadata items rendered inline to the right of the title.
   * Use <MetadataItem> components here.
   */
  titleMeta?: ReactNode
  /**
   * Optional second row of content beneath the title row.
   * Hidden when not provided.
   */
  secondaryContent?: ReactNode
  /**
   * Action buttons rendered on the far right, aligned to the top of the title row.
   * Wrap in <ButtonGroup> with primary rightmost.
   */
  actions?: ReactNode
  className?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ActionBar({
  breadcrumbs,
  title,
  onBackClick,
  titleMeta,
  secondaryContent,
  actions,
  className = '',
}: ActionBarProps) {
  const hasTitleRow = title || onBackClick

  return (
    <section
      className={`flex flex-col px-(--space-40) py-(--space-16) bg-(--bg-surface-base) ${className}`}
      style={{ borderBottom: 'var(--space-1) solid var(--border-surface-base)' }}
    >
      {/* ── Row 1: Breadcrumbs ── */}
      <Breadcrumb items={breadcrumbs} />

      {/* ── Row 2: Title + actions (only when there's something to show) ── */}
      {(hasTitleRow || actions) && (
        <div className="flex items-start justify-between gap-(--space-16) mt-(--space-20)">

          {/* Left — title + optional secondary row */}
          <div className="flex flex-col gap-(--space-8)">
            {hasTitleRow && (
              <div className="flex items-center gap-(--space-12)">
                {onBackClick && (
                  <Button
                    variant="secondary"
                    leftIcon={ArrowLeftIcon}
                    onClick={onBackClick}
                  >
                    Back
                  </Button>
                )}

                {title && (
                  <h1
                    className="text-(--text-surface-base)"
                    style={{
                      fontSize:   'var(--heading-xl-size)',
                      lineHeight: 'var(--heading-xl-line-height)',
                      fontWeight: 'var(--heading-xl-weight)',
                      margin:     0,
                    }}
                  >
                    {title}
                  </h1>
                )}

                {titleMeta && (
                  <div className="flex items-center gap-(--space-12)">
                    {titleMeta}
                  </div>
                )}
              </div>
            )}

            {secondaryContent && (
              <div className="flex items-center gap-(--space-12)">
                {secondaryContent}
              </div>
            )}
          </div>

          {/* Right — actions, top-aligned with title row */}
          {actions && (
            <div className="shrink-0">
              {actions}
            </div>
          )}

        </div>
      )}
    </section>
  )
}
