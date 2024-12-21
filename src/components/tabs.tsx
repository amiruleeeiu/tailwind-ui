import cn from "@/utils/cn";
import { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Account", content: "User profile information 1" },
    { label: "Profile", content: "User profile information 2" },
    { label: "Settings", content: "User profile information 3" },
  ];
  return (
    <div>
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={cn(
            "px-5 py-2 relative ",
            activeTab === index
              ? "top-[1] border-x-2 border-t-2 border-blue-500 rounded-t"
              : "top-[-1] border-b-2  border-b-blue-500 rounded-t"
          )}
        >
          {tab.label}
        </button>
      ))}

      <div className="mt-4">{tabs[activeTab].content}</div>
    </div>
  );
}

export default Tabs;
