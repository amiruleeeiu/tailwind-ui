import cn from "@/utils/cn";
import { Check } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface DropdownProps {
  items?: Array<{
    label: string;
    value: string;
    icon?: React.ReactNode;
  }>;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  width?: "auto" | "full";
  variant?: "outline" | "filled" | "none";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Dropdown = ({
  items = [],
  value,
  onChange,
  placeholder = "Select option",
  disabled = false,
  className = "",
  width = "full",
  size = "md",
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState(
    items.find((item) => item.value === value) || null
  );

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update selected item when value prop changes
  useEffect(() => {
    const newSelectedItem = items.find((item) => item.value === value);
    if (newSelectedItem) {
      setSelectedItem(newSelectedItem);
    }
  }, [value, items]);

  const handleSelect = (item: (typeof items)[0]) => {
    setSelectedItem(item);
    setIsOpen(false);
    onChange?.(item.value);
  };

  // Size styles
  const sizeStyles = {
    sm: "py-1 px-2 text-sm",
    md: "py-2 px-3",
    lg: "py-3 px-4 text-lg",
  };

  // Variant styles
  // const variantStyles = {
  //   outline: "border border-gray-300 bg-white hover:border-gray-400",
  //   filled: "bg-gray-100 hover:bg-gray-200",
  //   none: "hover:bg-gray-50 duration-200 ease-in-out",
  // };

  return (
    <div
      ref={dropdownRef}
      className={cn(
        `relative ${width === "full" ? "w-full" : "w-auto"}`,
        className
      )}
    >
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={cn(
          `
          flex items-center justify-between border rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 duration-200
          ${sizeStyles[size]}
          
          ${width === "full" ? "w-full" : "min-w-[60px]"}
          transition-all duration-200 ease-in-out
        `,
          { "opacity-50 cursor-not-allowed": disabled }
        )}
      >
        <span className={!selectedItem ? "text-gray-500" : "text-gray-900"}>
          {selectedItem ? selectedItem.label : placeholder}
        </span>
        <IoMdArrowDropdown
          className={`transition-transform duration-200 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown menu */}
      <div
        className={`
          absolute z-50 w-full mt-1 bg-white rounded shadow-lg
          transform transition-all duration-200 ease-in-out origin-top
          border 
          ${
            isOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }
          
        `}
      >
        <div className="py-1 max-h-60 overflow-auto">
          {items.map((item, index) => (
            <button
              key={item.value}
              onClick={() => handleSelect(item)}
              className={`
                flex items-center w-full px-4 py-2 text-left cursor-default
                ${
                  selectedItem?.value === item.value
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700"
                }
                hover:bg-gray-50 transition-colors duration-150
                ${index !== items.length - 1 ? "border-b border-gray-100" : ""}
              `}
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
              <span className="flex-grow">{item.label}</span>
              {selectedItem?.value === item.value && (
                <Check className="w-4 h-4 ml-2 text-blue-600" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
