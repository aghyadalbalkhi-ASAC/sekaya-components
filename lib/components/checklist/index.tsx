import { Space } from "antd";
import CheckListItem, { CheckListItemProps } from "./checklist-item";

interface CheckListProps {
  checked?: CheckListItemProps["checked"];
  rejected?: CheckListItemProps['rejected'];
  onClick?: CheckListItemProps["onClick"];
  content: CheckListItemProps["children"];
}

export const CheckList = ({
  items,
  className,
}: {
  items: CheckListProps[];
  className?: string;
}) => {
  return (
    <Space direction="vertical" size={16} className={className}>
      {items.map(({ content, ...item }, index) => (
        <CheckListItem key={index} {...item}>
          {content}
        </CheckListItem>
      ))}
    </Space>
  );
};
