import cn from "@/utils/cn";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputSize?: "sm" | "md" | "lg";
}

function Input(props: Readonly<InputProps>) {
  const { inputSize = "md", label, className, ...rest } = props;

  const sizeClasses = {
    lg: "px-4 py-3 text-xl",
    md: "px-3 py-2",
    sm: "px-3 py-1",
  };

  return (
    <div>
      {label && (
        <label htmlFor={props.name} className="text-gray-700 font-medium">
          {label}
        </label>
      )}
      <input
        type="text"
        className={cn(
          "my-2 border border-gray-300 py-2 px-3 rounded w-full outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 duration-300 font-normal text-gray-800",
          sizeClasses[inputSize],
          className
        )}
        {...rest}
      />
    </div>
  );
}

export default Input;
