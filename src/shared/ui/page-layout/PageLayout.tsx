import type { Component, ComponentProps } from 'solid-js';

export const PageLayout: Component<ComponentProps<'div'>> = (props) => (
    <>
        <h1>Demos list</h1>
        {props.children}
    </>
);
