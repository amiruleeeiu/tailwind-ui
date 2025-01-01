import cn from "@/utils/cn";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

function Checkbox(
  props: Readonly<
    React.InputHTMLAttributes<HTMLInputElement> & { label: string }
  >
) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className={cn("flex items-center space-x-2", props.className)}>
      <input
        {...props}
        type="checkbox"
        id={props.name}
        checked={checked}
        onChange={handleCheckboxChange}
        className="hidden"
      />
      <button
        onClick={handleCheckboxChange}
        className={cn(
          "h-5 w-5 cursor-default rounded-sm flex items-center justify-center text-white",
          {
            "bg-blue-500": checked,
            "bg-white border border-gray-300": !checked,
          }
        )}
      >
        <FaCheck size={16} />
      </button>
      <label
        htmlFor={props.name}
        className="select-none font-medium text-gray-600"
      >
        {props.label}
      </label>
    </div>
  );
}

export default Checkbox;
