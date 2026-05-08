import { ReactNode } from 'react';
export interface ButtonGroupProps {
    /**
     * Pass buttons in left-to-right visual order.
     *
     * Right-aligned group (e.g. action bar, dialog footer):
     *   tertiary → secondary → primary  (primary is rightmost / most prominent)
     *
     * Left-aligned group (e.g. toolbar, inline actions):
     *   primary → secondary → tertiary  (primary is leftmost / most prominent)
     *
     * The group itself is layout-neutral — use className or a parent flex
     * container with justify-end / justify-start to control alignment.
     */
    children: ReactNode;
    className?: string;
}
export declare function ButtonGroup({ children, className }: ButtonGroupProps): import("react/jsx-runtime").JSX.Element;
