import { Space, Typography, theme } from "antd";
import classNames from "classnames";
import React from "react";
import DashboardIcon from "../../icons/dashboard-icon";
import { TextProps } from "antd/es/typography/Text";
import { libTheme } from "../../theme";

export interface SideMenuItemProps {
  key: number | string;
  icon?: React.ReactElement<{ color?: string }>;
  content: React.ReactElement<TextProps> | string;
  onClick?: () => void;
  className?: string;
  highlighted?: boolean;
  collapsed?: boolean;
}

export const SideMenuItem: React.FC<SideMenuItemProps> = ({
  icon = <DashboardIcon />,
  content,
  onClick,
  className,
  highlighted,
  collapsed,
}) => {
  const childrenClassNames = classNames(
    "text-sm leading-none  text-nowrap",
    {
      "text-dodgerBlue": highlighted,
      "font-bold": highlighted,
    },
    typeof content === "string" ? null : content.props.className
  );

  const updatedIcon = React.cloneElement(icon, {
    color: highlighted
      ? theme.getDesignToken(libTheme).colorPrimary
      : "#64748B",
  });

  const updatedChildren =
    typeof content === "string"
      ? React.cloneElement(
          <Typography.Text className={childrenClassNames}>
            {content}
          </Typography.Text>
        )
      : React.cloneElement(content, {
          ...content.props,
          className: childrenClassNames,
        });
  return (
    <Space
      size={16}
      onClick={onClick}
      className={classNames(
        "w-full leading-[0px] py-3 px-4 rounded-xl hover:cursor-pointer transition-colors duration-300 hover:bg-ghostWhite",
        {
          "bg-ghostWhite": highlighted,
        },
        className
      )}
    >
      {updatedIcon}
      {!collapsed && updatedChildren}
    </Space>
  );
};
