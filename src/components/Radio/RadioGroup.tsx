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

  return (
    <div className="flex items-center space-x-3">
      {props.options.map((option) => {
        const isActive = checked === option.value;
        return (
          <div
            key={option.value}
            className={cn("flex items-center space-x-2", props.className)}
          >
            <input
              {...props}
              type="checkbox"
              id={option.value}
              checked={isActive}
              className="hidden"
              onChange={() => setChecked(option.value)}
            />
            <button
              onClick={() => setChecked(option.value)}
              className={cn(
                "h-5 w-5 p-[2px] border-2 border-gray-400 rounded-full flex items-center justify-center focus:outline-none",
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
    </div>
  );
}

export default RadioGroup;
