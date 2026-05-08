import { useState } from 'react'
import { HashRouter } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { AddIcon, ArrowRightIcon, DeleteIcon, StarFilledIcon } from '../components/ui/Icon'
import { AppLayout } from '../components/layout/AppLayout'
import { SideNavItem } from '../components/navigation/SideNav'
import { ButtonGroup } from '../components/ui/ButtonGroup'

type Theme = 'minerva' | 'evolution'
type Section = 'Typography' | 'Colors' | 'Spacing' | 'Radius' | 'Button' | 'Shell'

const SECTIONS: Section[] = ['Typography', 'Colors', 'Spacing', 'Radius', 'Button', 'Shell']

// ─── Typography ───────────────────────────────────────────────────────────────

function TypographySection() {
  const styles = [
    { label: 'Heading XL', size: '--heading-xl-size', lh: '--heading-xl-line-height', fw: '--heading-xl-weight' },
    { label: 'Heading LG', size: '--heading-lg-size', lh: '--heading-lg-line-height', fw: '--heading-lg-weight' },
    { label: 'Heading MD', size: '--heading-md-size', lh: '--heading-md-line-height', fw: '--heading-md-weight' },
    { label: 'Heading SM', size: '--heading-sm-size', lh: '--heading-sm-line-height', fw: '--heading-sm-weight' },
    { label: 'Heading XS', size: '--heading-xs-size', lh: '--heading-xs-line-height', fw: '--heading-xs-weight' },
    { label: 'Body LG',    size: '--body-lg-size',    lh: '--body-lg-line-height',    fw: '--body-lg-weight' },
    { label: 'Body MD',    size: '--body-md-size',    lh: '--body-md-line-height',    fw: '--body-md-weight' },
    { label: 'Body SM',    size: '--body-sm-size',    lh: '--body-sm-line-height',    fw: '--body-sm-weight' },
    { label: 'Label LG',   size: '--label-lg-size',   lh: '--label-lg-line-height',   fw: '--label-lg-weight' },
    { label: 'Label MD',   size: '--label-md-size',   lh: '--label-md-line-height',   fw: '--label-md-weight' },
    { label: 'Label SM',   size: '--label-sm-size',   lh: '--label-sm-line-height',   fw: '--label-sm-weight' },
  ]

  return (
    <div className="min-h-full">
      <h2
        className="mb-(--space-24) text-(--text-surface-base)"
        style={{ fontSize: 'var(--heading-md-size)', lineHeight: 'var(--heading-md-line-height)', fontWeight: 'var(--heading-md-weight)' }}
      >
        Typography
      </h2>
      <div className="flex flex-col gap-(--space-12)">
        {styles.map(({ label, size, lh, fw }) => (
          <div key={label} className="flex items-baseline gap-(--space-24)">
            <span
              className="shrink-0 w-24 text-(--text-surface-subtle)"
              style={{ fontSize: 'var(--label-md-size)', fontWeight: 'var(--label-md-weight)' }}
            >
              {label}
            </span>
            <p
              className="text-(--text-surface-base)"
              style={{ fontSize: `var(${size})`, lineHeight: `var(${lh})`, fontWeight: `var(${fw})` }}
            >
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Colors ───────────────────────────────────────────────────────────────────

function ColorsSection() {
  const groups: {
    label: string
    swatches: { label: string; token: string; border?: boolean }[]
  }[] = [
    {
      label: 'Background — Action',
      swatches: [
        { label: 'primary-idle',    token: '--bg-action-primary-idle' },
        { label: 'primary-hover',   token: '--bg-action-primary-hover' },
        { label: 'primary-pressed', token: '--bg-action-primary-pressed' },
        { label: 'primary-critical-idle',    token: '--bg-action-primary-critical-idle' },
        { label: 'primary-critical-hover',   token: '--bg-action-primary-critical-hover' },
        { label: 'secondary-idle',  token: '--bg-action-secondary-idle', border: true },
        { label: 'inverse-idle',    token: '--bg-action-inverse-idle', border: true },
        { label: 'neutral-idle',    token: '--bg-action-neutral-idle', border: true },
      ],
    },
    {
      label: 'Background — Feedback',
      swatches: [
        { label: 'success-base',          token: '--bg-feedback-success-base' },
        { label: 'success-muted',         token: '--bg-feedback-success-muted' },
        { label: 'success-inverse',       token: '--bg-feedback-success-inverse', border: true },
        { label: 'warning-base',          token: '--bg-feedback-warning-base' },
        { label: 'warning-inverse',       token: '--bg-feedback-warning-inverse', border: true },
        { label: 'error-base',            token: '--bg-feedback-error-base' },
        { label: 'error-muted',           token: '--bg-feedback-error-muted' },
        { label: 'error-inverse',         token: '--bg-feedback-error-inverse', border: true },
        { label: 'info-base',             token: '--bg-feedback-informational-base' },
        { label: 'info-inverse',          token: '--bg-feedback-informational-inverse', border: true },
      ],
    },
    {
      label: 'Background — Surface',
      swatches: [
        { label: 'surface-base',    token: '--bg-surface-base', border: true },
        { label: 'surface-subtle',  token: '--bg-surface-subtle', border: true },
        { label: 'surface-muted',   token: '--bg-surface-muted', border: true },
        { label: 'surface-inverse', token: '--bg-surface-inverse' },
        { label: 'accent-primary',  token: '--bg-surface-accent-primary' },
        { label: 'accent-secondary', token: '--bg-surface-accent-secondary' },
        { label: 'accent-tertiary', token: '--bg-surface-accent-tertiary' },
      ],
    },
    {
      label: 'Border — Action',
      swatches: [
        { label: 'secondary-idle',    token: '--border-action-secondary-idle', border: true },
        { label: 'secondary-hover',   token: '--border-action-secondary-hover', border: true },
        { label: 'secondary-pressed', token: '--border-action-secondary-pressed', border: true },
        { label: 'critical-idle',     token: '--border-action-secondary-critical-idle', border: true },
      ],
    },
    {
      label: 'Border — Surface',
      swatches: [
        { label: 'surface-base',    token: '--border-surface-base', border: true },
        { label: 'surface-subtle',  token: '--border-surface-subtle', border: true },
        { label: 'surface-inverse', token: '--border-surface-inverse' },
      ],
    },
    {
      label: 'Text — Action',
      swatches: [
        { label: 'primary-idle',          token: '--text-action-primary-idle', border: true },
        { label: 'secondary-idle',        token: '--text-action-secondary-idle', border: true },
        { label: 'inverse-idle',          token: '--text-action-inverse-idle', border: true },
        { label: 'hyperlink',             token: '--text-action-hyperlink', border: true },
        { label: 'base-idle',             token: '--text-action-base-idle', border: true },
        { label: 'base-disabled',         token: '--text-action-base-disabled', border: true },
      ],
    },
    {
      label: 'Text — Surface',
      swatches: [
        { label: 'surface-base',    token: '--text-surface-base', border: true },
        { label: 'surface-subtle',  token: '--text-surface-subtle', border: true },
        { label: 'surface-inverse', token: '--text-surface-inverse', border: true },
      ],
    },
  ]

  return (
    <div className="min-h-full">
      <h2
        className="mb-(--space-24) text-(--text-surface-base)"
        style={{ fontSize: 'var(--heading-md-size)', lineHeight: 'var(--heading-md-line-height)', fontWeight: 'var(--heading-md-weight)' }}
      >
        Colors
      </h2>
      <div className="flex flex-col gap-(--space-32)">
        {groups.map(({ label, swatches }) => (
          <div key={label}>
            <h3
              className="mb-(--space-16) text-(--text-surface-subtle)"
              style={{ fontSize: 'var(--label-lg-size)', fontWeight: 'var(--label-lg-weight)' }}
            >
              {label}
            </h3>
            <div className="flex flex-wrap gap-(--space-12)">
              {swatches.map(({ label: swatchLabel, token, border }) => (
                <div key={swatchLabel} className="flex flex-col items-center gap-(--space-6)">
                  <div
                    className="w-12 h-12 rounded-(--radius-sm)"
                    style={{
                      background: `var(${token})`,
                      border:     border ? '1px solid var(--border-surface-base)' : undefined,
                    }}
                  />
                  <span
                    className="text-(--text-surface-subtle) text-center max-w-16"
                    style={{ fontSize: 'var(--label-sm-size)' }}
                  >
                    {swatchLabel}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Spacing ──────────────────────────────────────────────────────────────────

function SpacingSection() {
  const tokens: { label: string; token: string }[] = [
    { label: 'space-1',  token: '--space-1' },
    { label: 'space-2',  token: '--space-2' },
    { label: 'space-4',  token: '--space-4' },
    { label: 'space-6',  token: '--space-6' },
    { label: 'space-8',  token: '--space-8' },
    { label: 'space-9',  token: '--space-9' },
    { label: 'space-10', token: '--space-10' },
    { label: 'space-11', token: '--space-11' },
    { label: 'space-12', token: '--space-12' },
    { label: 'space-16', token: '--space-16' },
    { label: 'space-20', token: '--space-20' },
    { label: 'space-24', token: '--space-24' },
    { label: 'space-30', token: '--space-30' },
    { label: 'space-32', token: '--space-32' },
    { label: 'space-36', token: '--space-36' },
    { label: 'space-40', token: '--space-40' },
  ]

  return (
    <div className="min-h-full">
      <h2
        className="mb-(--space-24) text-(--text-surface-base)"
        style={{ fontSize: 'var(--heading-md-size)', lineHeight: 'var(--heading-md-line-height)', fontWeight: 'var(--heading-md-weight)' }}
      >
        Spacing
      </h2>
      <div className="flex flex-col gap-(--space-8)">
        {tokens.map(({ label, token }) => (
          <div key={token} className="flex items-center gap-(--space-16)">
            <span
              className="shrink-0 w-[72px] text-(--text-surface-subtle)"
              style={{ fontSize: 'var(--label-md-size)', fontWeight: 'var(--label-md-weight)' }}
            >
              {label}
            </span>
            <div
              className="bg-(--bg-action-primary-idle) h-4 min-w-[2px] rounded-(--radius-xs)"
              style={{ width: `var(${token})` }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Button ───────────────────────────────────────────────────────────────────

function DemoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-(--space-8)">
      <span
        className="text-(--text-surface-subtle)"
        style={{ fontSize: 'var(--label-md-size)', fontWeight: 'var(--label-md-weight)' }}
      >
        {label}
      </span>
      <div className="flex flex-wrap items-center gap-(--space-8)">
        {children}
      </div>
    </div>
  )
}

function ButtonSection() {
  return (
    <div className="min-h-full">
      <h2
        className="mb-(--space-24) text-(--text-surface-base)"
        style={{ fontSize: 'var(--heading-md-size)', lineHeight: 'var(--heading-md-line-height)', fontWeight: 'var(--heading-md-weight)' }}
      >
        Button
      </h2>

      {/* Primary */}
      <div className="mb-(--space-32) flex flex-col gap-(--space-16)">
        <h3
          className="text-(--text-surface-subtle)"
          style={{ fontSize: 'var(--label-lg-size)', fontWeight: 'var(--label-lg-weight)' }}
        >
          Primary
        </h3>
        <DemoRow label="Default">
          <Button variant="primary">Label</Button>
          <Button variant="primary" leftIcon={AddIcon}>Left icon</Button>
          <Button variant="primary" rightIcon={ArrowRightIcon}>Right icon</Button>
          <Button variant="primary" leftIcon={AddIcon} rightIcon={ArrowRightIcon}>Both icons</Button>
          <Button variant="primary" loading>Loading</Button>
          <Button variant="primary" loading rightIcon={ArrowRightIcon}>Loading</Button>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="primary" iconOnly><AddIcon /></Button>
          <Button variant="primary" iconOnly loading><StarFilledIcon /></Button>
        </DemoRow>
        <DemoRow label="Destructive">
          <Button variant="primary" destructive>Delete</Button>
          <Button variant="primary" destructive leftIcon={DeleteIcon}>Delete item</Button>
          <Button variant="primary" destructive loading>Deleting</Button>
          <Button variant="primary" destructive disabled>Disabled</Button>
          <Button variant="primary" destructive iconOnly><DeleteIcon /></Button>
        </DemoRow>
      </div>

      {/* Secondary */}
      <div className="mb-(--space-32) flex flex-col gap-(--space-16)">
        <h3
          className="text-(--text-surface-subtle)"
          style={{ fontSize: 'var(--label-lg-size)', fontWeight: 'var(--label-lg-weight)' }}
        >
          Secondary
        </h3>
        <DemoRow label="Default">
          <Button variant="secondary">Label</Button>
          <Button variant="secondary" leftIcon={AddIcon}>Left icon</Button>
          <Button variant="secondary" rightIcon={ArrowRightIcon}>Right icon</Button>
          <Button variant="secondary" loading>Loading</Button>
          <Button variant="secondary" disabled>Disabled</Button>
          <Button variant="secondary" iconOnly><StarFilledIcon /></Button>
        </DemoRow>
        <DemoRow label="Destructive">
          <Button variant="secondary" destructive>Delete</Button>
          <Button variant="secondary" destructive leftIcon={DeleteIcon}>Delete item</Button>
          <Button variant="secondary" destructive loading>Deleting</Button>
          <Button variant="secondary" destructive disabled>Disabled</Button>
          <Button variant="secondary" destructive iconOnly><DeleteIcon /></Button>
        </DemoRow>
      </div>

      {/* Tertiary */}
      <div className="mb-(--space-32) flex flex-col gap-(--space-16)">
        <h3
          className="text-(--text-surface-subtle)"
          style={{ fontSize: 'var(--label-lg-size)', fontWeight: 'var(--label-lg-weight)' }}
        >
          Tertiary
        </h3>
        <DemoRow label="Default">
          <Button variant="tertiary">Label</Button>
          <Button variant="tertiary" leftIcon={AddIcon}>Left icon</Button>
          <Button variant="tertiary" rightIcon={ArrowRightIcon}>Right icon</Button>
          <Button variant="tertiary" loading>Loading</Button>
          <Button variant="tertiary" disabled>Disabled</Button>
          <Button variant="tertiary" iconOnly><StarFilledIcon /></Button>
        </DemoRow>
        <DemoRow label="Destructive">
          <Button variant="tertiary" destructive>Delete</Button>
          <Button variant="tertiary" destructive leftIcon={DeleteIcon}>Delete item</Button>
          <Button variant="tertiary" destructive loading>Deleting</Button>
          <Button variant="tertiary" destructive disabled>Disabled</Button>
          <Button variant="tertiary" destructive iconOnly><DeleteIcon /></Button>
        </DemoRow>
      </div>

      {/* Inverse */}
      <div className="flex flex-col gap-(--space-16)">
        <h3
          className="text-(--text-surface-subtle)"
          style={{ fontSize: 'var(--label-lg-size)', fontWeight: 'var(--label-lg-weight)' }}
        >
          Inverse
        </h3>
        <div className="p-(--space-24) bg-(--bg-surface-inverse) rounded-(--radius-md)">
          <DemoRow label="Default">
            <Button variant="inverse">Label</Button>
            <Button variant="inverse" leftIcon={AddIcon}>Left icon</Button>
            <Button variant="inverse" rightIcon={ArrowRightIcon}>Right icon</Button>
            <Button variant="inverse" loading>Loading</Button>
            <Button variant="inverse" disabled>Disabled</Button>
            <Button variant="inverse" iconOnly><StarFilledIcon /></Button>
          </DemoRow>
        </div>
      </div>
    </div>
  )
}

// ─── Radius ───────────────────────────────────────────────────────────────────

function RadiusSection() {
  const tokens: { label: string; token: string }[] = [
    { label: 'none', token: '--radius-none' },
    { label: 'soft', token: '--radius-soft' },
    { label: 'xs',   token: '--radius-xs' },
    { label: 'sm',   token: '--radius-sm' },
    { label: 'md',   token: '--radius-md' },
    { label: 'lg',   token: '--radius-lg' },
    { label: 'xl',   token: '--radius-xl' },
    { label: '2xl',  token: '--radius-2xl' },
    { label: 'full', token: '--radius-full' },
  ]

  return (
    <div className="min-h-full">
      <h2
        className="mb-(--space-24) text-(--text-surface-base)"
        style={{ fontSize: 'var(--heading-md-size)', lineHeight: 'var(--heading-md-line-height)', fontWeight: 'var(--heading-md-weight)' }}
      >
        Border Radius
      </h2>
      <div className="flex flex-wrap gap-(--space-24)">
        {tokens.map(({ label, token }) => (
          <div key={token} className="flex flex-col items-center gap-(--space-12)">
            <div
              className="bg-(--bg-action-primary-idle) w-16 h-16"
              style={{ borderRadius: `var(${token})` }}
            />
            <div className="flex flex-col items-center gap-(--space-4)">
              <span
                className="text-(--text-surface-base)"
                style={{ fontSize: 'var(--label-lg-size)', fontWeight: 'var(--label-lg-weight)' }}
              >
                {label}
              </span>
              <span
                className="text-(--text-surface-subtle)"
                style={{ fontSize: 'var(--label-md-size)' }}
              >
                {token}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Shell ────────────────────────────────────────────────────────────────────

function ShellSection() {
  return (
    <div className="min-h-full" />
  )
}

// ─── Doc app (needs router context for Link in GlobalHeader/Breadcrumb) ───────

function DocContent() {
  const [activeSection, setActiveSection] = useState<Section>('Typography')
  const [theme, setTheme] = useState<Theme>('minerva')

  const switchTheme = (t: Theme) => {
    setTheme(t)
    document.documentElement.setAttribute('data-theme', t)
  }

  const headerActions = (
    <ButtonGroup>
      {(['minerva', 'evolution'] as Theme[]).map((t) => (
        <Button
          key={t}
          variant="inverse"
          onClick={() => switchTheme(t)}
          style={theme === t ? { borderColor: 'var(--text-action-inverse-idle)' } : undefined}
        >
          {t}
        </Button>
      ))}
    </ButtonGroup>
  )

  const sideNavContent = (
    <div className="flex flex-col gap-(--space-4)">
      {SECTIONS.map((section) => (
        <SideNavItem
          key={section}
          label={section}
          onClick={() => setActiveSection(section)}
          active={activeSection === section}
        />
      ))}
    </div>
  )

  return (
    <AppLayout
      appName="Documentation"
      headerActions={headerActions}
      breadcrumbs={[{ label: 'Home', }, { label: 'Documentation Module', href: '/' }, { label: activeSection }]}
      sideNavContent={sideNavContent}
      title='Documentation Module'
    >
      {activeSection === 'Typography' && <TypographySection />}
      {activeSection === 'Colors'     && <ColorsSection />}
      {activeSection === 'Spacing'    && <SpacingSection />}
      {activeSection === 'Radius'     && <RadiusSection />}
      {activeSection === 'Button'     && <ButtonSection />}
      {activeSection === 'Shell'      && <ShellSection />}
    </AppLayout>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

function App() {
  return (
    <HashRouter>
      <DocContent />
    </HashRouter>
  )
}

export default App
