import React from "react";
import { Table as AntdTable, TableProps } from "antd";
import { AnyObject } from "antd/es/_util/type";
import classNames from "classnames";

const TableHeaderWrapper = ({ children }: { children: React.ReactNode }) => {
  return <thead>{children}</thead>;
};

const TableHeaderRow = ({ children }: { children: React.ReactNode }) => {
  return <tr>{children}</tr>;
};

const TableHeaderCell = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <th
      className={classNames(
        className,
        "bg-ghostWhite text-steelBlue font-medium text-base text-start py-5 px-3 first:!rounded-s-xl last:!rounded-e-xl"
      )}
    >
      {children}
    </th>
  );
};

const TableBodyWrapper = ({ children }: { children: React.ReactNode }) => {
  return <tbody className="bg-white">{children}</tbody>;
};

const TableBodyRow = ({ children }: { children: React.ReactNode }) => {
  return (
    <tr className="border-0 border-b-[1px] border-solid border-b-aliceBlue last:border-b-0">
      {children}
    </tr>
  );
};

const TableBodyCell = ({ children }: { children: React.ReactNode }) => {
  return <td className="py-8 px-3 font-semibold text-base">{children}</td>;
};

const TableTable = ({ children }: { children: React.ReactNode }) => {
  return <table className="bg-white !border-collapse">{children}</table>;
};

export const Table: React.FC<TableProps<AnyObject>> = (props) => {
  return (
    <AntdTable
      {...props}
      components={{
        table: TableTable,
        header: {
          wrapper: TableHeaderWrapper,
          row: TableHeaderRow,
          cell: TableHeaderCell,
        },
        body: {
          wrapper: TableBodyWrapper,
          row: TableBodyRow,
          cell: TableBodyCell,
        },
      }}
    />
  );
};
