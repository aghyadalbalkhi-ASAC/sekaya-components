import React from "react";

const SettingsIcon: React.FC<{ color?: string }> = ({
  color = "#64748B",
}) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5354 3.95725C12.1449 2.34758 9.85508 2.34758 9.46458 3.95725C9.40599 4.19907 9.29113 4.42363 9.12935 4.61267C8.96757 4.8017 8.76343 4.94987 8.53357 5.0451C8.3037 5.14033 8.0546 5.17995 7.80653 5.16071C7.55846 5.14148 7.31844 5.06394 7.106 4.93442C5.69158 4.07275 4.07183 5.69158 4.9335 7.10692C5.06284 7.31927 5.14026 7.55914 5.15944 7.80704C5.17863 8.05494 5.13906 8.30387 5.04393 8.5336C4.94881 8.76332 4.80082 8.96736 4.612 9.12913C4.42318 9.2909 4.19885 9.40583 3.95725 9.46458C2.34758 9.85508 2.34758 12.1449 3.95725 12.5354C4.19907 12.594 4.42363 12.7089 4.61267 12.8707C4.8017 13.0324 4.94987 13.2366 5.0451 13.4664C5.14033 13.6963 5.17995 13.9454 5.16071 14.1935C5.14148 14.4415 5.06394 14.6816 4.93442 14.894C4.07275 16.3084 5.69158 17.9282 7.10692 17.0665C7.31927 16.9372 7.55914 16.8597 7.80704 16.8406C8.05494 16.8214 8.30387 16.8609 8.5336 16.9561C8.76332 17.0512 8.96736 17.1992 9.12913 17.388C9.2909 17.5768 9.40583 17.8012 9.46458 18.0428C9.85508 19.6524 12.1449 19.6524 12.5354 18.0428C12.594 17.8009 12.7089 17.5764 12.8707 17.3873C13.0324 17.1983 13.2366 17.0501 13.4664 16.9549C13.6963 16.8597 13.9454 16.8201 14.1935 16.8393C14.4415 16.8585 14.6816 16.9361 14.894 17.0656C16.3084 17.9273 17.9282 16.3084 17.0665 14.8931C16.9372 14.6807 16.8597 14.4409 16.8406 14.193C16.8214 13.9451 16.8609 13.6961 16.9561 13.4664C17.0512 13.2367 17.1992 13.0326 17.388 12.8709C17.5768 12.7091 17.8011 12.5942 18.0427 12.5354C19.6524 12.1449 19.6524 9.85508 18.0427 9.46458C17.8009 9.40599 17.5764 9.29113 17.3873 9.12935C17.1983 8.96757 17.0501 8.76344 16.9549 8.53357C16.8597 8.3037 16.8201 8.0546 16.8393 7.80653C16.8585 7.55846 16.9361 7.31844 17.0656 7.106C17.9273 5.69158 16.3084 4.07183 14.8931 4.9335C13.9764 5.49083 12.7884 4.99767 12.5354 3.95725Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 13.75C9.48122 13.75 8.25 12.5188 8.25 11C8.25 9.48122 9.48122 8.25 11 8.25C12.5188 8.25 13.75 9.48122 13.75 11C13.75 12.5188 12.5188 13.75 11 13.75Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SettingsIcon;
