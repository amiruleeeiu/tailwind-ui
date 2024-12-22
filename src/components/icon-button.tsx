import cn from "@/utils/cn";
import { ButtonHTMLAttributes, ClassAttributes, JSX } from "react";

function IconButton(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLButtonElement> &
    ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      className={cn(
        `flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 duration-300`,
        props.disabled && "opacity-50 cursor-not-allowed",
        props.className
      )}
    >
      {props.children}
    </button>
  );
}

export default IconButton;
