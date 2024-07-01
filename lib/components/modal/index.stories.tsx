import { Meta, StoryObj } from "@storybook/react";
import { Modal } from ".";
import { Avatar, Button as AntdButton, Typography } from "antd";
import { Button } from "../button";
import UserIcon from "../../icons/user-icon";
import UploadOutlinedIcon from "../../icons/upload-outlined-icon";

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Modal>;

export const Example: Story = {
  args: {
    title: (
      <span className="text-lg font-bold">
        Upload personal picture
      </span>
    ),
    footer: null,
    open: true,
    width: 613,
  },
  render: (args) => {
    return (
      <Modal {...args}>
        <div className="flex flex-col gap-y-8">
          <Typography.Text className="text-slateGray font-semibold max-w-[560px]">
            Should wear saudi uniform
          </Typography.Text>
          <div className="flex flex-col gap-y-12 items-center justify-center">
            <Avatar
              className="flex items-center justify-center"
              size={184}
              icon={<UserIcon />}
            />
            <Button
              className="flex items-center gap-x-[10px] min-h-[32px]"
              type="primary"
            >
              Upload personal picture from your device
              <UploadOutlinedIcon />
            </Button>
            <div className="flex gap-x-4">
              <Button type="primary">Save as personal picture</Button>
              <AntdButton type="link">Cancel</AntdButton>
            </div>
          </div>
        </div>
      </Modal>
    );
  },
};

export default meta;
