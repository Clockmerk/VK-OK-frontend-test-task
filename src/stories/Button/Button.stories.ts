import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/ui/Button/button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    style: {
      options: ['primary', 'secondary'],
    },

    size: {
      options: ['28', '36', '56'],
    },
    state: {
      options: ['enabled', 'pressed', 'loading', 'disabled'],
    },
    counter: {
      control: {
        type: 'boolean',
      },
    },
    focused: {
      control: {
        type: 'boolean',
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Click me',
    style: 'primary',
    size: '28',
    state: 'enabled',
    counter: false,
    focused: false,
    children: null,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    style: 'secondary',
    size: '36',
    state: 'pressed',
    counter: true,
    focused: false,
    children: 'Компонент',
  },
};

export const Loading: Story = {
  args: {
    label: 'Button',
    style: 'primary',
    size: '56',
    state: 'loading',
    counter: false,
    focused: true,
    children: null,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    style: 'secondary',
    size: '36',
    state: 'disabled',
    counter: false,
    focused: true,
    children: null,
  },
};
