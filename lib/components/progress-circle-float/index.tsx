import { ProgressProps } from "antd";
import React from "react";
import { ProgressCircle } from "../progress-circle";

interface ProgressCircleFloatProps extends Omit<ProgressProps, "type"> {
  text?: React.ReactNode | string;
}

export const ProgressCircleFloat: React.FC<ProgressCircleFloatProps> = ({
  format,
  percent,
  text,
  ...props
}) => {
  return (
    <div className="relative max-w-min h-min">
      <ProgressCircle percent={percent} format={() => text} {...props} />
      <div className="bg-ghostWhite max-h-3 flex items-center justify-center px-[2px] rounded absolute -bottom-[2px] left-1/2 -translate-x-1/2 text-[10px] font-semibold">
        {format ? format(percent) : percent + "%"}
      </div>
    </div>
  );
};
