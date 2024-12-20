"use client";

import Dropdown from "@/components/dropdown";
import Pagination from "@/components/pagination";
import { useState } from "react";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState("10");

  const dropdownItems = [
    { label: "10 per page", value: "10" },
    { label: "20 per page", value: "20" },
    { label: "50 per page", value: "50" },
    { label: "100 per page", value: "100" },
  ];

  return (
    <div className="m-12">
      <div className="p-8 space-y-4">
        <h2 className="text-lg font-semibold mb-4">Dropdown Examples</h2>

        <div className="w-[300px] space-y-4">
          <Dropdown
            items={dropdownItems}
            value={selectedValue}
            onChange={setSelectedValue}
            placeholder="Select items per page"
          />

          <Dropdown
            items={dropdownItems}
            value={selectedValue}
            onChange={setSelectedValue}
            disabled
          />
        </div>
      </div>
      <h1>Hello world</h1>
      <Pagination totalPages={5} currentPage={1} onPageChange={() => {}} />
    </div>
  );
}
