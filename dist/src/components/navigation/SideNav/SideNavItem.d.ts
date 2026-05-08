import { ReactNode } from 'react';
export interface SideNavItemProps {
    label: string;
    /** Provide href for anchor-based navigation. Omit to use onClick state-based navigation. */
    href?: string;
    /** Used when href is omitted — switches the active section without routing */
    onClick?: () => void;
    /** Highlights the item as active */
    active?: boolean;
    /** Optional lozenge rendered on the far right */
    lozenge?: ReactNode;
    className?: string;
}
export declare function SideNavItem({ label, href, onClick, active, lozenge, className, }: SideNavItemProps): import("react/jsx-runtime").JSX.Element;
