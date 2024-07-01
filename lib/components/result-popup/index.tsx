import { Modal, ModalProps, Typography } from "antd";
import SuccessIcon from "../../icons/success-icon";
import FailedIcon from "../../icons/failed-icon";
import React from "react";

interface ResultPopupProps extends ModalProps {
  status?: "success" | "error";
  title: React.ReactElement | string;
  subtitle?: React.ReactElement | string;
  extra?: React.ReactNode[];
}

export const ResultPopup: React.FC<ResultPopupProps> = ({
  status = "success",
  title,
  subtitle,
  extra,
  classNames,
  ...props
}) => {
  const updatedTitle =
    typeof title === "string" ? (
      <Typography.Text className="font-bold text-2xl m-0">
        {title}
      </Typography.Text>
    ) : (
      title
    );

  const updatedSubtitle =
    typeof subtitle === "string" ? (
      <Typography.Text className="text-sm font-normal m-0">
        {subtitle}
      </Typography.Text>
    ) : (
      subtitle
    );

  return (
    <Modal
      {...props}
      classNames={{ ...classNames, content: "!p-10 !rounded-2xl" }}
      footer={null}
      closeIcon={null}
    >
      <div className="flex flex-col items-center gap-y-8">
        {status === "success" ? <SuccessIcon /> : <FailedIcon />}
        <div className="flex flex-col items-center gap-y-2">
          {updatedTitle}
          {subtitle && updatedSubtitle}
        </div>
        {extra?.map((element) => element)}
      </div>
    </Modal>
  );
};
