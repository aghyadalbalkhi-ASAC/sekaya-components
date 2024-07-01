import { AgGridReact, AgGridReactProps } from "ag-grid-react";
import { ModuleRegistry } from "ag-grid-community";
import { ServerSideRowModelModule } from "@ag-grid-enterprise/server-side-row-model";
import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import "./theme.scss";
import { CSSProperties } from "react";
import classNames from "classnames";
import { useIntl } from "react-intl";

ModuleRegistry.registerModules([
  ServerSideRowModelModule,
  SetFilterModule,
  ExcelExportModule,
]);

interface AgGridTableProps extends AgGridReactProps {
  containerClassName?: string;
  containerStyle?: CSSProperties;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function AgGridTable<TData = any>({
  containerClassName,
  containerStyle,
  ...props
}: AgGridTableProps) {
  const { locale } = useIntl();
  const isRTL = locale === "ar";

  return (
    <div
      className={classNames([containerClassName, "ag-theme-quartz"])}
      style={{ height: "100%", width: "100%", ...containerStyle }}
    >
      <AgGridReact<TData> enableRtl={isRTL} {...props} />
    </div>
  );
}
