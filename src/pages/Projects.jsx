import React from "react";

const prjData = [
  {
    name: "VirtuFit-AR-Platform",
    desc: "An innovative virtual try-on solution built for hackathon competitions. Leverages cutting-edge technology to provide immersive product visualization experiences.",
    code: "https://github.com/divyanshv123/VirtuFit-AR-Platform",
    tech: "React, JavaScript, Computer Vision, WebGL",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-slide-in-title">
            <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 mx-auto rounded-full animate-expand"></div>
        </div>
      </div>

      {/* Full-width centering wrapper */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-4xl px-4">
          <div className="grid grid-cols-1 gap-8 justify-items-center">
            {prjData.map((item, index) => (
              <article
                key={index}
                className="w-full bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-purple-500/30 hover:border-purple-500/50">
                <div className="relative h-56 sm:h-48 md:h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => (e.target.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80")}
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-gray-300 text-sm md:text-base mb-4">{item.desc}</p>

                  <p className="text-xs text-gray-400 font-semibold mb-2">Tech Stack:</p>
                  <p className="text-xs text-blue-300 mb-4 break-words">{item.tech}</p>

                  <a
                    href={item.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300">
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
