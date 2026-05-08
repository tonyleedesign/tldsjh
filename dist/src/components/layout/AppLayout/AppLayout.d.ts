import { ReactNode } from 'react';
import { BreadcrumbItem } from '../../navigation/Breadcrumb';
export interface AppLayoutProps {
    /** Which header to render — defaults to "minerva" */
    variant?: 'minerva' | 'evolution';
    /** Logo element — pass any ReactNode (img, svg, component). Omit to show no logo. */
    logo?: ReactNode;
    /** Module or app name shown next to the logo */
    appName?: string;
    /** Optional content rendered before the bell icon — available in both variants */
    headerActions?: ReactNode;
    /** Called when the notifications icon is clicked */
    onNotificationsClick?: () => void;
    /** Called when the account button is clicked (Minerva only) */
    onAccountClick?: () => void;
    /** Label for the account button (Minerva only) — defaults to "Account" */
    accountLabel?: string;
    /** Called when the AI assistant icon is clicked (Evolution only) */
    onAiClick?: () => void;
    /** Called when the keyboard shortcuts icon is clicked (Evolution only) */
    onKeyboardClick?: () => void;
    /** Breadcrumb trail */
    breadcrumbs: BreadcrumbItem[];
    /** Page / module title */
    title?: string;
    /** When provided, renders a ← Back button to the left of the title */
    onBackClick?: () => void;
    /** Optional second row of content beneath the title row */
    secondaryContent?: ReactNode;
    /** Action buttons for the far right of the ActionBar */
    actions?: ReactNode;
    /** Nav items rendered inside the SideNav when expanded */
    sideNavContent?: ReactNode;
    /** Initial open state of the SideNav — defaults to true */
    defaultSideNavOpen?: boolean;
    children?: ReactNode;
    className?: string;
}
export declare function AppLayout({ variant, logo, appName, onNotificationsClick, onAccountClick, headerActions, accountLabel, onAiClick, onKeyboardClick, breadcrumbs, title, onBackClick, secondaryContent, actions, sideNavContent, defaultSideNavOpen, children, className, }: AppLayoutProps): import("react/jsx-runtime").JSX.Element;
