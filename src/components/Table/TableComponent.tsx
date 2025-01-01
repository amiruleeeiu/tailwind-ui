import cn from "@/utils/cn";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import Pagination from "../pagination";
import Table, {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "./Table";

interface DataType {
  name: string;
  age: number;
  artist: string;
  year: number;
}

const data: DataType[] = [
  {
    name: "The Sliding Mr. Bones (Next Stop, Pottersville)",
    age: 25,
    artist: "Malcolm Lockyer",
    year: 1961,
  },
  {
    name: "Witchy Woman",
    age: 20,
    artist: "The Eagles",
    year: 1972,
  },
  {
    name: "Shining Star",
    age: 21,
    artist: "Earth, Wind & Fire",
    year: 1975,
  },
];

function TableComponent() {
  const [order, setOrder] = useState<string>("asc");
  const [strtedData, setStrtedData] = useState(data);

  const handleSort = (key: string) => {
    setStrtedData(
      [...data].sort((a: DataType, b: DataType) => {
        if (a[key as keyof DataType] < b[key as keyof DataType])
          return order === "asc" ? 1 : -1;
        if (a[key as keyof DataType] > b[key as keyof DataType])
          return order === "asc" ? -1 : 1;
        return 0;
      })
    );
  };

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState("10");

  const onPageChange = (page: number) => {
    setPage(page);
  };

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow className="hover:bg-blue-50">
              <TableCell as="th">
                <button
                  onClick={() => {
                    setOrder(order === "asc" ? "desc" : "asc");
                    handleSort("name");
                  }}
                  className="flex items-center gap-1 group"
                >
                  Name{" "}
                  <FaArrowDown
                    className={cn("hidden group-hover:block  duration-300 ", {
                      "rotate-180": order === "desc",
                    })}
                    size={14}
                  />
                </button>
              </TableCell>
              <TableCell as="th">
                {" "}
                <button
                  onClick={() => {
                    setOrder(order === "asc" ? "desc" : "asc");
                    handleSort("age");
                  }}
                  className="flex items-center gap-1 group"
                >
                  Age{" "}
                  <FaArrowDown
                    className={cn("hidden group-hover:block  duration-300 ", {
                      "rotate-180": order === "desc",
                    })}
                    size={14}
                  />
                </button>
              </TableCell>
              <TableCell as="th">
                {" "}
                <button
                  onClick={() => {
                    setOrder(order === "asc" ? "desc" : "asc");
                    handleSort("artist");
                  }}
                  className="flex items-center gap-1 group"
                >
                  Artist{" "}
                  <FaArrowDown
                    className={cn("hidden group-hover:block  duration-300 ", {
                      "rotate-180": order === "desc",
                    })}
                    size={14}
                  />
                </button>
              </TableCell>
              <TableCell as="th">
                {" "}
                <button
                  onClick={() => {
                    setOrder(order === "asc" ? "desc" : "asc");
                    handleSort("year");
                  }}
                  className="flex items-center gap-1 group"
                >
                  Year{" "}
                  <FaArrowDown
                    className={cn("hidden group-hover:block  duration-300 ", {
                      "rotate-180": order === "desc",
                    })}
                    size={14}
                  />
                </button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {strtedData.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.artist}</TableCell>
                <TableCell>{item.year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        limit={limit}
        setLimit={setLimit}
        count={100}
        totalPages={Math.ceil(100 / Number(limit))}
        currentPage={page}
        onPageChange={onPageChange}
      />
    </>
  );
}

export default TableComponent;
