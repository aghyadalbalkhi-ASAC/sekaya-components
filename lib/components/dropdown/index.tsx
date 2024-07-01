import { Dropdown as AntdDropdown, DropdownProps } from "antd";
import cx from "classnames";
import React from "react";
import { useIntl } from "react-intl";

export const Dropdown: React.FC<DropdownProps> = ({
  children,
  menu,
  ...props
}) => {
  const { locale } = useIntl();
  return (
    <AntdDropdown
      {...props}
      menu={{
        ...menu,
        className: cx(menu?.className, {
          "text-end": locale === "ar",
          "text-start": locale === "en",
        }),
      }}
    >
      {children}
    </AntdDropdown>
  );
};
