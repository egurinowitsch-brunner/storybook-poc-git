import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';
import { Button } from '../Button/Button';

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    titleTextColor: {
        control: 'color'
    },
    descriptionTextColor: {
        control: 'color'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const HeroStory: Story = {
    args: {
      textPosition: true,
      primaryBackgroundColor: true,
      title: 'Insurance for any point in life',
      description: 'Point Insurance Agency specializes in auto, home, and life insurance in Plover, Wisconsin.'
    },
  };


