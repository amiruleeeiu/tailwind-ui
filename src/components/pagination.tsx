"use client";

import { FC } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
  MdOutlineFirstPage,
  MdOutlineLastPage,
} from "react-icons/md";
import Dropdown from "./dropdown";
import IconButton from "./icon-button";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  count: number;
  onPageChange: (page: number) => void;
  limit: string;
  setLimit: (limit: string) => void;
}

const Pagination: FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  count,
  limit,
  setLimit,
}) => {
  const dropdownItems = [
    { label: "10", value: "10" },
    { label: "20", value: "20" },
    { label: "50", value: "50" },
    { label: "100", value: "100" },
  ];

  const handleSelect = (item: string) => {
    setLimit(item);
    onPageChange(1);
  };

  return (
    <div className="flex items-center justify-end space-x-8 mt-3 font-medium text-gray-700">
      <div>Rows per page:</div>
      <Dropdown
        items={dropdownItems}
        value={limit}
        onChange={handleSelect}
        placeholder="Select items per page"
        width="auto"
        variant="none"
      />
      <div>
        <span className="text-gray-500">
          {`${Number(limit) * (currentPage - 1) + 1} - ${
            Number(limit) * currentPage
          }`}{" "}
          of {count}
        </span>
      </div>
      <div className="flex items-center">
        <div className="flex items-center">
          <IconButton
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            className="bg-transparent hover:bg-gray-100"
          >
            <MdOutlineFirstPage size={20} />
          </IconButton>

          <IconButton
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-transparent hover:bg-gray-100"
          >
            <MdOutlineArrowBackIos size={14} />
          </IconButton>
        </div>

        <div className="flex items-center">
          <IconButton
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-transparent hover:bg-gray-100"
          >
            <MdOutlineArrowForwardIos size={14} />
          </IconButton>
          <IconButton
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="bg-transparent hover:bg-gray-100"
          >
            <MdOutlineLastPage size={20} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
