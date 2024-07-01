import { Meta, StoryObj } from "@storybook/react";
import { Select } from ".";

const meta: Meta<typeof Select> = {
  component: Select,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Select>;

export const Example: Story = {
  args: {
    options: [
      {
        label: "foo",
        value: "bar",
      },
    ],
  },
};

export default meta;
