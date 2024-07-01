import { Input, InputProps } from "antd";
import cx from "classnames";
import React from "react";

export const PasswordInput: React.FC<InputProps> = ({
  className,
  classNames,
  ...props
}) => {
  const customClassName =
    "rounded-xl px-4 leading-none font-semibold !bg-transparent h-[56px] text-midnightBlue";

  return (
    <Input.Password
      {...props}
      className={cx(className, customClassName)}
      classNames={{
        ...classNames,
        affixWrapper: cx(classNames?.affixWrapper, "ps-4"),
        prefix: cx([classNames?.prefix, "pe-4 ps-1"]),
        suffix: cx(classNames?.suffix, "ps-4 pe-1"),
      }}
    />
  );
};
