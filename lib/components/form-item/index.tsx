import { Form as AntdForm, FormItemProps } from "antd";
import classNames from "classnames";
import React from "react";

export const FormItem: React.FC<FormItemProps> = ({
  name,
  label,
  labelCol,
  className,
  children,
  messageVariables,
  ...props
}) => {
  return (
    <AntdForm.Item
      {...props}
      name={name}
      className={classNames(className, "text-sm font-bold mb-0")}
      label={label && <span className="text-sm">{label}</span>}
      labelCol={{
        ...labelCol,
        className: classNames(labelCol?.className, "!pb-4"),
      }}
      messageVariables={{
        name: typeof label === "string" ? label : name,
        ...messageVariables,
      }}
    >
      {children}
    </AntdForm.Item>
  );
};
