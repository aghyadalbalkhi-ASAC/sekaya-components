import { Meta, StoryObj } from "@storybook/react";
import { Steps } from ".";
import { FormattedMessage } from "react-intl";

const meta: Meta<typeof Steps> = {
  component: Steps,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Steps>;

export const Example: Story = {
  args: {
    items: [
      {
        title: <FormattedMessage id="instructions" />,
      },
      {
        title: <FormattedMessage id="interview_questions" />,
      },
      {
        title: <FormattedMessage id="upload_interview" />,
      },
      {
        title: <FormattedMessage id="confirm_and_save" />,
      },
    ],
  },
};

export default meta;
