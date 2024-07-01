import { DeleteOutlined, UploadOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import FileIcon from "../../icons/file-icon";
import { FormattedMessage, FormattedNumberParts } from "react-intl";

interface UploadProps {
  value?: File[];
  onChange?: (files: File[] | [] | null) => void;
  multiple?: boolean;
  beforeUpload?: (file: File) => boolean;
}

export const Upload: React.FC<UploadProps> = ({
  multiple = false,
  onChange,
  value,
  beforeUpload,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = async (
    e
  ) => {
    const changeFiles = () => {
      if (e.target.files?.length) {
        multiple
          ? setFiles([
              ...files,
              ...Array.from(Array(e.target.files.length)).map(
                (_, idx) => e.target.files?.item(idx) as File
              ),
            ])
          : setFiles(
              Array.from(Array(e.target.files.length)).map(
                (_, idx) => e.target.files?.item(idx) as File
              )
            );
      }
    };

    if (e.target.files && beforeUpload) {
      for (let i = 0; i < (e.target.files?.length || 0); i++) {
        if (beforeUpload(e.target.files[i])) {
          changeFiles();
        }
      }
    } else {
      changeFiles();
    }
  };

  const handleOnDelete = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    fileIndex: number
  ) => {
    e.stopPropagation();
    const filteredFiles = [
      ...files.slice(0, fileIndex),
      ...files.slice(fileIndex + 1),
    ];
    setFiles(filteredFiles);
    onChange && onChange(filteredFiles.length === 0 ? null : filteredFiles);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    if (value && value.length > 0) {
      setFiles(value);
    }
  }, [value]);

  useEffect(() => {
    if (files.length > 0) {
      onChange && onChange(files);
    }
  }, [files, onChange]);

  return (
    <div className="flex flex-wrap gap-4">
      {files.map((file, index) => (
        <div
          key={file.name}
          className={classNames(
            "max-w-[258px] relative group flex items-center gap-x-3 py-2 pe-2 ps-4 bg-lightBlue rounded-2xl hover:cursor-pointer",
            { "basis-full": !multiple, "basis-1/3": multiple }
          )}
          role="button"
          onClick={() => inputRef.current?.click()}
        >
          <div
            className="absolute opacity-0 group-hover:opacity-100 transition-opacity -left-2 -top-2 flex items-center justify-center text-ghostWhite bg-coral rounded-full w-6 h-6"
            onClick={(e) => handleOnDelete(e, index)}
          >
            <DeleteOutlined size={4} />
          </div>
          <UploadOutlined className="flex-1 text-slateGray" />
          <div className="flex flex-col items-end gap-y-1">
            <Typography.Text className="text-xs font-semibold text-ellipsis overflow-hidden whitespace-nowrap max-w-[170px]">
              {file.name}
            </Typography.Text>
            <Typography.Text className="text-xs">
              <FormattedNumberParts value={file.size}>
                {(parts) => <>{parts[0].value} Kb</>}
              </FormattedNumberParts>
            </Typography.Text>
          </div>
          <FileIcon />
        </div>
      ))}
      <div
        className={classNames(
          "max-w-[258px] flex flex-col items-center justify-center py-2 bg-lightBlue rounded-2xl hover:cursor-pointer",
          {
            hidden: !multiple && files.length > 0,
            "basis-full": !multiple,
            "basis-1/3": multiple,
          }
        )}
        role="button"
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          multiple={multiple}
          className="!hidden"
          onChange={handleOnChange}
        />
        <UploadOutlined />
        <Typography.Text>
          <FormattedMessage id="upload_file" />
        </Typography.Text>
      </div>
    </div>
  );
};
