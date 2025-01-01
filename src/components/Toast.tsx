/* eslint-disable react-hooks/exhaustive-deps */
import cn from "@/utils/cn";
import { useEffect, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import Button from "./Button";

interface ToastProps {
  duration?: number;
  type?: "success" | "error" | "warning";
}

function Toast({ duration = 3000, type = "success" }: Readonly<ToastProps>) {
  const time = duration / 100;
  const [open, setOpen] = useState(false);

  const [width, setWidth] = useState(100);

  const colorClass = {
    success: "bg-green-600",
    error: "bg-red-600",
    warning: "bg-orange-600",
  };

  const progressClass = {
    success: "bg-green-300",
    error: "bg-red-300",
    warning: "bg-orange-300",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setWidth((prevWidth) => {
        if (prevWidth <= 100 && open && prevWidth > 0) {
          return prevWidth - 1;
        }

        return prevWidth;
      });
    }, time);
    return () => clearInterval(interval);
  }, [open]);

  console.log(width);

  useEffect(() => {
    if (width == 0) {
      setOpen(false);
    }
  }, [width]);

  useEffect(() => {
    if (open) {
      setWidth(100);
    }
  }, [open]);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Click me</Button>
      <div
        className={cn(
          "fixed top-0 right-0  text-white rounded z-50 transition-transform transform duration-200",
          open ? "translate-x-0 m-3" : "translate-x-full my-3",
          colorClass[type]
        )}
      >
        <div className="flex gap-2 p-4 ">
          <div className="flex items-center gap-2">
            <FiCheckCircle size={20} />
            <p className=" tracking-normal ">Client Successfully updated</p>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-white hover:text-green-800 duration-300"
          >
            <IoCloseSharp size={20} />
          </button>
        </div>
        <div
          className={cn("w-full bg-green-600 rounded h-1", colorClass[type])}
        >
          <div
            className={cn("h-1 rounded", progressClass[type])}
            style={{
              width: `${width}%`,
              transition: "width 0.001s ease-in-out",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Toast;
