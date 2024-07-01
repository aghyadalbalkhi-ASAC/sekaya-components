import { Select as AntdSelect, SelectProps } from "antd";
import React from "react";

export const Select: React.FC<SelectProps> = ({ options, ...props }) => {
  const updatedOptions = options?.map((option) => {
    if (typeof option.label === "string") {
      return {
        ...option,
        label: (
          <span className="font-semibold text-midnightBlue">
            {option.label}
          </span>
        ),
      };
    } else {
      return option;
    }
  });
  return (
    <div className="border-[1px] border-gainsboro border-solid font-semibold rounded-xl py-[10px] px-[5px]">
      <AntdSelect
        {...props}
        options={updatedOptions}
        className="w-full"
        variant="borderless"
        popupClassName="bg-ghostWhite"
      />
    </div>
  );
};
