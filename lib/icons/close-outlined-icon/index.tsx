import React from "react";

type CloseOutlinedIconProps = {
  color?: string;
  height?: number;
  width?: number;
};

const CloseOutlinedIcon: React.FC<CloseOutlinedIconProps> = ({
  color = "#64748B",
  height = 12,
  width = 12,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.05035 1.0498L10.9498 10.9493"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9498 1.0498L1.05033 10.9493"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseOutlinedIcon;
