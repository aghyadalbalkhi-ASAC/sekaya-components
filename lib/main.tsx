/* eslint-disable react-refresh/only-export-components */
import "./style.css";
import React from "react";
import { IntlProvider } from "react-intl";
import {
  ConfigProvider as AntdConfigProvider,
  ConfigProviderProps,
} from "antd";

export { AgGridTable } from "./components/ag-grid-table";
export { Button } from "./components/button";
export { CheckList } from "./components/checklist";
export { DatePicker } from "./components/date-picker";
export { TimePicker } from "./components/time-picker";
export { Dragger } from "./components/dragger";
export { Dropdown } from "./components/dropdown";
export { Form } from "./components/form";
export { FormItem } from "./components/form-item";
export { Input } from "./components/input";
export { Modal } from "./components/modal";
export { PasswordInput } from "./components/password-input";
export { Progress } from "./components/progress";
export { ProgressCircle } from "./components/progress-circle";
export { ProgressCircleFloat } from "./components/progress-circle-float";
export { RadioButton } from "./components/radio-button";
export { RadioButtonGroup } from "./components/radio-button-group";
export { ResultPopup } from "./components/result-popup";
export { Select } from "./components/select";
export { SideMenu } from "./components/side-menu";
export { Steps } from "./components/steps";
export { Table } from "./components/table";
export { Tabs } from "./components/tabs";
export { Tag } from "./components/tag";
export { TimelineHorizontal } from "./components/timeline-horizontal";
export { Upload } from "./components/upload";
export { libTheme as theme } from "./theme";

export const ConfigProvider: React.FC<ConfigProviderProps> = ({
  locale,
  theme,
  ...props
}) => {
  return (
    <IntlProvider locale={locale?.locale || "en"}>
      <AntdConfigProvider
        {...props}
        theme={{
          ...theme,
          token: {
            fontFamily: "Inter, Noto Sans Arabic, sans-serif",
            borderRadius: 8,
            colorPrimary: "#154593",
            colorSuccess: "#42C75E",
            colorWarning: "#F6A723",
            colorError: "#ED4F9D",
            colorTextBase: "#0F172A",
            colorBgBase: "#F8FAFC",
            colorSuccessBg: "#F0FDF4",
            colorErrorBg: "#F15568",
            colorWarningBg: "#FFFBEB",
            colorInfoBg: "#EFF6FF",
            fontSize: 16,
            fontSizeSM: 14,
            fontSizeLG: 16,
            fontSizeXL: 18,
            ...theme?.token,
          },
          components: {
            ...theme?.components,
            Progress: {
              defaultColor: "#16637F",
              remainingColor: "#E2E8F0",
              lineBorderRadius: 50,
              ...theme?.components?.Progress,
            },
            Input: {
              colorBorder: "#E2E8F0",
              colorText: "#94A3B8",
              ...theme?.components?.Input,
            },
            Select: {
              colorText: "#94A3B8",
              ...theme?.components?.Select,
            },
            DatePicker: {
              colorText: "#94A3B8",
              ...theme?.components?.DatePicker,
            },
            Modal: {
              titleColor: "#0F172A",
              headerBg: "#fff",
              contentBg: "#fff",
              ...theme?.components?.Modal,
            },
          },
        }}
        locale={locale}
      ></AntdConfigProvider>
    </IntlProvider>
  );
};
