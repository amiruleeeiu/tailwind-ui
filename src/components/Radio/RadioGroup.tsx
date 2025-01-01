import cn from "@/utils/cn";
import { useState } from "react";

function RadioGroup(
  props: Readonly<
    React.InputHTMLAttributes<HTMLInputElement> & {
      options: { label: string; value: string }[];
    }
  >
) {
  const [checked, setChecked] = useState("");

  const handleCheckboxChange = (value: string) => {
    console.log(value);
    // setChecked(value ? "" : value);
  };

  console.log(props.options);

  console.log(checked);

  return (
    <>
      {props.options.map((option) => {
        const isActive = checked === option.value;
        return (
          <div
            key={option.value}
            className={cn("flex items-center space-x-1", props.className)}
          >
            <input
              {...props}
              id={option.value}
              checked={isActive}
              className="hidden"
              onChange={() => setChecked(option.value)}
            />
            <button
              onClick={() => setChecked(option.value)}
              className={cn(
                "h-4 w-4 p-[2px] border border-gray-300 rounded-full flex items-center justify-center focus:outline-none",
                { "border-blue-600": isActive }
              )}
            >
              <div
                className={cn(
                  "w-full h-full cursor-default rounded-full flex items-center justify-center text-white",
                  {
                    "bg-blue-500": isActive,
                    "bg-white ": !isActive,
                  }
                )}
              ></div>
            </button>
            <label
              htmlFor={option.value}
              className="select-none font-medium text-gray-600"
            >
              {option.label}
            </label>
          </div>
        );
      })}
    </>
  );
}

export default RadioGroup;
