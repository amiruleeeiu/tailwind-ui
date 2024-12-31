import cn from "@/utils/cn";
import { useState } from "react";
import Button from "../Button";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div>
      <Button
        onMouseOver={() => {
          setIsOpen(true);
        }}
      >
        Open
      </Button>

      <div
        className={cn(
          "fixed h-screen w-screen hidden bg-gray-600 bg-opacity-50 inset-0 z-50 ",
          { "flex justify-center items-center": isOpen }
        )}
      >
        <div className="bg-white shadow rounded w-[500px] h-[300px]"></div>
      </div>
    </div>
  );
}

export default Modal;
