import type { Meta, StoryObj } from 'storybook-solidjs';

import { Button } from './Button';

const meta = {
    title: 'Ui/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
        label: 'Primary Button',
    },
};

export const Secondary: Story = {
    args: {
        label: 'Secondary Button',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        label: 'Large Button',
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        label: 'Small Button',
    },
};
