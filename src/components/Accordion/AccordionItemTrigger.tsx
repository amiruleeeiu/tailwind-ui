import cn from "@/utils/cn";
import { useContext } from "react";
import { AccordionContext } from "./Accordion";

interface AccordionItemTriggerProps {
  children: React.ReactNode;
  disabled?: boolean;
  value?: string;
  rightIcon?: React.ReactNode;
  className?: string;
}

export const AccordionItemTrigger = ({
  children,
  disabled,
  value,
  rightIcon,
  className,
}: AccordionItemTriggerProps) => {
  const { openItems, toggleItem } = useContext(AccordionContext)!;

  const isOpen = value && openItems?.includes(value);

  return (
    <button
      disabled={disabled}
      onClick={value ? () => toggleItem(value) : undefined}
      className={cn(
        "px-3 cursor-default flex w-full items-center justify-between py-2 text-lg font-semibold  text-gray-600 text-left border-b ",
        {
          "cursor-not-allowed opacity-50": disabled,
        },
        {
          "transform transition-transform duration-300 bg-blue-100": isOpen,
        },
        className
      )}
    >
      <h1 className=""> {children}</h1>
      {rightIcon || (
        <svg
          className={`w-4 h-4 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      )}
    </button>
  );
};

export default AccordionItemTrigger;
