import { Meta, StoryObj } from "@storybook/react";
import { AgGridTable } from ".";
import { GridApi, SetFilterParams } from "ag-grid-community";
import { Col, Row } from "antd";
import { Button } from "../button";
import { useState } from "react";

const meta: Meta<typeof AgGridTable> = {
  component: AgGridTable,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof AgGridTable>;

const someData = [
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
];

export const Example: Story = {
  args: {
    containerStyle: { height: 500 },
    columnDefs: [
      { headerName: "Status", field: "status" },
      {
        headerName: "Survey name",
        field: "survey_name",
      },
      {
        headerName: "Work starting date",
        field: "start_date",
        width: 250,
      },
      {
        headerName: "End date of employement",
        field: "end_date",
        width: 300,
      },
      { headerName: "Options", field: "x" },
    ],
    rowData: someData,
  },
};

export const ExportToExcel: Story = {
  args: {
    containerStyle: { height: 500 },
    columnDefs: [
      { headerName: "Status", field: "status" },
      {
        headerName: "Survey name",
        field: "survey_name",
      },
      {
        headerName: "Work starting date",
        field: "start_date",
        width: 250,
      },
      {
        headerName: "End date of employement",
        field: "end_date",
        width: 300,
      },
      { headerName: "Options", field: "x" },
    ],
    rowData: someData,
  },
  render(args) {
    const AgGridTableView = () => {
      const [gridApi, setGridApi] = useState<GridApi>();
      return (
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Button className="h-10" onClick={() => {
              gridApi?.exportDataAsExcel()
            }}>Export to Excel</Button>
          </Col>
          <Col span={24}>
            <AgGridTable {...args} onGridReady={(e) => setGridApi(e.api)} />
          </Col>
        </Row>
      );
    };

    return <AgGridTableView />;
  },
};

export const ServerSideData: Story = {
  args: {
    containerStyle: { height: 500 },
    columnDefs: [
      {
        headerName: "Status",
        field: "status",
        filter: true,
        filterParams: {
          values: (params) => {
            // simulating api call
            setTimeout(() => {
              params.success(["new", "pending"]);
            }, 2000);
          },
        } as SetFilterParams,
      },
      {
        headerName: "Survey name",
        field: "survey_name",
      },
      {
        headerName: "Work starting date",
        field: "start_date",
        width: 250,
      },
      {
        headerName: "End date of employement",
        field: "end_date",
        width: 300,
      },
      { headerName: "Options", field: "x" },
    ],
    rowModelType: "serverSide",
    serverSideDatasource: {
      async getRows(params) {
        // simulating api call
        setTimeout(() => {
          params.success({
            rowData: someData,
          });
        }, 3000);
      },
    },
  },
};

export default meta;
