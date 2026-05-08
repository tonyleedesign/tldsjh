import { forwardRef, type ComponentType, type SVGProps } from 'react'
import { Icon } from '../Icon'

// ─── Types ────────────────────────────────────────────────────────────────────

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'inverse'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style of the button */
  variant?: ButtonVariant
  /** Switches all color tokens to their critical/destructive counterparts */
  destructive?: boolean
  /** Icon rendered to the left of the label */
  leftIcon?: ComponentType<SVGProps<SVGSVGElement>>
  /** Icon rendered to the right of the label (spinner renders after this when loading) */
  rightIcon?: ComponentType<SVGProps<SVGSVGElement>>
  /** Renders as a square 36×36 button — pass the icon as children */
  iconOnly?: boolean
  /** Shows a spinner; also sets disabled to prevent interaction */
  loading?: boolean
  /** Full-width on mobile, auto-width on sm+ */
  fullWidth?: boolean
}

// ─── Spinner ──────────────────────────────────────────────────────────────────

function Spinner() {
  return (
    <span
      role="status"
      aria-label="Loading"
      style={{
        display:      'inline-block',
        width:        'var(--space-20)',
        height:       'var(--space-20)',
        border:       '2.5px solid currentColor',
        borderTopColor: 'transparent',
        borderRadius: '50%',
        animation:    'judi-spin 0.65s linear infinite',
        flexShrink:   0,
      }}
    />
  )
}

// ─── Icon wrapper — keeps icons clipped to 20×20 ──────────────────────────────

function IconSlot({ children }: { children: React.ReactNode }) {
  return (
    <span
      aria-hidden="true"
      style={{
        width:           'var(--space-20)',
        height:          'var(--space-20)',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        flexShrink:      0,
      }}
    >
      {children}
    </span>
  )
}

// ─── Variant → className mapping ──────────────────────────────────────────────

function resolveVariantClasses(
  variant: ButtonVariant,
  destructive: boolean,
  isDisabled: boolean,
): string {
  if (isDisabled) {
    return [
      'bg-(--bg-action-neutral-disabled)',
      'text-(--text-action-base-disabled)',
      'border-transparent',
      'focus-visible:outline-(--border-surface-base)',
    ].join(' ')
  }

  switch (`${variant}:${destructive}`) {
    case 'primary:false':
      return [
        'bg-(--bg-action-primary-idle)',
        'hover:bg-(--bg-action-primary-hover)',
        'active:bg-(--bg-action-primary-pressed)',
        'text-(--text-action-primary-idle)',
        'border-transparent',
        'focus-visible:outline-(--border-action-secondary-idle)',
      ].join(' ')

    case 'primary:true':
      return [
        'bg-(--bg-action-primary-critical-idle)',
        'hover:bg-(--bg-action-primary-critical-hover)',
        'active:bg-(--bg-action-primary-critical-pressed)',
        'text-(--text-action-primary-critical-idle)',
        'border-transparent',
        'focus-visible:outline-(--border-action-secondary-critical-idle)',
      ].join(' ')

    case 'secondary:false':
      return [
        'bg-(--bg-action-secondary-idle)',
        'hover:bg-(--bg-action-secondary-hover)',
        'active:bg-(--bg-action-secondary-pressed)',
        'text-(--text-action-secondary-idle)',
        'border-(--border-action-secondary-idle)',
        'hover:border-(--border-action-secondary-hover)',
        'active:border-(--border-action-secondary-pressed)',
        'focus-visible:outline-(--border-action-secondary-idle)',
      ].join(' ')

    case 'secondary:true':
      return [
        'bg-(--bg-action-secondary-critical-idle)',
        'hover:bg-(--bg-action-secondary-critical-hover)',
        'active:bg-(--bg-action-secondary-critical-pressed)',
        'text-(--text-action-secondary-critical-idle)',
        'hover:text-(--text-action-secondary-critical-hover)',
        'active:text-(--text-action-secondary-critical-pressed)',
        'border-(--border-action-secondary-critical-idle)',
        'hover:border-(--border-action-secondary-critical-hover)',
        'active:border-(--border-action-secondary-critical-pressed)',
        'focus-visible:outline-(--border-action-secondary-critical-idle)',
      ].join(' ')

    case 'tertiary:false':
      return [
        'bg-transparent',
        'text-(--text-action-secondary-idle)',
        'hover:text-(--text-action-secondary-hover)',
        'hover:underline',
        'active:text-(--text-action-secondary-pressed)',
        'border-transparent',
        'focus-visible:outline-(--border-action-secondary-idle)',
      ].join(' ')

    case 'tertiary:true':
      return [
        'bg-transparent',
        'text-(--text-action-secondary-critical-idle)',
        'hover:text-(--text-action-secondary-critical-hover)',
        'hover:underline',
        'active:text-(--text-action-secondary-critical-pressed)',
        'border-transparent',
        'focus-visible:outline-(--border-action-secondary-critical-idle)',
      ].join(' ')

    // inverse — for use on dark/gradient backgrounds (e.g. TopBar)
    case 'inverse:false':
    case 'inverse:true':
      return [
        'bg-(--bg-action-inverse-idle)',
        'hover:bg-(--bg-action-inverse-hover)',
        'active:bg-(--bg-action-inverse-pressed)',
        'text-(--text-action-inverse-idle)',
        'hover:text-(--text-action-inverse-hover)',
        'active:text-(--text-action-inverse-pressed)',
        'border-transparent',
        'focus-visible:outline-(--text-action-inverse-idle)',
      ].join(' ')

    default:
      return ''
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant    = 'primary',
    destructive = false,
    leftIcon,
    rightIcon,
    iconOnly   = false,
    loading    = false,
    fullWidth  = false,
    disabled,
    children,
    className  = '',
    style,
    ...props
  },
  ref
) {
  const isDisabled = disabled || loading

  const baseClasses = [
    'inline-flex items-center justify-center',
    'border',
    'select-none',
    'transition-colors duration-150',
    'outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    iconOnly
      ? 'w-(--space-36) h-(--space-36) p-0 shrink-0'
      : `h-(--space-36) px-(--space-12) gap-(--space-8) ${fullWidth ? 'w-full sm:w-auto' : ''}`,
    isDisabled ? 'cursor-not-allowed' : 'cursor-pointer',
  ]

  const variantClasses = resolveVariantClasses(variant, destructive, isDisabled)

  const cls = [...baseClasses, variantClasses, className]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      ref={ref}
      disabled={isDisabled}
      className={cls}
      style={{
        borderRadius: 'var(--radius-sm)',
        fontSize:     'var(--button-label-size)',
        lineHeight:   'var(--button-label-line-height)',
        fontWeight:   'var(--button-label-weight)',
        ...style,
      }}
      {...props}
    >
      {iconOnly ? (
        <IconSlot>{loading ? <Spinner /> : children}</IconSlot>
      ) : (
        <>
          {leftIcon  && <Icon icon={leftIcon}  size="regular" />}
          {children}
          {rightIcon && <Icon icon={rightIcon} size="regular" />}
          {loading   && <Spinner />}
        </>
      )}
    </button>
  )
})
