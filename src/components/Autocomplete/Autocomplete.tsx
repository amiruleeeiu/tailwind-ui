/* eslint-disable react-hooks/exhaustive-deps */
import { useBoolean } from "@/hooks/useBoolean";
import cn from "@/utils/cn";
import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import Input from "../Input";
import IconButton from "../icon-button";

export interface Option {
  label: string;
  value: string;
}

interface AutocompleteProps {
  value?: Option;
  options: Option[];
  placeholder?: string;
  className?: string;
  clearable?: boolean;
}

function Autocomplete(props: AutocompleteProps) {
  const { value, placeholder, className,options, clearable = false } = props;
  const [selectedOption, setSelectedOption] = useState(
    value || {
      label: "",
      value: "",
    }
  );
  const [changeValue, setChangeValue] = useState("");
  const { value: isOpen, setFalse, setTrue } = useBoolean();

  const [filteredOptions, setFilteredOptions] = useState(options);

  const menuRef = useRef<HTMLUListElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const v: string = e.target.value;
    setChangeValue(v);
    setFilteredOptions(
      options.filter((i: Option) =>
        i.label.toLocaleLowerCase().includes(v?.toLocaleLowerCase())
      )
    );
  };

  //   useEffect(() => {
  //     setFilteredOptions(
  //       options.filter((i) =>
  //         i.label.toLocaleLowerCase().includes(changeValue?.toLocaleLowerCase())
  //       )
  //     );
  //   }, [changeValue]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setChangeValue("");
        setFilteredOptions(options);
        setFalse();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <Input
        type="text"
        placeholder={selectedOption?.label || placeholder}
        value={changeValue}
        onClick={setTrue}
        onChange={handleChange}
        className={cn(
          "cursor-default mb-1",
          {
            "placeholder:text-gray-700": selectedOption?.value,
          },
          className
        )}
      />
      {selectedOption?.value && clearable && (
        <IconButton
          className="absolute right-1 top-3 bg-transparent hover:bg-gray-100"
          onClick={() => setSelectedOption({ label: "", value: "" })}
        >
          <IoClose />
        </IconButton>
      )}
      <ul
        ref={menuRef}
        className={cn("shadow-lg border border-gray-300 absolute w-full z-20 bg-white rounded", {
          hidden: !isOpen,
        })}
      >
        {filteredOptions.map((option) => (
          <li key={option.value}>
            <button
              className={cn(
                "w-full text-left px-3 py-2  hover:bg-gray-50 border-b border-b-gray-200 cursor-default",
                {
                  "bg-blue-200 hover:bg-blue-200":
                    selectedOption?.value == option?.value,
                }
              )}
              onClick={() => {
                setFalse();
                setSelectedOption(option);
                setChangeValue("");
                setFilteredOptions(options);
              }}
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Autocomplete;
