import { DeleteOutlined, UploadOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { FormattedNumberParts } from "react-intl";
import FileIcon from "../../icons/file-icon";
import UploadIcon from "../../icons/upload-icon";

interface DraggerProps {
  value?: File[];
  onChange?: (files: File[] | [] | null) => void;
  multiple?: boolean;
  placeholder?: string | React.ReactNode;
  beforeUpload?: (file: File) => boolean;
}

export const Dragger: React.FC<DraggerProps> = ({
  multiple = false,
  onChange,
  value,
  placeholder,
  beforeUpload,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
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

  const handleOnDragOver: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    e.currentTarget.classList.add("!border-deepSapphire");
  };

  const handleOnDragLeave: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    e.currentTarget.classList.remove("!border-deepSapphire");
  };

  const handleOnDrop: React.DragEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files?.length) {
      multiple
        ? setFiles([
            ...files,
            ...Array.from(Array(e.dataTransfer.files.length)).map(
              (_, idx) => e.dataTransfer.files?.item(idx) as File
            ),
          ])
        : setFiles(
            Array.from(Array(e.dataTransfer.files.length)).map(
              (_, idx) => e.dataTransfer.files?.item(idx) as File
            )
          );
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
          className="relative group basis-full max-h-48 flex items-center gap-x-3 py-12 pe-2 ps-4 bg-lightBlue rounded-2xl hover:cursor-pointer"
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
            <Typography.Text className="text-xs font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
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
          "basis-full max-h-48 flex flex-col items-center justify-center py-12 bg-ghostWhite rounded-2xl border-dashed border border-gainsboro hover:border-deepSapphire hover:cursor-pointer transition-colors duration-200",
          {
            hidden: !multiple && files.length > 0,
          }
        )}
        role="button"
        onClick={() => inputRef.current?.click()}
        onDragOver={handleOnDragOver}
        onDragLeave={handleOnDragLeave}
        onDrop={handleOnDrop}
      >
        <input
          ref={inputRef}
          type="file"
          multiple={multiple}
          className="!hidden"
          onChange={handleOnChange}
        />
        <UploadIcon />
        <Typography.Text className="mt-3 font-normal">
          {placeholder ? (
            placeholder
          ) : (
            <>
              <span className="text-deepSapphire">click_here_to</span>{" "}
              upload_file_or_drag_and_drop
            </>
          )}
        </Typography.Text>
      </div>
    </div>
  );
};
