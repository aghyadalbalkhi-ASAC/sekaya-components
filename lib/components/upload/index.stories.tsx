import { Meta, StoryObj } from "@storybook/react";
import { Upload } from ".";
import { Button } from "../button";
import { Form } from "../form";
import { FormItem } from "../form-item";

const meta: Meta<typeof Upload> = {
  component: Upload,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Upload>;

export const Example: Story = {
  args: {
    multiple: false,
  },
  render(args) {
    return (
      <Form onFinish={(values) => console.log(values)}>
        <FormItem name="upload" noStyle>
          <Upload {...args} />
        </FormItem>
        <Button htmlType="submit" className="mt-4">
          Save
        </Button>
      </Form>
    );
  },
};

export const OnlyPNGAndJPGAllowed: Story = {
  args: {
    multiple: false,
    beforeUpload(file) {
      const isPNG = file.type === "image/png";
      const isJPG = file.type === "image/jpg";
      if (!isPNG && !isJPG) {
        alert("Only PNG/JPG files are allowed.");
      }
      return isPNG || isJPG;
    },
  },
  render(args) {
    return (
      <Form onFinish={(values) => console.log(values)}>
        <FormItem name="upload" noStyle>
          <Upload {...args} />
        </FormItem>
        <Button htmlType="submit" className="mt-4">
          Save
        </Button>
      </Form>
    );
  },
};

export default meta;
