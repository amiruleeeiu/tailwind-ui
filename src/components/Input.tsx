import { ClassAttributes, InputHTMLAttributes, JSX } from "react";

function Input(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLInputElement> &
    InputHTMLAttributes<HTMLInputElement> & { label: string }
) {
  return (
    <div>
      <label htmlFor={props.name} className="text-gray-700 font-medium">
        {props.label}
      </label>
      <input
        type="text"
        className="my-2 border border-gray-300 py-2 px-3 rounded w-full outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 font-normal text-gray-800"
        {...props}
      />
    </div>
  );
}

export default Input;
