import { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Input>;

export const Example: Story = {
  args: {
    placeholder: "Enter",
  },
};

export const Prefix: Story = {
  args: {
    prefix: "SA",
  },
};

export const Password: Story = {
  args: {
    isPassword: true,
  },
};

export default meta;
