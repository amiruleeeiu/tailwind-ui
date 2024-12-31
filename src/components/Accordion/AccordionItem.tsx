import cn from "@/utils/cn";
import React, { ReactElement, ReactNode } from "react";

export interface AccordionItemProps {
  children: ReactNode;
  value: string;
}

export function AccordionItem({
  children,
  value,
}: Readonly<AccordionItemProps>) {
  return (
    <div className={cn("rounded-lg border-b-gray-200 ")}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // Clone the child and pass the 'value' prop
          return React.cloneElement(child as ReactElement<{ value: string }>, {
            value,
          });
        }
        return child;
      })}
    </div>
  );
}

export default AccordionItem;
