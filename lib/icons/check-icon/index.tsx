interface CheckIconProps {
  color?: string;
  height?: number;
  width?: number;
}

const CheckIcon: React.FC<CheckIconProps> = ({
  color = "#BDBDBD",
  height = 25,
  width = 24,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12.9043" r="12" fill={color} />
      <path
        d="M6.35254 13.1541C7.76019 14.4346 9.95704 16.433 9.95704 16.433L16.9408 10.0801"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CheckIcon;
