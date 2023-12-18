import { Motion } from '@motionone/solid';
import type { Component, ComponentProps } from 'solid-js';

import { cn } from '@/shared/utils/styles';

type Props = ComponentProps<'button'> & {
    label: string;
    size?: 'large' | 'small';
};

export const Button: Component<Props> = (props) => {
    return (
        <Motion.button
            hover={{ scale: 1.05 }}
            press={{ scale: 0.9 }}
            class={cn(
                'px-4 py-2 rounded-md bg-slate-950 text-white',
                props.class,
            )}>
            {props.label}
        </Motion.button>
    );
};
