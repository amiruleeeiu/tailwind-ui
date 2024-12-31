import React, { createContext, useState } from "react";
import { AccordionItemProps } from "./AccordionItem";

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement<AccordionItemProps>[];
  defaultValue?: string[];
  collapsable?: boolean;
}

interface AccordionContextType {
  openItems: string[];
  toggleItem: (item: string) => void;
}

export const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

function Accordion({
  children,
  defaultValue = [],
  collapsable = false,
}: Readonly<AccordionProps>) {
  const [openItems, setOpenItems] = useState<string[]>([...defaultValue]);

  const toggleItem = (item: string) => {
    const isOpen = openItems.includes(item);
    const updatedOpenItems = isOpen
      ? openItems.filter((i) => i !== item)
      : [...openItems, item];

    if (collapsable) {
      setOpenItems(isOpen ? [] : [item]);
    } else {
      setOpenItems(updatedOpenItems);
    }
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      {children}
    </AccordionContext.Provider>
  );
}

export default Accordion;
