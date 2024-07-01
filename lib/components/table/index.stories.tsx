import { Meta, StoryObj } from "@storybook/react";
import { Table } from ".";
import { FormattedMessage } from "react-intl";

const meta: Meta<typeof Table> = {
  component: Table,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Table>;

export const Example: Story = {
  args: {
    pagination: false,
    columns: [
      { title: <FormattedMessage id="status" />, dataIndex: "status" },
      {
        title: <FormattedMessage id="survey_name" />,
        dataIndex: "survey_name",
      },
      {
        title: <FormattedMessage id="work_starting_date" />,
        dataIndex: "start_date",
      },
      {
        title: <FormattedMessage id="end_date_of_employement" />,
        dataIndex: "end_date",
      },
      { title: <FormattedMessage id="options" />, dataIndex: "x" },
    ],
    dataSource: [
      {
        id: 1,
        status: "foobar",
        survey_name: "foobar",
        start_date: "11 Aug 2023",
        end_date: "11 Aug 2023",
      },
      {
        id: 2,
        status: "foobar",
        survey_name: "foobar",
        start_date: "11 Aug 2023",
        end_date: "11 Aug 2023",
      },
      {
        id: 3,
        status: "foobar",
        survey_name: "foobar",
        start_date: "11 Aug 2023",
        end_date: "11 Aug 2023",
      },
      {
        id: 4,
        status: "foobar",
        survey_name: "foobar",
        start_date: "11 Aug 2023",
        end_date: "11 Aug 2023",
      },
    ],
  },
  render: (args) => {
    return <Table rowKey="id" {...args} />;
  },
};

export default meta;
