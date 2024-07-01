import { Progress, ProgressProps } from "antd";
import classNames from "classnames";
import React from "react";

interface ProgressCircleProps extends Omit<ProgressProps, "type"> {
  containerClassName?: string;
}

export const ProgressCircle: React.FC<ProgressCircleProps> = ({
  containerClassName,
  className,
  ...props
}) => {
  return (
    <div
      className={classNames([
        containerClassName,
        "w-fit bg-gray-100 rounded-full",
      ])}
    >
      <Progress
        className={classNames([className, "flex items-center justify-center"])}
        trailColor="transparent"
        {...props}
        type="circle"
      />
    </div>
  );
};
