import { useEffect, useRef, useState } from "react";
import Button from "./Button";

function Popover() {
  const [isShow, setIsShow] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node)
      ) {
        setIsShow(false);
      }
    };

    document.addEventListener("mouseout", handleClickOutside);
    return () => document.removeEventListener("mouseout", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <Button
        onMouseOver={() => {
          setIsShow(true);
        }}
      >
        Popover
      </Button>
      {isShow && (
        <div
          ref={contentRef}
          className="absolute bg-white border shadow-md p-4 mt-1 rounded"
        >
          <p>
            Popover content Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Qui aut doloremque repellendus magni
          </p>
        </div>
      )}
    </div>
  );
}

export default Popover;
