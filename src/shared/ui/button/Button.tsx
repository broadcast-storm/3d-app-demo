import type { Component, ComponentProps } from 'solid-js';

type Props = ComponentProps<'button'> & {
    label: string;
    size?: 'large' | 'small';
};

export const Button: Component<Props> = (props) => {
    return (
        <button class="px-4 py-2 rounded-md bg-slate-950 text-white">
            {props.label}
        </button>
    );
};
