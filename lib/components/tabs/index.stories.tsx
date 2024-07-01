import { Meta, StoryObj } from "@storybook/react";
import { Tabs } from ".";
import CheckIcon from "../../icons/check-icon";
import { Row, Typography } from "antd";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Tabs>;

export const Example: Story = {
  args: {
    items: [
      {
        key: "personal_information",
        icon: <CheckIcon />,
        count: 243,
        title: <Typography.Text>Personal Information</Typography.Text>,
        content: (
          <Row justify="center" align="middle" className="h-full py-8">
            <Typography>personal information content here</Typography>
          </Row>
        ),
        checked: false,
      },
      {
        key: "bank_information",
        icon: <CheckIcon />,
        count: 32,
        title: <Typography.Text>Bank Information</Typography.Text>,
        content: (
          <Row justify="center" align="middle" className="h-full py-8">
            <Typography>bank information content here</Typography>
          </Row>
        ),
        checked: false,
      },
    ],
  },
};

export default meta;
