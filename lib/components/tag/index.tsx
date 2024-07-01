import { Tag as AntdTag, TagProps } from "antd";
import classNames from "classnames";
import React from "react";

export const Tag: React.FC<TagProps> = ({ children, className, ...props }) => {
  return (
    <AntdTag
      {...props}
      className={classNames(
        className,
        "flex items-center justify-center border-0 rounded-md p-2 font-medium text-xs text-center"
      )}
    >
      {children}
    </AntdTag>
  );
};
