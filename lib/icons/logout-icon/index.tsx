import React from "react";

const LogoutIcon: React.FC<{ color?: string }> = ({ color = "#64748B" }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8333 7.33341V5.50008C12.8333 5.01385 12.6402 4.54754 12.2964 4.20372C11.9525 3.8599 11.4862 3.66675 11 3.66675H4.58333C4.0971 3.66675 3.63079 3.8599 3.28697 4.20372C2.94315 4.54754 2.75 5.01385 2.75 5.50008V16.5001C2.75 16.9863 2.94315 17.4526 3.28697 17.7964C3.63079 18.1403 4.0971 18.3334 4.58333 18.3334H11C11.4862 18.3334 11.9525 18.1403 12.2964 17.7964C12.6402 17.4526 12.8333 16.9863 12.8333 16.5001V14.6667"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.41602 11H19.2493M19.2493 11L16.4993 8.25M19.2493 11L16.4993 13.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LogoutIcon;
