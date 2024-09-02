import { Button as AntdButton, ButtonProps } from "antd";
import classNames from "classnames";
import React from "react";

export const Button: React.FC<ButtonProps> = ({
  children,
  type = "default",
  danger = false,
  className,
  ...props
}) => {
  const isDefault = type === "default";
  const isPrimary = type === "primary";

  return (
    <AntdButton
      {...props}
      danger={danger}
      className={classNames(
        className,
        "rounded-lg h-auto shadow-none font-semibold",
        {
          "bg-white border border-deepSapphire": isDefault,
          "text-deepSapphire enabled:hover:!text-deepSapphire": isDefault,
          "bg-deepSapphire border-0": !danger && isPrimary,
          "text-white enabled:hover:!text-white": !danger && isPrimary,
          "bg-coral !text-white": danger,
        }
      )}
    >
      {children}
    </AntdButton>
  );
};
