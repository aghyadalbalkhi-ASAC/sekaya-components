import { Space } from "antd";
import { SideMenuItem, SideMenuItemProps } from "./menu-item";
import React from "react";
import classNames from "classnames";

interface SideMenuProps {
  items: SideMenuItemProps[];
  footerItems?: SideMenuItemProps[];
  collapsed?: boolean;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  items,
  footerItems,
  collapsed,
}) => {
  return (
    <div
      className={classNames([
        "px-3 w-full h-full flex flex-col gap-y-2 overflow-hidden",
        { "!px-2 justify-center items-center": collapsed },
      ])}
    >
      {items.map(({ onClick, className, ...item }) => (
        <SideMenuItem
          {...item}
          className={classNames([
            className,
            {
              "flex justify-center min-w-[45px]": collapsed,
            },
          ])}
          collapsed={collapsed}
          onClick={() => {
            onClick && onClick();
          }}
        />
      ))}
      <Space direction="vertical" className="mt-auto">
        {footerItems?.map(({ onClick, className, ...item }) => (
          <SideMenuItem
            {...item}
            className={classNames([
              className,
              {
                "flex justify-center min-w-[45px]": collapsed,
              },
            ])}
            collapsed={collapsed}
            onClick={() => {
              onClick && onClick();
            }}
          />
        ))}
      </Space>
    </div>
  );
};
