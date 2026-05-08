import { ReactNode } from 'react';
import { BreadcrumbItem } from '../Breadcrumb';
export interface ActionBarProps {
    /** Breadcrumb trail — always present */
    breadcrumbs: BreadcrumbItem[];
    /** Page / module title — optional */
    title?: string;
    /**
     * When provided, renders a secondary "← Back" button to the left of the title.
     * Use this for detail views (e.g. case level).
     */
    onBackClick?: () => void;
    /**
     * Optional second row of content beneath the title row.
     * Hidden when not provided.
     */
    secondaryContent?: ReactNode;
    /**
     * Action buttons rendered on the far right, aligned to the top of the title row.
     * Wrap in <ButtonGroup> with primary rightmost.
     */
    actions?: ReactNode;
    className?: string;
}
export declare function ActionBar({ breadcrumbs, title, onBackClick, secondaryContent, actions, className, }: ActionBarProps): import("react/jsx-runtime").JSX.Element;
