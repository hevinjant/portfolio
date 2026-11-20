import React, { useState, useEffect, useRef } from "react";
import "../styles/Folder.css";
import About from "./About";
// import Education from "./Education";
import Projects from "./Projects";
import Experience from "./Experience";
import Other from "./Other";
import { useSessionStorage } from "../custom_hooks/useSessionStorage";

function Folder() {
  const tabs = ["ABOUT", "PROJECTS", "EXPERIENCES", "CONNECT"];

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [activeTab, setActiveTab] = useSessionStorage<string>(
    "active_tab",
    tabs[0]
  );

  useEffect(() => {
    // for initial load
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }

    const getWidthAndHeightListener = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", getWidthAndHeightListener);

    return () =>
      window.removeEventListener("resize", getWidthAndHeightListener);
  }, []);

  return (
    <div className="folder">
      <div className="folder-top">
        <header className="portfolio-header" aria-label="Portfolio identity">
          <div>
            <p className="portfolio-kicker">Portfolio archive</p>
            <h1>HEVIN JANTASMIN</h1>
          </div>
          <span className="archive-mark">HJ / 2026</span>
        </header>
        <FolderTabs
          tabs={tabs}
          containerWidth={containerWidth}
          activeTab={activeTab as string}
          setActiveTab={
            setActiveTab as React.Dispatch<React.SetStateAction<string>>
          }
        />
      </div>
      <div ref={containerRef} className="folder-container">
        <div key={activeTab as string} className="folder-content">
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
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
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
          >
            <div className="folder-tab-title">{tab}</div>
          </button>
        ))}
      </div>
    </>
  );
}

export default Folder;
