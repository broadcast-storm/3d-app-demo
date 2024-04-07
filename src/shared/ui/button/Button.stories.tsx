import type { Meta, StoryObj } from 'storybook-solidjs';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Ui/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        size: { control: 'select', options: ['small', 'large'] },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        size: 'large',
        label: 'Primary Button',
    },
};

export const Large: Story = {
    args: {
        ...Primary.args,
        size: 'large',
        label: 'Large Button',
    },
};

export const Small: Story = {
    args: {
        ...Primary.args,
        size: 'small',
        label: 'Small Button',
    },
};
