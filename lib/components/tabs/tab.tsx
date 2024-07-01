import React, { useContext } from "react";
import { TextProps } from "antd/es/typography/Text";
import { tabsContext } from "./context";
import classNames from "classnames";
import { Grid, Typography, theme } from "antd";
import { libTheme } from "../../theme";

export interface TabProps {
  className?: string;
  icon?: React.ReactElement<{ color?: string }>;
  count?: number;
  title: React.ReactElement<TextProps> | string;
  content?: React.ReactElement | string;
  checked?: boolean;
  onClick?: () => void;
}

export const Tab: React.FC<TabProps> = ({
  className,
  icon,
  count,
  title,
  onClick,
}) => {
  const screens = Grid.useBreakpoint();
  const isDesktop = screens.lg;
  const { selected, checked } = useContext(tabsContext);

  const updatedIcon =
    icon &&
    React.cloneElement(icon, {
      color: checked ? theme.getDesignToken(libTheme).colorSuccess : "#BDBDBD",
    });

  const updatedTitle =
    typeof title === "string"
      ? React.cloneElement(
          <Typography.Text
            className={classNames({
              "text-dodgerBlue font-semibold": selected || checked,
              "text-slateGray font-normal": !(selected || checked),
            })}
          >
            {title}
          </Typography.Text>
        )
      : React.cloneElement(title, {
          className: classNames(title.props.className, {
            "text-dodgerBlue font-semibold": selected || checked,
            "text-slateGray font-normal": !(selected || checked),
          }),
        });

  const TabMobile = () => {
    return (
      <div className="flex gap-x-1 min-w-max" onClick={onClick && onClick}>
        <div
          className={classNames([
            "flex items-center justify-center gap-x-[6px] rounded-full px-[22px] py-[10px]",
            { "bg-ghostWhite": selected },
            className,
          ])}
        >
          {count && (
            <div
              className={classNames([
                "flex justify-center items-center rounded-full px-2 h-5",
                { "bg-dodgerBlue": selected },
                { "bg-gainsboro": !selected },
              ])}
            >
              <Typography.Text
                className={classNames([
                  "text-steelBlue text-[9px] leading-none",
                  {
                    "text-white": selected,
                  },
                ])}
              >
                {count}
              </Typography.Text>
            </div>
          )}
          {updatedTitle}
        </div>
      </div>
    );
  };

  const TabDesktop = () => {
    return (
      <div
        className={classNames([
          "relative py-2 pb-7 px-4 flex gap-x-2 hover:cursor-pointer min-w-max items-center",
          className,
        ])}
        onClick={onClick && onClick}
      >
        {updatedIcon}
        {count && (
          <div
            className={classNames([
              "flex justify-center items-center rounded-full px-2 h-6",
              {
                "bg-dodgerBlue": selected,
                "bg-gainsboro": !selected,
              },
            ])}
          >
            <Typography.Text
              className={classNames([
                "text-steelBlue text-[10px]",
                { "text-white": selected },
              ])}
            >
              {count}
            </Typography.Text>
          </div>
        )}
        {updatedTitle}
        <div
          className={classNames(
            "absolute bottom-0 start-0 h-1 w-full rounded-full opacity-0 bg-dodgerBlue transition-opacity",
            {
              "!opacity-100": selected,
            }
          )}
        />
      </div>
    );
  };

  return isDesktop ? <TabDesktop /> : <TabMobile />;
};
