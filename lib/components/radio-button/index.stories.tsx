import { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from ".";

const meta: Meta<typeof RadioButton> = {
  component: RadioButton,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof RadioButton>;

export const Example: Story = {
  args: {
    value: "foobar",
  },
  render(args) {
    return <RadioButton {...args}>Radio Button</RadioButton>;
  },
};

export default meta;
