# Setup

## 1. Set the theme (REQUIRED)

The design system uses CSS variables that only activate when `data-theme` is set on `<html>`. Without this, nothing will render correctly.

There is no `index.html` in this environment. Do not use `useEffect`. Instead, add this line at the top of `src/app/App.tsx`, outside and above the component function — it runs synchronously before the first render:

```tsx
document.documentElement.setAttribute('data-theme', 'minerva')
```

Two options:
- `'minerva'` — 16px base, Source Sans 3
- `'evolution'` — 14px base, Inter

---

## 2. Import styles

Open `src/styles/index.css` and add `@import '@make-kits/jh-ds/style.css';` as the first line:

```css
@import '@make-kits/jh-ds/style.css';
@import './fonts.css';
@import './tailwind.css';
```

It must be first — design tokens must load before Tailwind processes the components. Do not add this import to individual component files.

---

## 3. Copy components into your project

The component source files must live in your project at `src/components/`. They are in `src/components/` inside the package — not in `dist/`. Run this once:

```bash
cp -r node_modules/@make-kits/jh-ds/src/components src/components
```

After this, your project will have:

```
src/
  components/
    layout/
      AppLayout/
    navigation/
      SideNav/
      GlobalHeader/
      ActionBar/
      Breadcrumb/
    ui/
      Button/
      ButtonGroup/
      Icon/
      Spinner/
  styles/
    index.css
  app/
    App.tsx
```

---

## 4. Component imports

Always import components using relative paths from `src/components/` — never from the package directly:

```tsx
import { AppLayout } from '../components/layout/AppLayout'
import { SideNavItem } from '../components/navigation/SideNav'
import { Button } from '../components/ui/Button'
import { ButtonGroup } from '../components/ui/ButtonGroup'
import { AddIcon } from '../components/ui/Icon'
```

Only import the components you actually use.

---

## 5. Starter template

Use this as your base for every new page. Copy it to `src/app/App.tsx`:

```tsx
import '../styles/index.css'
import judiLogo from '../assets/judi-logo.svg'
import { AppLayout } from '../components/layout/AppLayout'
import { SideNavItem } from '../components/navigation/SideNav'

// Required: activates CSS variables before first render
document.documentElement.setAttribute('data-theme', 'minerva')

export default function App() {
  return (
    <AppLayout
      variant="minerva"
      logo={<img src={judiLogo} alt="Judi" className="h-full w-auto" />}
      appName="My App"
      breadcrumbs={[{ label: 'Home' }]}
      title="Dashboard"
      sideNavContent={
        <>
          <SideNavItem label="Home" active />
          <SideNavItem label="Settings" />
        </>
      }
    >
      {/* page content here */}
    </AppLayout>
  )
}
```

---

## Adding page actions

Use the `actions` prop for primary page-level actions — renders top-right in the action bar:

```tsx
import { Button } from '../components/ui/Button'
import { ButtonGroup } from '../components/ui/ButtonGroup'
import { AddIcon } from '../components/ui/Icon'

<AppLayout
  ...
  actions={
    <ButtonGroup>
      <Button variant="secondary">Export</Button>
      <Button variant="primary" leftIcon={AddIcon}>New Item</Button>
    </ButtonGroup>
  }
>
```

---

## Detail page (with back button)

Use `onBackClick` to render a ← Back button to the left of the title:

```tsx
import { useNavigate } from 'react-router'

const navigate = useNavigate()

<AppLayout
  ...
  breadcrumbs={[{ label: 'Home' }, { label: 'Cases', href: '/cases' }, { label: 'Case #1234' }]}
  title="Case #1234"
  onBackClick={() => navigate(-1)}
>
```
