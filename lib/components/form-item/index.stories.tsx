import { Meta, StoryObj } from "@storybook/react";
import { FormItem } from ".";
import { Input } from "../input";
import { FormattedMessage } from "react-intl";
import { Form } from "../form";

const meta: Meta<typeof FormItem> = {
  component: FormItem,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof FormItem>;

export const Example: Story = {
  args: {
    name: "foo",
    label: <FormattedMessage id="example" />,
  },
  render(args) {
    return (
      <Form layout="vertical">
        <FormItem {...args}>
          <Input />
        </FormItem>
      </Form>
    );
  },
};

export default meta;
