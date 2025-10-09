import React, { useRef, useState } from "react";

interface FileUploaderProps {
  multiple?: boolean;
  accept?: string;
  onFiles?: (files: File[]) => void;
}

export default function AddDocument({
  multiple = true,
  accept,
  onFiles,
}: FileUploaderProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

 
  const pushFiles = (newFiles: FileList | File[]) => {
    const arr = Array.from(newFiles);
    const next =  [...files, ...arr] ;
    setFiles(next);
    if (onFiles) onFiles(next);
  };

//   button click upload 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
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

  return (
    <div className="h-full w-full bg-white flex justify-center items-center">
      <div className={` mx-auto`}>
        {/* file upload  */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`relative flex flex-col items-center justify-center p-40 rounded-lg border-2 border-dashed transition-all duration-200
          ${
            isDragging
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 bg-white"
          }`}
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
            {accept && (
              <p className="mt-2 text-xs text-gray-500">Accepted: {accept}</p>
            )}
          </div>
        </div>

        {/* Files list / preview */}
        {files.length > 0 && (
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between text-sm text-gray-700">
              <span className="font-medium">
                Selected file{files.length > 1 ? "s" : ""}
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
      </div>
    </div>
  );
}
