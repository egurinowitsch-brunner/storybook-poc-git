import { Meta, StoryObj } from "@storybook/react";
import { TitleDescription } from './titleDescription'; 

const meta: Meta<typeof TitleDescription> = {
    title: 'Components/TitleDescription',
    component: TitleDescription,
    tags: ['autodocs'],
    argTypes: {
      titleColor: {
        control: 'color',
      },
    },
  };

export default meta;
type Story = StoryObj<typeof TitleDescription>;

export const TextDivider: Story = {
    args: {
     title: "This is title",
     description: "this is a description"
    },
  };

