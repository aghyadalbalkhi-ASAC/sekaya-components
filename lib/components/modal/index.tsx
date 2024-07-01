import { Button, Modal as AntdModal, ModalProps } from "antd";
import React from "react";
import { useIntl } from "react-intl";
import CloseOutlinedIcon from "../../icons/close-outlined-icon";
import cx from "classnames";

export const Modal: React.FC<ModalProps> = ({
  title,
  children,
  classNames,
  onCancel,
  open,
  ...props
}) => {
  const { locale } = useIntl();

  const handleClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onCancel && onCancel(e);
  };

  return (
    <AntdModal
      {...props}
      open={open}
      closeIcon={null}
      title={
        <div
          className="flex justify-between items-center"
          dir={locale === "ar" ? "rtl" : "ltr"}
        >
          {title}
          <Button
            className="bg-ghostWhite hover:!bg-ghostWhite ms-auto"
            type="text"
            onClick={handleClose}
            icon={<CloseOutlinedIcon />}
          />
        </div>
      }
      classNames={{
        ...classNames,
        header: cx(
          classNames?.header,
          "!px-6 !pt-[18px] !pb-[15px] !m-0 !border-b !border-solid !border-0 !border-aliceBlue"
        ),
        content: cx(classNames?.content, "!p-0 !rounded-xl"),
        body: cx(classNames?.body, "!px-6 !pt-4 !pb-8"),
        footer: cx(
          classNames?.footer,
          "!px-6 !pt-6 !pb-7 !border-t !border-solid !border-0 !border-aliceBlue"
        ),
      }}
    >
      <div dir={locale === "ar" ? "rtl" : "ltr"}>{children}</div>
    </AntdModal>
  );
};
