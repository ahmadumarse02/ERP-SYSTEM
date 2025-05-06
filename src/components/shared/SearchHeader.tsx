import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  buttonHref?: string;
  buttonLabel?: string;
  titleNumber?: number;
  titleHeading?: string;
  searchLabel?: string;
  searchPlaceholder?: string;
  buttonLink?: string;
  headerTitle?: string;
}

function SearchHeader({
  buttonHref,
  buttonLabel,
  titleNumber,
  titleHeading,
  searchLabel,
  searchPlaceholder,
  headerTitle,
}: Props) {
  return (
    <div className="mb-10 flex items-center justify-between rounded-lg bg-white p-4 py-6 shadow-sm">
      <h1 className="text-2xl font-bold">{headerTitle}</h1>

      {(titleNumber || titleHeading) && (
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center">
            {titleNumber && (
              <h1 className="mr-2 text-2xl font-bold">{titleNumber}</h1>
            )}
            {titleHeading && (
              <h2 className="text-lg text-gray-600">{titleHeading}</h2>
            )}
          </div>
        </div>
      )}

      {searchLabel && (
        <div className="mb-4">
          <h3 className="mb-1 text-sm font-medium text-gray-700">
            {searchLabel}
          </h3>
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      )}

      {buttonLabel && (
        <div className="">
          <Button size="lg" className="bg-gradient my-auto w-full text-white">
            {buttonHref ? (
              <Link href={buttonHref}>{buttonLabel}</Link>
            ) : (
              <span>{buttonLabel}</span>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}

export default SearchHeader;
