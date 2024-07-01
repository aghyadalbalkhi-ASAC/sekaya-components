import { useEffect, useState } from "react";
import { Tab, TabProps } from "./tab";
import classNames from "classnames";
import { tabsContext } from "./context";

interface TabsProps {
  current?: string | number;
  items: ({ key: string | number } & TabProps)[];
  onChange?: (key: string | number) => void;
  className?: string;
  tabClassName?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  current,
  onChange,
  className,
  tabClassName,
}) => {
  const [selected, setSelected] = useState<string | number>();

  const reducedItems: { [key: string | number]: React.ReactElement } =
    items.reduce((prev, current) => {
      return {
        ...prev,
        [current.key]: current.content,
      };
    }, {});

  useEffect(() => {
    if (current) {
      setSelected(current);
    }
  }, [current, setSelected]);

  const handleOnChange = (key: string | number) => {
    setSelected(key);
    onChange && onChange(key);
  };

  return (
    <>
      <div
        className={classNames(
          className,
          "flex gap-x-1 lg:gap-x-0 bg-white overflow-x-auto scrollbar-hide"
        )}
      >
        {items.map((item) => (
          <tabsContext.Provider
            key={item.key}
            value={{
              selected: selected === item.key,
              checked: item.checked || false,
            }}
          >
            <Tab
              className={item.className || tabClassName}
              icon={item.icon}
              count={item.count}
              title={item.title}
              onClick={() => handleOnChange(item.key)}
            />
          </tabsContext.Provider>
        ))}
      </div>
      {selected && reducedItems[selected]}
    </>
  );
};
