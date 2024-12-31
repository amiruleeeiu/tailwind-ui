import { useEffect, useState } from "react";

function Progressbar({ time = 30 }: Readonly<{ time?: number }>) {
  const [width, setWidth] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setWidth((prevWidth) => {
        if (prevWidth <= 100) {
          return prevWidth - 1;
        }

        return prevWidth + 1;
      });
    }, time);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full bg-green-600 rounded h-1">
      <div
        className="bg-green-400 h-1 rounded"
        style={{ width: `${width}%`, transition: "width 0.001s ease-in-out" }}
      ></div>
    </div>
  );
}

export default Progressbar;
