import { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from ".";

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof DatePicker>;

export const Example: Story = {};

export default meta;
