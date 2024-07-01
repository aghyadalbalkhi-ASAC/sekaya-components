import { Meta, StoryObj } from "@storybook/react";
import { Dragger } from ".";

const meta: Meta<typeof Dragger> = {
  component: Dragger,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Dragger>;

export const Example: Story = {
  args: {
    multiple: false,
    beforeUpload(file) {
      const isMP4 = file.type === "video/mp4";
      const isWEBM = file.type === "video/webm";
      if (!isMP4 && !isWEBM) {
        alert("Only MP4/WEBM files are allowed.");
      }
      return isMP4 || isWEBM;
    },
  },
};

export default meta;
