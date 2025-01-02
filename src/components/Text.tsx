import cn from "@/utils/cn";
import React from "react";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

function Text(props: Readonly<TextProps>) {
  const { size = "md", ...rest } = props;
  const sizeClasses = {
    xl: "text-4xl font-medium",
    lg: "text-3xl font-medium",
    md: "text-2xl",
    sm: "text-xl",
    xs: "text-base",
  };
  return (
    <p
      className={cn("text-gray-700", sizeClasses[size], props.className)}
      {...rest}
    >
      {props.children}
    </p>
  );
}

export default Text;
