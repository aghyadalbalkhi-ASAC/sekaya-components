import { Input as AntdInput, InputProps as AntdInputProps } from "antd";
import cx from "classnames";
import React from "react";

interface InputProps extends AntdInputProps {
  isPassword?: boolean;
}

export const Input: React.FC<InputProps> = ({
  className,
  classNames,
  isPassword = false,
  ...props
}) => {
  const customClassName =
    "rounded-xl px-4 leading-none font-semibold !bg-transparent h-[56px] text-midnightBlue";

  const Component = isPassword ? AntdInput.Password : AntdInput;

  return (
    <Component
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
