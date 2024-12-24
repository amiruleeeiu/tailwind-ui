import cn from "@/utils/cn";
import Spinner from "./Spinner";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "error" | "warning" | "success" | "default";
  children: React.ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  className?: string;
}

function Button({
  color = "primary",
  isLoading = false,
  loadingText,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseClass = "duration-300 text-white font-semibold py-2 px-4 rounded";
  const primaryColor = "bg-blue-500 hover:bg-blue-600";
  const successColor = "bg-green-600 hover:bg-green-700";
  const warningColor = "bg-orange-600 hover:bg-orange-700";
  const errorColor = "bg-red-600 hover:bg-red-700";
  const defaultColor = "border bg-gray-100 hover:bg-gray-200 text-gray-700";

  const classNames = {
    default: defaultColor,
    primary: primaryColor,
    success: successColor,
    warning: warningColor,
    error: errorColor,
  };

  return (
    <button
      disabled={isLoading}
      className={cn(
        baseClass,
        classNames[color as keyof typeof classNames],
        {
          "opacity-70 cursor-not-allowed": props.disabled || isLoading,
        },
        className
      )}
      {...props}
    >
      {isLoading && <Spinner />}
      {loadingText ? loadingText : children}
    </button>
  );
}

export default Button;
