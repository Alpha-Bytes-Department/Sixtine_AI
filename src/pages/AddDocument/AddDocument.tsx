import React, { useEffect, useRef, useState } from "react";
import DocumentSummery from "../../components/AddDocument/DocumentSummery/DocumentSummery";
import { FadeLoader } from "react-spinners";

interface FileUploaderProps {
  multiple?: boolean;
  accept?: string;
  onFiles?: (files: File[]) => void;
}

export default function AddDocument({
  multiple = true,
  accept = ".jpg, .png, .doc, .docx",
  onFiles,
}: FileUploaderProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    if(files.length > 0){
      setLoading(true);
      setTimeout(()=>{
        setLoading(false);
      },1500)
    }
  },[files])

  const pushFiles = (newFiles: FileList | File[]) => {
    setError(null); // Clear previous error
    const allowedExtensions = accept
      .split(",")
      .map((ext) => ext.trim().toLowerCase());
    const arr = Array.from(newFiles);


    // checking file type supported or not 
    const invalidFiles = arr.filter((file) => {
      const fileExtension = `.${file.name.split(".").pop()?.toLowerCase()}`;
      return !allowedExtensions.includes(fileExtension);
    });

    if (invalidFiles.length > 0) {
      setError("File type is not supported");
      // Optionally, you could filter out invalid files and only add valid ones
      // const validFiles = arr.filter(file => !invalidFiles.includes(file));
      // if (validFiles.length === 0) return;
      return;
    }

    const next = [...files, ...arr];
    setFiles(next);
    if (onFiles) onFiles(next);
  };

  //   button click upload
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setError(null);
    pushFiles(e.target.files);
    // reset input so same file can be selected again if user wants
    e.currentTarget.value = "";
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  //   drug and drop upload
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    setError(null);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      pushFiles(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  };

  const openFileDialog = () => inputRef.current?.click();

  //   remove file
  const removeFileAt = (index: number) => {
    const next = files.filter((_, i) => i !== index);
    setFiles(next);
    if (onFiles) onFiles(next);
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };
  if(loading){
    return (
      <div className="h-full w-full flex justify-center items-center">
        <FadeLoader />
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-white flex justify-center items-center">
      <div className={`mx-auto ${files.length > 0 ? "flex flex-col p-10 2xl:m-auto 2xl:flex-row xl:gap-5 h-full overflow-y-auto" : ""}`}>
        {/* file upload  */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed transition-all duration-200 ${
            isDragging
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 bg-white"
          } ${files.length > 0 ? "px-5 py-40" : "p-12 lg:p-40"}`}
        >
          <input
            ref={inputRef}
            type="file"
            className="hidden"
            onChange={handleInputChange}
            accept={accept}
            multiple={multiple}
          />

          <div className="text-center">
            <button
              type="button"
              onClick={openFileDialog}
              className="px-4 py-2 rounded-md cursor-pointer bg-[#4E7BA0] text-white hover:bg-[#285070] transition"
            >
              Browse files
            </button>
            <p className="text-sm text-gray-600 mb-3">
              <p className="my-3">Or</p>
              drop documents here (jpg, png, docs)
            </p>
            {/* error message for other type files  */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
        </div>
        {/* Files list / preview */}
        {files.length > 0 && (
          <div className="mt-4 space-y-2 min-w-64">
            <div className="flex items-center justify-between text-sm text-gray-700">
              <span className="font-medium">
                Preview file{files.length > 1 ? "s" : ""}
              </span>
              <button
                type="button"
                onClick={() => {
                  setFiles([]);
                  if (onFiles) onFiles([]);
                }}
                className="text-xs text-red-500 hover:underline"
              >
                Clear
              </button>
            </div>

            <ul className="divide-y rounded-md overflow-hidden border">
              {files.map((f, idx) => (
                <li
                  key={`${f.name}-${f.size}-${idx}`}
                  className="flex items-center justify-between px-3 py-2"
                >
                  <div className="flex items-center space-x-3">
                    {/* simple icon placeholder for images */}
                    {f.type.startsWith("image/") ? (
                      <img
                        src={URL.createObjectURL(f)}
                        alt={f.name}
                        className="w-10 h-10 object-cover rounded"
                      />
                    ) : (
                      <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded text-xs">
                        {f.name.split(".").pop()?.slice(0, 3) ?? "file"}
                      </div>
                    )}

                    <div className="text-xs">
                      <div className="font-medium">{f.name}</div>
                      <div className="text-gray-500">{formatBytes(f.size)}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => removeFileAt(idx)}
                      className="text-xs text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        {
          files.length > 0 && (<DocumentSummery/>)
        }
      </div>
    </div>
  );
}
