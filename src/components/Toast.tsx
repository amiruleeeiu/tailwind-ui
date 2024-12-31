/* eslint-disable react-hooks/exhaustive-deps */
import cn from "@/utils/cn";
import { useEffect, useRef, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import Button from "./Button";

function Toast({ duration = 3000 }: Readonly<{ duration?: number }>) {
  const time = duration / 100;
  const [open, setOpen] = useState(false);

  const toastRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(100);

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

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      toastRef.current &&
      !toastRef.current.contains(event.target as Node) &&
      open
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [open]);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Click me</Button>
      <div
        ref={toastRef}
        className={cn(
          "fixed top-0 right-0  m-4 bg-green-600 text-white rounded z-50",
          { hidden: !open }
        )}
      >
        <div className="flex gap-2 p-4">
          <div className="flex items-center gap-2">
            <FiCheckCircle size={20} />
            <p className=" font-medium tracking-wide ">
              Client Successfully updated
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-white hover:text-green-800 duration-300"
          >
            <IoCloseSharp size={20} />
          </button>
        </div>
        <div className="w-full bg-green-600 rounded h-1">
          <div
            className="bg-green-300 h-1 rounded"
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
