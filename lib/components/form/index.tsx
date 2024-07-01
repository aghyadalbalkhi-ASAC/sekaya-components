import { Form as AntdForm, FormProps } from "antd";
import cx from "classnames";
import React from "react";
import { useIntl } from "react-intl";

export const Form: React.FC<FormProps> = ({
  className,
  children,
  validateMessages,
  ...props
}) => {
  const { formatMessage } = useIntl();
  const customClassName = "flex flex-col gap-y-8";
  return (
    <AntdForm
      {...props}
      validateMessages={{
        required: formatMessage({
          id: "field_is_required",
        }),
        ...validateMessages,
      }}
      className={cx([className, customClassName])}
    >
      <>{children}</>
    </AntdForm>
  );
};
