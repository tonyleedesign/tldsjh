import type { ComponentType, SVGProps } from 'react'
import { Icon } from '../Icon'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface MetadataItemProps {
  /** Bold label text */
  label: string
  /** Optional value rendered after the label with a colon separator */
  value?: string
  /** Optional leading icon */
  icon?: ComponentType<SVGProps<SVGSVGElement>>
  /**
   * Overrides the color for both icon and text.
   * Accepts any CSS color value or variable e.g. 'var(--text-feedback-success-base)'
   * Defaults to var(--text-surface-base)
   */
  color?: string
  className?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export function MetadataItem({
  label,
  value,
  icon,
  color = 'var(--text-surface-base)',
  className = '',
}: MetadataItemProps) {
  return (
    <div
      className={`flex items-center gap-(--space-4) ${className}`}
      style={{ color }}
    >
      {icon && <Icon icon={icon} size="small" />}

      <span
        style={{
          fontSize:   'var(--body-md-size)',
          lineHeight: 'var(--body-md-line-height)',
          fontWeight: 600,
        }}
      >
        {label}
      </span>

      {value && (
        <span
          style={{
            fontSize:   'var(--body-md-size)',
            lineHeight: 'var(--body-md-line-height)',
            fontWeight: 'var(--body-md-weight)',
          }}
        >
          {value}
        </span>
      )}
    </div>
  )
}
