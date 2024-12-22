import { useState } from "react";

function Tabs() {
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="border border-gray-300 rounded-md p-4">
      {/* Tab List */}
      <div className="flex items-center ">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`cursor-pointer px-4 py-2 ${
              activeTab === index
                ? "border-t border-x border-gray-300 bg-white rounded-t-md box-border"
                : "border-b border-gray-300 box-border"
            }`}
            onClick={() => setActiveTab(index)}
          >
            <span className="font-medium">{tab}</span>
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4  rounded-b-md">
        <h2 className="text-lg font-bold mb-2">{tabs[activeTab]} Content</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
        </p>
      </div>
    </div>
  );
}

export default Tabs;
