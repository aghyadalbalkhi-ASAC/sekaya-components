import { Meta, StoryObj } from "@storybook/react";
import { ProgressCircleFloat } from ".";
import { theme } from "antd";

const meta: Meta<typeof ProgressCircleFloat> = {
  component: ProgressCircleFloat,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof ProgressCircleFloat>;

export const Example: Story = {
  args: {
    percent: 100,
    strokeColor: theme.getDesignToken().colorSuccess,
    strokeWidth: 8,
    size: 80,
    text: <span className="text-midnightBlue text-base font-semibold">manager</span>,
    format: (percent) => (
      <span className="text-mediumSeaGreen">{percent}%</span>
    ),
  },
};

export default meta;
