import React, { useState, useEffect, useRef } from "react";
import "../styles/Folder.css";
import About from "./About";
// import Education from "./Education";
import Projects from "./Projects";
import Experience from "./Experience";
import Other from "./Other";

function Folder() {
  const tabs = ["ABOUT", "PROJECTS", "EXPERIENCES", "CONNECT"];

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
          {activeTab === "ABOUT" && <About />}
          {/* {activeTab === "Education" && <Education />} */}
          {activeTab === "PROJECTS" && <Projects />}
          {activeTab === "EXPERIENCES" && <Experience />}
          {activeTab === "CONNECT" && <Other />}
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
            key={tab}
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
            key={tab}
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
