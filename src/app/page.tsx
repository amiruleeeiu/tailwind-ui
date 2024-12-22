"use client";

import Card from "@/components/card";
import Dropdown from "@/components/dropdown";
import IconButton from "@/components/icon-button";
import Pagination from "@/components/pagination";
import Tabs from "@/components/tabs";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
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
    <div className="p-12 bg-gray-100">
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <Card.Header>
            <Card.Title>Your Title</Card.Title>
          </Card.Header>
          <Card.Body>Your content here</Card.Body>
          <Card.Footer>Footer content</Card.Footer>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Your Title</Card.Title>
          </Card.Header>
          <Card.Body>Your content here</Card.Body>
          <Card.Footer>Footer content</Card.Footer>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Your Title</Card.Title>
          </Card.Header>
          <Card.Body>Your content here</Card.Body>
          <Card.Footer>Footer content</Card.Footer>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-4">
        <Card>
          <Card.Header>
            <Card.Title>Dropdown</Card.Title>
          </Card.Header>
          <Card.Body>
            <Dropdown
              items={dropdownItems}
              value={selectedValue}
              onChange={setSelectedValue}
              placeholder="Select items per page"
            />
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Icon Button</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="flex flex-wrap space-x-2">
              <IconButton className="rounded-md">
                <MdOutlineArrowForwardIos />
              </IconButton>
              <IconButton>
                <FaPlus />
              </IconButton>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Pagination</Card.Title>
          </Card.Header>
          <Card.Body>
            <Pagination
              limit={limit}
              setLimit={setLimit}
              count={100}
              totalPages={Math.ceil(100 / Number(limit))}
              currentPage={page}
              onPageChange={onPageChange}
            />
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Tabs</Card.Title>
          </Card.Header>
          <Card.Body>
            <Tabs />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
