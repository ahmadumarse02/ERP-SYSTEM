"use client";

import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";
import { Camera } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ImageUploadProps {
  value?: string;
  onChange: (url: string) => void;
  className?: string;
}

const ImageUpload = ({ value, onChange, className }: ImageUploadProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(value || null);

  useEffect(() => {
    if (value) setImageUrl(value);
  }, [value]);

  return (
    <div
      className={cn(
        "mb-4 flex max-w-[333px] flex-col items-center rounded-lg px-10 py-10",
        className,
      )}
    >
      <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full border-2 border-dashed border-gray-300 bg-gray-100">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="Uploaded preview"
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <Camera className="size-10" />
          </div>
        )}

        {/* Transparent Upload Layer */}
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            if (res && res[0]) {
              setImageUrl(res[0].url);
              onChange(res[0].url);
            }
          }}
          onUploadError={(err) => {
            alert(`Upload failed: ${err.message}`);
          }}
          className="absolute inset-0 cursor-pointer opacity-0"
        />
      </div>

      <p className="mt-4 text-center text-xs text-gray-500">
        Allowed format JPG, JPEG, and PNG
        <br />
        Max file size 2MB
      </p>
    </div>
  );
};

export default ImageUpload;
