import { Meta, StoryObj } from "@storybook/react";
import { SideMenu } from ".";
import DashboardIcon from "../../icons/dashboard-icon";
import { Layout, Typography } from "antd";
import AnalyticsIcon from "../../icons/analytics-icon";
import BriefcaseIcon from "../../icons/briefcase-icon";

const meta: Meta<typeof SideMenu> = {
  component: SideMenu,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof SideMenu>;

export const Example: Story = {
  args: {
    collapsed: true,
    items: [
      {
        key: "dashboard",
        icon: <DashboardIcon />,
        content: (
          <Typography.Text className="text-sm leading-none">
            Main
          </Typography.Text>
        ),
      },
      {
        key: "courses",
        icon: <BriefcaseIcon />,
        content: (
          <Typography.Text className="text-sm leading-none">
            Courses
          </Typography.Text>
        ),
      },
      {
        key: "reports",
        icon: <AnalyticsIcon />,
        content: (
          <Typography.Text className="text-sm leading-none">
            Reports
          </Typography.Text>
        ),
      },
    ],
  },
  render(args) {
    return (
      <Layout>
        <Layout.Sider
          className="!bg-white"
          collapsed={args.collapsed}
          collapsedWidth={64}
        >
          <SideMenu {...args} />
        </Layout.Sider>
      </Layout>
    );
  },
};

export default meta;
