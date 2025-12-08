import React, { useState } from "react";
import profimg from "../assets/person_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png";
import eduimg from "../assets/icons8-education-50.png";
import skillimg from "../assets/icons8-skills-50.png";
import projimg from "../assets/icons8-projects-50.png";
// achievement tab removed per request
import dataObj from "./ResumeData";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const tabItems = [
    { name: "Profile", icon: profimg },
    { name: "Education", icon: eduimg },
    { name: "Skills", icon: skillimg },
    { name: "Projects", icon: projimg },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsDropdownOpen(false);
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto px-6 md:px-8 break-words">
        {/* Animated Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white animate-slide-in-title">
            Resume
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full animate-expand"></div>
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full inline-flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 shadow-lg">
            <span className="flex items-center gap-3">
              <img
                src={tabItems.find((t) => t.name === activeTab)?.icon}
                alt="icon"
                className="w-6 h-6"
              />
              {activeTab}
            </span>
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>

          {isDropdownOpen && (
            <ul className="mt-3 space-y-2 bg-gray-900/95 backdrop-blur-lg rounded-xl border border-gray-700 p-2 shadow-2xl animate-fade-in-up">
              {tabItems.map((tab) => (
                <li key={tab.name}>
                  <button
                    onClick={() => handleTabClick(tab.name)}
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeTab === tab.name
                        ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg scale-105"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}>
                    <img
                      src={tab.icon}
                      alt={`${tab.name} icon`}
                      className="w-5 h-5"
                    />
                    {tab.name}
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 p-4 sm:p-8 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-lg rounded-2xl border border-gray-700 shadow-2xl animate-fade-in-up max-w-full overflow-x-hidden">
            {dataObj[activeTab].content}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex gap-6 justify-center w-full">
          {/* Sidebar Tabs */}
          <div className="w-52 space-y-2">
            {tabItems.map((tab, index) => (
              <button
                key={tab.name}
                onClick={() => handleTabClick(tab.name)}
                className={`group relative inline-flex items-center gap-2 w-full px-4 py-3 rounded-xl font-medium transition-all duration-300 animate-fade-in-up text-sm ${
                  activeTab === tab.name
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/30 scale-105"
                    : "bg-gray-800/80 text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-102 border border-gray-700 hover:border-cyan-500/50"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}>
                <img
                  src={tab.icon}
                  alt={`${tab.name} icon`}
                  className="w-5 h-5"
                />
                {tab.name}
                {activeTab === tab.name && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div
            className={`p-4 md:p-8 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-lg rounded-2xl border border-gray-700 shadow-2xl min-h-[380px] animate-fade-in-up animation-delay-200 transition-all duration-300 ${
              activeTab === "Projects"
                ? "md:flex-[0.82] lg:flex-[0.78]"
                : "flex-1"
            }`}
            style={{ marginLeft: "auto", marginRight: "auto" }}>
            {dataObj[activeTab].content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
