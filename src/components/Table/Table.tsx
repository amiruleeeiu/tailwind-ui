import cn from "@/utils/cn";
import React from "react";

const TableContext = React.createContext({ striped: false });

function Table(
  props: Readonly<React.HTMLAttributes<HTMLTableElement>> & {
    striped?: boolean;
  }
) {
  const { striped, className, children, ...rest } = props;

  return (
    <TableContext.Provider value={{ striped: striped ?? false }}>
      <table
        className={cn(
          "w-full border-collapse rounded bg-white shadow",
          className
        )}
        {...rest} // Pass only the remaining props
      >
        {children}
      </table>
    </TableContext.Provider>
  );
}

export default Table;

export function TableContainer(
  props: Readonly<React.HTMLAttributes<HTMLDivElement>>
) {
  return (
    <div
      className={cn("min-w-auto overflow-x-auto bg-gray-100", props.className)}
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
  const { striped } = React.useContext(TableContext);
  return (
    <tr
      className={cn(
        {
          "even:bg-gray-100": striped,
          "hover:bg-gray-100 hover:border-transparent duration-300 border-b":
            !striped,
        },
        props.className
      )}
      {...props}
    >
      {props.children}
    </tr>
  );
};
