import React, { useEffect, useState } from "react";
import { RadioButton } from "../radio-button";
import { radioButtonGroupContext } from "./context";
import classNames from "classnames";

type Option = {
  label: React.ReactNode | string;
  value: string | number | null;
  className?: string;
};
interface RadioButtonGroupProps {
  value?: string | number | null;
  onChange?: (value: string | number | null) => void;
  defaultValue?: string | number | null;
  options: Option[];
  containerClassName?: string;
  renderOption?: (params: {
    state: string | number | null;
    option: Option;
    key: string;
    onChange?: (value: string | number | null) => void;
  }) => React.ReactNode;
}

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  options,
  defaultValue,
  value,
  onChange,
  containerClassName,
  renderOption,
}) => {
  const [state, setState] = useState(value || defaultValue || null);

  const handleChange: RadioButtonGroupProps["onChange"] = (value) => {
    setState(value);
    onChange && onChange(value);
  };

  useEffect(() => {
    if (defaultValue) {
      onChange && onChange(defaultValue);
    }
  }, [defaultValue, onChange]);

  return (
    <div
      className={classNames([
        containerClassName,
        "flex justify-center gap-x-8",
      ])}
    >
      <radioButtonGroupContext.Provider value={state}>
        {options.map((option, i) =>
          renderOption ? (
            renderOption({
              state,
              option,
              key: `${option.value}_${i}`,
              onChange: handleChange,
            })
          ) : (
            <RadioButton
              key={`${option.value}_${i}`}
              value={option.value}
              onChange={handleChange}
              className={option.className}
            >
              {option.label}
            </RadioButton>
          )
        )}
      </radioButtonGroupContext.Provider>
    </div>
  );
};
