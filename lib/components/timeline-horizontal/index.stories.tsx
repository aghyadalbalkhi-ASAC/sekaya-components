import { Meta, StoryObj } from "@storybook/react";
import { TimelineHorizontal } from ".";

const meta: Meta<typeof TimelineHorizontal> = {
  component: TimelineHorizontal,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof TimelineHorizontal>;

export const Example: Story = {
  args: {
    items: [
      {
        key: "new_request",
        label: "New request",
        done: true,
      },
      {
        key: "auditing_and_conformity",
        label: "Auditing and conformity",
      },
      {
        key: "employees_relations",
        label: "Employees relations",
      },
      {
        key: "human_resource_management",
        label: "Human resource management",
      },
    ],
  },
};

export default meta;
