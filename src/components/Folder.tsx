import React, { useState, useEffect, useRef } from "react";
import "../styles/Folder.css";

function Folder() {
  const tabs = ["About", "Education", "Projects", "Experiences", "Resume"];

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string | null>(tabs[0]);

  useEffect(() => {
    // for initial load
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setContainerHeight(containerRef.current.offsetHeight);
    }

    const getWidthAndHeightListener = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setContainerHeight(containerRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", getWidthAndHeightListener);

    return () =>
      window.removeEventListener("resize", getWidthAndHeightListener);
  }, []);

  return (
    <div className="folder">
      <FolderTabs
        tabs={tabs}
        containerWidth={containerWidth}
        containerHeight={containerHeight}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div ref={containerRef} className="folder-container">
        <div className="folder-content">
          {containerWidth}x{containerHeight}
        </div>
      </div>
    </div>
  );
}

type FolderTabsProps = {
  tabs: string[];
  containerWidth: number;
  containerHeight: number;
  activeTab: string | null;
  setActiveTab: React.Dispatch<React.SetStateAction<string | null>>;
};

function FolderTabs({
  tabs,
  containerWidth,
  containerHeight,
  activeTab,
  setActiveTab,
}: FolderTabsProps) {
  const numberOfTabs = tabs.length;

  const [tabWidth, setTabWidth] = useState<number>(
    containerWidth / numberOfTabs
  );

  const [tabHeight, setTabHeight] = useState<number>(
    containerHeight / numberOfTabs
  );

  useEffect(() => {
    setTabWidth(containerWidth / numberOfTabs);
  }, [containerWidth]);

  useEffect(() => {
    setTabHeight(containerHeight / numberOfTabs);
  }, [containerHeight]);

  return (
    <>
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
      <div className="tabs-container-mobile">
        {tabs.map((tab) => (
          <button
            onClick={() => setActiveTab(tab)}
            className={`folder-tab ${activeTab === tab ? "active" : ""}`}
            style={{ height: `${tabHeight - 2}px` }}
          >
            <div className="folder-tab-title">{tab}</div>
          </button>
        ))}
      </div>
    </>
  );
}

export default Folder;
