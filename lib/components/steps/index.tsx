import classNames from "classnames";
import React, { useEffect, useState } from "react";

interface StepsProps {
  className?: string;
  initial?: number;
  current?: number;
  onChange?: (key: number) => void;
  items: Array<{
    title: React.ReactNode | string;
  }>;
}

export const Steps: React.FC<StepsProps> = ({
  className,
  initial = 1,
  current,
  onChange,
  items,
}) => {
  const [state, setState] = useState(initial);

  useEffect(() => {
    if (current) {
      setState(current);
    }
  }, [current, setState]);

  const handleOnChange = (key: number) => {
    setState(key);

    onChange && onChange(key);
  };

  return (
    <div className={classNames(className, "flex font-sans")}>
      {items.map((item, index) => {
        const step = index + 1;
        return (
          <div
            key={step}
            className={classNames(
              "relative flex-1 flex flex-col gap-y-2 items-center after:absolute after:top-4 after:-translate-y-1/2 after:start-1/2 after:content-[''] after:border-solid after:w-full after:border-b-2 after:last:content-none",
              {
                "after:border-gainsboro": step >= state,
                "after:border-dodgerBlue": step < state,
              }
            )}
          >
            <span
              onClick={() => handleOnChange(step)}
              className={classNames(
                "relative z-20 flex justify-center items-center text-white border-solid border border-ghostWhite font-bold rounded-full h-8 w-8  hover:cursor-pointer",
                {
                  "bg-gainsboro": step > state,
                  "bg-dodgerBlue": step <= state,
                }
              )}
            >
              {step}
            </span>
            <span className="text-center">{item.title}</span>
          </div>
        );
      })}
    </div>
  );
};
