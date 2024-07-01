import { Typography } from "antd";
import classNames from "classnames";
import { useContext } from "react";
import { radioButtonGroupContext } from "../radio-button-group/context";

interface RadioButtonProps {
  value: string | number | null;
  onChange?: (value: string | number | null) => void;
  children: React.ReactNode | string | number | null;
  className?: string;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  value,
  onChange,
  children,
  className,
}) => {
  const state = useContext(radioButtonGroupContext);

  const handleOnChange = () => {
    onChange && onChange(value);
  };

  return (
    <div
      className={classNames([
        className,
        "min-w-[94px] text-center rounded-lg px-4 py-2 hover:cursor-pointer",
        {
          "bg-ghostWhite": state !== value,
          "bg-lightBlue": state === value,
        },
      ])}
      onClick={handleOnChange}
    >
      <Typography.Text className="text-sm text-slateGray font-medium">
        {children}
      </Typography.Text>
    </div>
  );
};
