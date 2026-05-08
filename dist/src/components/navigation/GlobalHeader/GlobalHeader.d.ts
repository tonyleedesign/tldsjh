import { ReactNode } from 'react';
export interface GlobalHeaderProps {
    /** Which header layout to render — defaults to "minerva" */
    variant?: 'minerva' | 'evolution';
    /** Logo element — pass any ReactNode (img, svg, component). Omit to show no logo. */
    logo?: ReactNode;
    /** Module or app name */
    appName?: string;
    /** Called when the menu icon is clicked */
    onMenuClick?: () => void;
    /** Called when the bell notification icon is clicked */
    onNotificationsClick?: () => void;
    /** Optional content rendered before the bell icon — available in both variants */
    headerActions?: ReactNode;
    /** Called when the account button is clicked (Minerva only) */
    onAccountClick?: () => void;
    /** Label for the account button (Minerva only) — defaults to "Account" */
    accountLabel?: string;
    /** Called when the AI assistant icon is clicked (Evolution only) */
    onAiClick?: () => void;
    /** Called when the keyboard shortcuts icon is clicked (Evolution only) */
    onKeyboardClick?: () => void;
    className?: string;
}
export declare function GlobalHeader({ variant, logo, appName, onMenuClick, onNotificationsClick, headerActions, onAccountClick, accountLabel, onAiClick, onKeyboardClick, className, }: GlobalHeaderProps): import("react/jsx-runtime").JSX.Element;
