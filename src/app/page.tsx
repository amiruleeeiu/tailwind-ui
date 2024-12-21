"use client";

import Dropdown from "@/components/dropdown";
import IconButton from "@/components/icon-button";
import Pagination from "@/components/pagination";
import Tabs from "@/components/tabs";
import { useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState("10");

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState("10");

  const dropdownItems = [
    { label: "10", value: "10" },
    { label: "20", value: "20" },
    { label: "50", value: "50" },
    { label: "100", value: "100" },
  ];

  const onPageChange = (page: number) => {
    setPage(page);
  };

  return (
    <div className="m-12">
      <div className="p-8 space-y-4">
        <h2 className="text-lg font-semibold mb-4">Dropdown Examples</h2>

        <div className="w-[70px] space-y-4">
          <Dropdown
            items={dropdownItems}
            value={selectedValue}
            onChange={setSelectedValue}
            placeholder="Select items per page"
          />
        </div>
      </div>
      <h2 className="text-lg font-semibold mb-4">Icon Button</h2>
      <IconButton className="rounded-md">
        <MdOutlineArrowForwardIos />
      </IconButton>
      <h1>Pagination</h1>
      <Pagination
        limit={limit}
        setLimit={setLimit}
        count={100}
        totalPages={Math.ceil(100 / Number(limit))}
        currentPage={page}
        onPageChange={onPageChange}
      />
      <h2 className="text-lg font-semibold mb-4">Tabs</h2>
      <Tabs />
    </div>
  );
}
