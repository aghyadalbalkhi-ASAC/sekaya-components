import { Meta, StoryObj } from "@storybook/react";
import { CheckList } from ".";
import { Typography } from "antd";
import classNames from "classnames";

const meta: Meta<typeof CheckList> = {
  component: CheckList,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof CheckList>;

export const Example: Story = {
  args: {
    items: [
      {
        content: (
          <Typography.Text
            className={classNames("text-slateGray", { "font-semibold": true })}
          >
            Personal Information
          </Typography.Text>
        ),
        rejected: true,
        onClick() {},
      },
      {
        content: (
          <Typography.Text className={classNames("text-slateGray", { "font-semibold": false })}>
            Bank Information
          </Typography.Text>
        ),
      },
      {
        content: (
          <Typography.Text className={classNames("text-slateGray", { "font-semibold": false })}>
            National Address
          </Typography.Text>
        ),
      },
    ],
  },
  render: (args) => {
    return <CheckList {...args} />;
  },
};

export default meta;
