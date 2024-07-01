import CheckIcon from "../../icons/check-icon";
import classNames from "classnames";
import CloseOutlinedIcon from "../../icons/close-outlined-icon";
import { Grid } from "antd";

export interface CheckListItemProps {
  children: React.ReactNode | string;
  checked?: boolean;
  rejected?: boolean;
  onClick?: () => void;
}

export const CheckListItem: React.FC<CheckListItemProps> = ({
  children,
  checked = false,
  rejected = false,
  onClick,
}) => {
  const screens = Grid.useBreakpoint();
  const isMobile = screens.xs;
  const isDesktop = screens.lg;

  return (
    <div
      className="flex gap-x-[18px] items-center hover:cursor-pointer"
      onClick={onClick}
    >
      {rejected && (
        <div
          className={classNames(
            "bg-coral rounded-full flex items-center justify-center",
            {
              "h-6 w-6": isDesktop,
              "h-[18px] w-[18px]": isMobile,
            }
          )}
        >
          <CloseOutlinedIcon
            color="white"
            height={isDesktop ? 12 : 8}
            width={isDesktop ? 12 : 8}
          />
        </div>
      )}
      {!rejected && (
        <div className="flex">
          <CheckIcon
            color={checked ? "#42C75E" : undefined}
            height={isDesktop ? 24 : 18}
            width={isDesktop ? 24 : 18}
          />
        </div>
      )}
      {children}
    </div>
  );
};

export default CheckListItem;
