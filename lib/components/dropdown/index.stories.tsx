import { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from ".";
import { Button } from "../button";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Dropdown>;

export const Example: Story = {
  args: {
    menu: {
      items: [
        { key: 1, label: "item 1" },
        { key: 2, label: "item 2" },
      ],
    },
  },
  render({ ...args }) {
    return (
      <Dropdown {...args}>
        <Button>Show Menu</Button>
      </Dropdown>
    );
  },
};

export default meta;
