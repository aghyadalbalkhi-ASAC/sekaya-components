import { Meta, StoryObj } from "@storybook/react";
import { Progress } from ".";

const meta: Meta<typeof Progress> = {
  component: Progress,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    percent: 90,
    size: "small",
    status: "success",
    format(percent) {
      return `Completion Percentage ${percent}%`;
    },
  },
};

export default meta;
