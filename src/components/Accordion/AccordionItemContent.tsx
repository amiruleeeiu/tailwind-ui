import cn from "@/utils/cn";
import { useContext, useEffect, useRef, useState } from "react";
import { AccordionContext } from "./Accordion";

interface AccordionItemContentProps {
  children: React.ReactNode;
  value?: string;
  className?: string;
}

export const AccordionItemContent = ({
  children,
  value,
  className = "",
}: AccordionItemContentProps) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const { openItems } = useContext(AccordionContext)!;

  const [height, setHeight] = useState(0);

  const isOpen = value && openItems?.includes(value);

  useEffect(() => {
    if (contentRef.current && isOpen) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div
      ref={contentRef}
      style={{ height: `${value && isOpen ? height : 0}px` }}
      className={cn(
        "px-3 overflow-hidden transition-[height] duration-300 ease-in-out",
        className
      )}
    >
      <div className="py-3 ">{children}</div>
    </div>
  );
};

export default AccordionItemContent;
