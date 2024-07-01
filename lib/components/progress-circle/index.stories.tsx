import { Meta, StoryObj } from "@storybook/react";
import { ProgressCircle } from ".";
import { theme } from "antd";

const meta: Meta<typeof ProgressCircle> = {
  component: ProgressCircle,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof ProgressCircle>;

export const Example: Story = {
  args: {
    percent: 65,
    strokeColor: theme.getDesignToken().colorSuccess,
    strokeWidth: 11,
    format: (percent) => (
      <span className="text-semibold text-slateGray align-middle">
        {percent}%
      </span>
    ),
  },
};

export default meta;
