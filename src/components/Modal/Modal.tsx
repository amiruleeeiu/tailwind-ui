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
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  outsideClick?: boolean;
  isOpen: boolean;
  onClose: () => void;
}>) {
  const modalRef = useRef<HTMLDivElement>(null);

  const sizeClass = {
    sm: "w-1/3 h-1/4",
    md: "w-1/2 h-1/2",
    lg: "w-4/5 h-4/5",
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

  return (
    <div>
      <ModalContext.Provider value={{ isOpen, onClose }}>
        <div
          className={cn(
            "fixed h-screen w-screen hidden bg-gray-600 bg-opacity-50 inset-0 z-50",
            { "flex justify-center items-center": isOpen }
          )}
        >
          <div
            ref={modalRef}
            className={cn(
              "bg-white shadow rounded w-full h-full flex flex-col justify-between",
              sizeClass[size]
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
        <IconButton onClick={onClose}>
          <IoCloseSharp size={20} />
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
