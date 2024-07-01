import { Meta, StoryObj } from "@storybook/react";
import { Tag } from ".";

const meta: Meta<typeof Tag> = {
  component: Tag,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Tag>;

export const Example: Story = {
  render: (args) => (
    <Tag {...args} color="success">
      Completed
    </Tag>
  ),
};

export default meta;
