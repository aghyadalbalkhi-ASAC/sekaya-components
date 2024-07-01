import { Progress as AntdProgress, ProgressProps, Row, Typography } from "antd";
import classNames from "classnames";

export const Progress: React.FC<ProgressProps> = ({
  percent = 0,
  className,
  format,
  showInfo = true,
  ...props
}) => {
  return (
    <Row justify="end">
      <Typography.Text
        className={classNames("mb-1 font-medium text-xs leading-[18px]")}
      >
        {showInfo && (format ? format(percent) : `${percent}%`)}
      </Typography.Text>
      <AntdProgress
        {...props}
        percent={percent}
        showInfo={false}
        className={classNames(className, "m-0 leading-[0px]")}
      />
    </Row>
  );
};
