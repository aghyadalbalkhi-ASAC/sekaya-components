import { Meta, StoryObj } from "@storybook/react";
import { ResultPopup } from ".";
import { Button } from "../button";
import { FormattedMessage } from "react-intl";

const meta: Meta<typeof ResultPopup> = {
  component: ResultPopup,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof ResultPopup>;

export const Example: Story = {
  args: {
    status: "success",
    extra: [
      <Button key="next" type="primary" className="py-4 w-full">
        <FormattedMessage id="next" />
      </Button>,
    ],
    title: "Title Here",
    subtitle: "Subtitle Here",
    open: true,
    width: 484,
  },
};

export default meta;
