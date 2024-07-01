import { Typography } from "antd";
import classNames from "classnames";
import React from "react";

interface TimelineHorizontalProps {
  items: {
    key: string;
    label: React.ReactElement | string;
    done?: boolean;
  }[];
}

export const TimelineHorizontal: React.FC<TimelineHorizontalProps> = ({
  items = [],
}) => {
  return (
    <div className="relative">
      <div className="flex justify-between">
        {items.map((item, i) => (
          <div key={item.key} className="flex flex-col items-center gap-y-3">
            {typeof item.label === "string" ? (
              <Typography.Text className="font-semibold text-xs">
                {item.label}
              </Typography.Text>
            ) : (
              React.cloneElement(item.label, {
                className: classNames([
                  item.label.props.className,
                  "font-semibold text-xs",
                ]),
              })
            )}
            <div
              className={classNames("flex w-full", {
                "justify-center": i > 0 && i < items.length - 1,
                "justify-start before:relative before:z-10 before:block before:bg-white before:h-full before:w-[calc(50%-8px)] before:content-['']":
                  i === 0,
                "justify-end after:relative after:z-10 after:block after:bg-white after:h-full after:w-[calc(50%-8px)] after:content-['']":
                  i === items.length - 1,
              })}
            >
              <div
                className={classNames("relative z-10 rounded-full w-4 h-4 ", {
                  "bg-gray-400": !item.done,
                  "bg-mediumSeaGreen": item.done,
                })}
              />
            </div>
          </div>
        ))}
      </div>
      <div
        className={`w-full h-[1px] absolute bottom-2 bg-center bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTUzIiBoZWlnaHQ9IjEiIHZpZXdCb3g9IjAgMCA1NTMgMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGxpbmUgeTE9Ii0wLjUiIHgyPSI1NTIuNjQ1IiB5Mj0iLTAuNSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgNTUyLjkxNSAwLjk5OTUxMikiIHN0cm9rZT0iIzk0QTNCOCIgc3Ryb2tlLWRhc2hhcnJheT0iMiAyIi8+PC9zdmc+")]`}
      />
    </div>
  );
};
