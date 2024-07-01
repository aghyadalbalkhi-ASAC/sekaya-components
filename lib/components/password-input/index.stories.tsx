import { Meta, StoryObj } from "@storybook/react";
import { PasswordInput } from ".";

const meta: Meta<typeof PasswordInput> = {
  component: PasswordInput,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof PasswordInput>;

export const Example: Story = {};

export const Prefix: Story = {
  args: {
    prefix: "SA",
  },
};

export default meta;
