import type { Meta, StoryObj } from '@storybook/react';
import { Counter } from '../../components/ui/Counter/counter';

const meta: Meta<typeof Counter> = {
  title: 'Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    style: {
      options: ['primary', 'secondary'],
    },
    size: {
      options: ['8', '12', '16', '20', '24'],
    },
    stroke: {
      options: [true, false],
    },
    quantity: {
      control: {
        type: 'text',
      },
    },
    pulse: {
      options: [true, false],
    },
    strokeColor: {
      control: {
        type: 'color',
      },
    },
  },

  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    style: 'primary',
    size: '8',
    stroke: false,
    quantity: '5',
    pulse: false,
    strokeColor: '',
  },
};

export const Secondary: Story = {
  args: {
    style: 'secondary',
    size: '20',
    stroke: true,
    quantity: '5',
    pulse: false,
    strokeColor: 'purple',
  },
};

export const Max: Story = {
  args: {
    style: 'primary',
    size: '24',
    stroke: false,
    quantity: '100',
    pulse: true,
    strokeColor: '',
  },
};

export const Pulse: Story = {
  args: {
    style: 'secondary',
    size: '20',
    stroke: false,
    quantity: '',
    pulse: false,
    strokeColor: '',
  },
};
