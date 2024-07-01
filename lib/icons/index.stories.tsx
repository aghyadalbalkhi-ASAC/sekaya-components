import { Meta, StoryObj } from "@storybook/react";
import { Space } from "antd";
import AnalyticsIcon from "./analytics-icon";
import AvatarIcon from "./avatar-icon";
import BriefcaseIcon from "./briefcase-icon";
import CheckIcon from "./check-icon";
import DotsIcon from "./dots-icon";
import SettingsIcon from "./settings-icon";
import DashboardIcon from "./dashboard-icon";
import LogoutIcon from "./logout-icon";
import NotificationsIcon from "./notifications-icon";
import FileIcon from "./file-icon";
import SuccessIcon from "./success-icon";
import FailedIcon from "./failed-icon";
import UploadIcon from "./upload-icon";
import LoginMailIcon from "./login-mail";
import SearchIcon from "./search-icon";
import CertificateFileIcon from "./certificate-file-icon";
import DotsVerticalIcon from "./dots-vertical-icon";
import CloseOutlinedIcon from "./close-outlined-icon";
import BusinessTimeIcon from "./business-time-icon";
import CloseIcon from "./close-icon";

const meta: Meta = {
  component: () => <></>,
  tags: ["autodocs"],
};

export const Example: StoryObj = {
  render() {
    return (
      <Space wrap>
        <AnalyticsIcon />
        <AvatarIcon />
        <BriefcaseIcon />
        <CheckIcon />
        <DotsIcon />
        <SettingsIcon />
        <DashboardIcon />
        <LogoutIcon />
        <NotificationsIcon />
        <FileIcon />
        <SuccessIcon />
        <FailedIcon />
        <UploadIcon />
        <LoginMailIcon />
        <SearchIcon />
        <DotsVerticalIcon />
        <BriefcaseIcon />
        <CloseOutlinedIcon />
        <CloseIcon />
        <BusinessTimeIcon />
        <CertificateFileIcon />
      </Space>
    );
  },
};

export default meta;
