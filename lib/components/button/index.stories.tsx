import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    type: {
      options: ["default", "primary"],
      control: { type: "radio" },
    },
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "BUTTON",
    type: "default",
  },
};

export const Primary: Story = {
  args: {
    children: "BUTTON",
    type: "primary",
  },
};

export const Disabled: Story = {
  args: {
    children: "BUTTON",
    type: "primary",
    disabled: true,
  },
};

export default meta;
