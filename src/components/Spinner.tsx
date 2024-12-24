import React from "react";

type SpinnerProps = {
  size?: number; // Size of the spinner
  color?: string; // Spinner color
  trackColor?: string; // Track color
};

const Spinner: React.FC<SpinnerProps> = () => {
  // Adjust border thickness based on spinner size

  return (
    <div className="inline-block h-4 w-4 me-2 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_0.5s_linear_infinite]"></div>
  );
};

export default Spinner;
