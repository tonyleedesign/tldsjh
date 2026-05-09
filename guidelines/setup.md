# Setup

Before writing any code, complete these steps in order.

---

## 1. Copy the components into your project

The package does not export components for direct import. You must copy them into your local project first.

Read every file inside `node_modules/@make-kits/jh-ds/src/components/` and write each one to the same relative path under `src/components/`, preserving the full folder structure. Do the same for assets:

- `node_modules/@make-kits/jh-ds/src/components/` → `src/components/`
- `node_modules/@make-kits/jh-ds/src/assets/` → `src/assets/`

Do not skip files. Do not create re-export wrappers. Copy the source files exactly as they are.

---

## 2. Add the style import to `src/styles/index.css`

Open `src/styles/index.css` and add `@import '@make-kits/jh-ds/style.css';` as the first line:

```css
@import "@make-kits/jh-ds/style.css";
@import "./fonts.css";
@import "./tailwind.css";
```

It must be first — design tokens must load before Tailwind processes the components.

---

## 3. Set the theme (REQUIRED)

There is no `index.html` in this environment. Do not use `useEffect`. Add this line at the top of `src/app/App.tsx`, outside and above the component function:

```tsx
document.documentElement.setAttribute("data-theme", "minerva");
```

Two options:

- `'minerva'` — 16px base, Source Sans 3
- `'evolution'` — 14px base, Inter

---

## 4. Import components using local relative paths

All components are now in `src/components/`. Import from there — never from the package directly:

```tsx
import { AppLayout } from '../components/layout/AppLayout'
import { SideNavItem } from '../components/navigation/SideNav'
import { Button } from '../components/ui/Button'
import { ButtonGroup } from '../components/ui/ButtonGroup'
import { Icon, AddIcon, SearchIcon, DeleteIcon, EditIcon } from '../components/ui/Icon'
import { Spinner } from '../components/ui/Spinner'
```

Only import the components you actually use. See `components.md` for the full list.

---

## Starter template

Every page must use AppLayout. Use this as the base for `src/app/App.tsx`:

```tsx
import { AppLayout } from '../components/layout/AppLayout'
import { SideNavItem } from '../components/navigation/SideNav'

document.documentElement.setAttribute("data-theme", "minerva");

export default function App() {
  return (
    <AppLayout
      variant="minerva"
      appName="My App"
      breadcrumbs={[{ label: "Home" }]}
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
  );
}
```

---

## Adding page actions

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
