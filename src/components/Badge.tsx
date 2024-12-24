import cn from "@/utils/cn";

function Badge({
  children,
  color,
}: {
  children: React.ReactNode;
  color?: string;
}) {
  const defaultColor = "text-gray-600 ";
  const successColor = "bg-sky-600 text-white ";
  const warningColor = "bg-orange-600 text-white";
  const errorColor = "bg-red-600 text-white";

  const classNames = {
    default: defaultColor,
    success: successColor,
    warning: warningColor,
    error: errorColor,
  };

  return (
    <span
      className={cn(
        "bg-gray-200 text-base px-3 py-1 rounded-full",
        classNames[color as keyof typeof classNames]
      )}
    >
      {children}
    </span>
  );
}

export default Badge;
