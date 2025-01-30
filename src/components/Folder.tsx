import React, { useState, useEffect, useRef } from "react";
import "../styles/Folder.css";

function Folder() {
  const tabs = ["Projects", "Experiences", "About", "Education"];

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  useEffect(() => {
    // for initial load
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }

    const getWidthListener = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", getWidthListener);

    return () => window.removeEventListener("resize", getWidthListener);
  }, []);

  return (
    <div className="folder">
      <FolderTabs
        tabs={tabs}
        containerWidth={containerWidth}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div ref={containerRef} className="folder-container">
        <div className="folder-content">{containerWidth}</div>
      </div>
    </div>
  );
}

type FolderTabsProps = {
  tabs: string[];
  containerWidth: number;
  activeTab: string | null;
  setActiveTab: React.Dispatch<React.SetStateAction<string | null>>;
};

function FolderTabs({
  tabs,
  containerWidth,
  activeTab,
  setActiveTab,
}: FolderTabsProps) {
  const numberOfTabs = tabs.length;

  const [tabWidth, setTabWidth] = useState<number>(
    containerWidth / numberOfTabs
  );

  useEffect(() => {
    setTabWidth(containerWidth / numberOfTabs);
  }, [containerWidth]);

  return (
    <div className="tabs-container">
      {tabs.map((tab) => (
        <button
          onClick={() => setActiveTab(tab)}
          className={`folder-tab ${activeTab === tab ? "active" : ""}`}
          style={{ width: `${tabWidth - 2}px` }}
        >
          <div className="folder-tab-title">{tab}</div>
        </button>
      ))}
    </div>
  );
}

export default Folder;
