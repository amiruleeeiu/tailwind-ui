import cn from "@/utils/cn";
import React from "react";

function Table(props: Readonly<React.HTMLAttributes<HTMLTableElement>>) {
  return (
    <table
      className={cn(
        "w-full border-collapse rounded bg-white shadow",
        props.className
      )}
      {...props}
    >
      {props.children}
    </table>
  );
}

export default Table;

export function TableContainer(
  props: Readonly<React.HTMLAttributes<HTMLDivElement>>
) {
  return (
    <div
      className={cn(
        "min-w-auto overflow-x-auto bg-gray-100",
        props.className
      )}
      {...props}
    >
      {props.children}
    </div>
  );
}

export const TableCell = (
  props: React.AllHTMLAttributes<HTMLTableCellElement>
) => {
  const elementType = props.as ?? "td";
  return React.createElement(
    elementType,
    {
      ...props,
      className: cn(
        "p-3 text-gray-700 min-w-[100px]",
        { "text-gray-600 text-left": elementType == "th" },
        props.className
      ),
    },
    props.children
  );
};

export const TableHead = (props: React.HTMLAttributes<HTMLHeadElement>) => {
  return (
    <thead className={cn("bg-blue-50", props.className)} {...props}>
      {props.children}
    </thead>
  );
};

export const TableBody = (props: React.HTMLAttributes<HTMLTableElement>) => {
  return <tbody>{props.children}</tbody>;
};

export const TableRow = (props: React.HTMLAttributes<HTMLTableRowElement>) => {
  return (
    <tr className={cn("hover:bg-gray-50 border-b", props.className)} {...props}>
      {props.children}
    </tr>
  );
};
