# Setup

Before writing any code, complete these steps in order.

---

## 1. Add the style import to `src/styles/index.css`

Open `src/styles/index.css` and add `@import '@make-kits/jh-ds/style.css';` as the first line:

```css
@import "@make-kits/jh-ds/style.css";
@import "./fonts.css";
@import "./tailwind.css";
```

It must be first — design tokens must load before Tailwind processes the components.

---

## 2. Set the theme (REQUIRED)

There is no `index.html` in this environment. Do not use `useEffect`. Add this line at the top of `src/app/App.tsx`, outside and above the component function:

```tsx
document.documentElement.setAttribute("data-theme", "minerva");
```

Two options:

- `'minerva'` — 16px base, Source Sans 3
- `'evolution'` — 14px base, Inter

---

## 3. Import components from the package

All components are available from a single import:

```tsx
import {
  AppLayout,
  SideNavItem,
  Button,
  ButtonGroup,
  Icon,
  Spinner,
  AddIcon,
  SearchIcon,
  DeleteIcon,
  EditIcon,
  // ...any other components or icons you need
} from '@make-kits/jh-ds'
```

Only import the components you actually use. See `components.md` for the full list.

---

## Starter template

Every page must use AppLayout. Use this as the base for `src/app/App.tsx`:

```tsx
import '@make-kits/jh-ds/style.css'
import { AppLayout, SideNavItem } from '@make-kits/jh-ds'

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
import { Button, ButtonGroup, AddIcon } from '@make-kits/jh-ds'

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
