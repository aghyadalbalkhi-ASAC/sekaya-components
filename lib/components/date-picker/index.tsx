import { DatePicker as AntdDatePicker, DatePickerProps } from "antd";
import classNames from "classnames";
import React from "react";

export const DatePicker: React.FC<DatePickerProps> = (props) => {
  return (
    <div className="border-[1px] border-gainsboro border-solid rounded-xl py-[10px] px-[5px]">
      <AntdDatePicker
        {...props}
        variant="borderless"
        className="w-full"
        rootClassName="font-bold"
        panelRender={(origPanel) => <div className="bg-white">{origPanel}</div>}
        inputRender={({ className, ...props }) => (
          <input
            {...props}
            className={classNames(
              className,
              "font-semibold !text-midnightBlue"
            )}
          />
        )}
      />
    </div>
  );
};
