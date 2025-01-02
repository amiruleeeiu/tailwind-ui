import cn from "@/utils/cn";
import { HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}

function Heading({ ...props }: Readonly<HeadingProps>) {
  const { size = "md", color = "dark" } = props;

  const sizeClasses = {
    "2xl": "text-5xl font-bold ",
    xl: "text-4xl font-bold ",
    lg: "text-3xl font-semibold ",
    md: "text-2xl font-semibold ",
    sm: "text-xl font-medium ",
    xs: "text-base font-medium ",
  };

  const colorClasses = {
    primary: "text-sky-500",
    secondary: "text-secondary-500",
    success: "text-green-500",
    danger: "text-red-500",
    warning: "text-orange-500",
    info: "text-blue-500",
    light: "text-gray-500",
    dark: "text-black",
  };

  return (
    <h1
      size={size}
      {...props}
      className={cn(
        ` ${sizeClasses[size]} ${colorClasses[color]}`,
        props.className
      )}
    >
      {props.children}
    </h1>
  );
}

export default Heading;
