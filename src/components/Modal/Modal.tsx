import cn from "@/utils/cn";
import { createContext, useContext, useEffect, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import IconButton from "../icon-button";

const ModalContext = createContext<{
  isOpen: boolean;
  onClose: () => void;
} | null>(null);

function Modal({
  size = "md",
  children,
  outsideClick = true,
  isOpen,
  onClose,
}: Readonly<{
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
  outsideClick?: boolean;
  isOpen: boolean;
  onClose: () => void;
}>) {
  const modalRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    xs: "max-w-lg h-36",
    sm: "max-w-xl h-96",
    md: "max-w-3xl h-[80vh]",
    lg: "max-w-5xl h-[80vh]",
    xl: "max-w-7xl h-[90vh]",
  };

  console.log(modalRef?.current);
  const handleOutsideClick = (event: MouseEvent) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target as Node) &&
      outsideClick
    ) {
      onClose();
    }
  };

  // Add event listener for outside click when modal is open
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    // Cleanup on component unmount or modal close
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable body scroll
    } else {
      document.body.style.overflow = "auto"; // Re-enable body scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isOpen]);

  return (
    <div>
      <ModalContext.Provider value={{ isOpen, onClose }}>
        <div
          className={cn(
            "fixed h-screen w-screen hidden bg-black bg-opacity-60 inset-0 z-50",
            { "flex justify-center items-center": isOpen }
          )}
        >
          <div
            ref={modalRef}
            className={cn(
              "bg-white shadow rounded w-full h-full flex flex-col justify-between",
              sizeClasses[size]
            )}
          >
            {children}
          </div>
        </div>
      </ModalContext.Provider>
    </div>
  );
}

export default Modal;

export const ModalHeader = ({ children }: ModalHeaderProps) => {
  const { onClose } = useContext(ModalContext)!;
  return (
    <div className="flex justify-between items-center px-3 py-2 border-b">
      <div className="text-lg font-semibold text-gray-700">{children}</div>
      <div>
        <IconButton onClick={onClose} className="bg-white text-gray-700">
          <IoCloseSharp size={26} />
        </IconButton>
      </div>
    </div>
  );
};

export const ModalBody = ({ children }: ModalHeaderProps) => {
  return <div className="flex-1 p-3 px-5 overflow-auto">{children}</div>;
};

interface ModalHeaderProps {
  children?: React.ReactNode;
  onSubmit?: () => void;
  isSubmitLoading?: boolean;
}

interface ModalFooterProps {
  children: (props: { onClose: () => void }) => React.ReactNode;
}

export const ModalFooter = ({ children }: ModalFooterProps) => {
  const { onClose } = useContext(ModalContext)!;
  return (
    <div className="p-3">
      <div className="flex justify-end items-center gap-2 ">
        {/* <Button onClick={onClose} color="default">
          Cancel
        </Button> */}
        {children({ onClose })}
      </div>
    </div>
  );
};
