import { A } from '@solidjs/router';
import type { Component, ComponentProps } from 'solid-js';

import { ROUTES } from '@/shared/config/routes';

export const PageLayout: Component<ComponentProps<'div'>> = (props) => (
    <div class="h-screen flex flex-col gap-2 justify-center items-center bg-slate-400">
        <h1 class="text-2xl">3D demo list</h1>
        <nav class="flex flex-row gap-2">
            <A href={ROUTES.MAIN} end activeClass="text-cyan-300">
                Home
            </A>
            <A href={ROUTES.ABOUT} activeClass="text-cyan-300">
                About
            </A>
            <A href={ROUTES.SETTINGS} activeClass="text-cyan-300">
                Settings
            </A>
        </nav>
        {props.children}
    </div>
);
