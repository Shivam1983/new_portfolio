import linkedInimg from "../assets/icons8-linkedin-50.png";
import gitHubimg from "../assets/icons8-github-96.png";
// using local medicaps image from assets
import medicaps_image from "../assets/medicaps_image.jpg";
import kvlogo from "../assets/kv.png";
import cpp from "../assets/icons8-c++-96.png";
import python from "../assets/icons8-python-96.png";
import js from "../assets/icons8-javascript-96.png";
import htm from "../assets/icons8-html-96.png";
import css from "../assets/icons8-css-96.png";
import sq from "../assets/icons8-sql-64.png";
import vs from "../assets/icons8-vs-code-96.png";

const projData = [
  {
    name: "VirtuFit-AR-Platform",
    desc: "A lightweight virtual try-on prototype developed during a hackathon to demonstrate AR-style overlays and quick product previews.",
    tech: "React, WebGL/Three.js, Tailwind CSS",
  },
];

const dataObj = {
  Profile: {
      content: (
      <div className="text-white flex flex-col h-[100%] w-[100%] space-y-4">
        <div className="space-y-2">
          <p className="text-lg md:text-2xl font-semibold">
            <span className="text-gray-400">Name:</span>{" "}
            <span className="text-white">Divyansh Verma</span>
          </p>
          <p className="text-lg md:text-2xl font-semibold">
            <span className="text-gray-400">Email:</span>{" "}
            <span className="text-white">divyanshv9114@gmail.com</span>
          </p>
        </div>
        <div className="mt-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
          <p className="text-sm md:text-base text-gray-300">
            I&apos;m a Software Enthusiast and Technology Learner focused on
            building practical solutions, learning machine learning, and
            improving software engineering skills.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mt-auto pt-4">
          <a
            href="https://www.linkedin.com/in/divyansh-verma-311570314/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-blue-600/20 rounded-lg border border-blue-500/30 hover:scale-105 transition-transform text-sm">
            <img src={linkedInimg} className="w-8 sm:w-10" alt="LinkedIn" />
            <span className="text-sm text-gray-300">LinkedIn</span>
          </a>
          <a
            href="https://github.com/divyanshv123"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-gray-700/20 rounded-lg border border-gray-600/30 hover:scale-105 transition-transform text-sm">
            <img src={gitHubimg} className="w-8 sm:w-10" alt="GitHub" />
            <span className="text-sm text-gray-300">GitHub</span>
          </a>
        </div>
      </div>
    ),
  },

  Projects: {
    content: (
      <div className="flex flex-col gap-y-8 text-gray-100">
        <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Projects
        </h2>
        {projData.map((item, index) => (
          <div
            key={index}
            className="group p-4 sm:p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <h3 className="text-xl md:text-3xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
              {item.name}
            </h3>
            <p className="text-sm md:text-lg mb-4 text-gray-300 leading-relaxed">
              {item.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs md:text-sm font-semibold text-gray-400">
                Tech Stack:
              </span>
              <p className="text-xs md:text-sm text-cyan-300 break-words">
                {item.tech}
              </p>
            </div>
          </div>
        ))}
      </div>
    ),
  },

  // Achievements section removed per user request

  Education: {
    content: (
      <div className="h-full flex flex-col text-gray-200 space-y-6">
        <h2 className="text-2xl md:text-4xl mb-6 font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="flex flex-col gap-4">
          <div className="relative p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-start gap-4">
              <img src={medicaps_image} className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg p-1 shadow-lg object-contain" alt="MCA" />
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400">2023 - 2028</span>
                  <span className="ml-auto bg-cyan-500 text-white text-xs px-2 py-1 rounded-full">Currently in 3rd Year</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mt-2">MCA 5 years - Master of Computer Applications</h3>
                <p className="text-sm text-gray-300">DAVV - International Institute of Professional Studies</p>
                <p className="text-xs text-gray-400 mt-1">Indore, Madhya Pradesh</p>
                <p className="text-sm text-gray-300 mt-2">Five-year integrated program focusing on advanced computer science, software engineering, and modern application development.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-900/30 text-cyan-300 px-3 py-1 rounded-full">Data Science</span>
                  <span className="text-xs bg-blue-900/30 text-cyan-300 px-3 py-1 rounded-full">Data Structures & Algorithms</span>
                  <span className="text-xs bg-blue-900/30 text-cyan-300 px-3 py-1 rounded-full">Web Development</span>
                  <span className="text-xs bg-blue-900/30 text-cyan-300 px-3 py-1 rounded-full">Database Management</span>
                  <span className="text-xs bg-blue-900/30 text-cyan-300 px-3 py-1 rounded-full">Software Engineering</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-start gap-4">
              <img src={kvlogo} className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg shadow-lg" alt="School" />
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400">2022 - 2023</span>
                  <span className="ml-auto bg-green-500 text-white text-xs px-2 py-1 rounded-full">Completed</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mt-2">Higher Secondary Education - PCM</h3>
                <p className="text-sm text-gray-300">Kendriya Vidyalaya No2 Indore</p>
                <p className="text-xs text-gray-400 mt-1">Indore, Madhya Pradesh</p>
                <p className="text-sm text-gray-300 mt-2">Completed with focus on Physics, Chemistry and Mathematics.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-900/30 text-cyan-300 px-3 py-1 rounded-full">Mathematics</span>
                  <span className="text-xs bg-blue-900/30 text-cyan-300 px-3 py-1 rounded-full">Physics</span>
                  <span className="text-xs bg-blue-900/30 text-cyan-300 px-3 py-1 rounded-full">Chemistry</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  Skills: {
    content: (
      <div className="h-full flex flex-col justify-around text-gray-200 lg:text-[25px] md:text-[20px] text-[18px] gap-y-4">
        <h2 className="text-2xl md:text-4xl mb-3 font-bold">Skills</h2>
        <h3 className="font-bold underline">Languages</h3>
        <div className="flex gap-x-4 items-center flex-wrap gap-y-2">
          <img src={cpp} className="w-10 md:w-11 lg:w-12" alt="C++" />
          <img src={python} className="w-10 md:w-11 lg:w-12" alt="Python" />
        </div>

        <h3 className="font-bold underline">Coursework </h3>
        <div className="flex gap-x-6 items-center flex-wrap text-[15px] sm:text-[18px]">
          <p>DSA</p>
          <p>DBMS</p>
          <p>OS</p>
          <p>OOPs</p>
        </div>

        <h3 className="font-bold underline">Frameworks & Tech </h3>
        <div className="flex gap-x-4 items-center flex-wrap gap-y-2 content-start">
          <img src={htm} className="w-10 md:w-11 lg:w-12" alt="HTML" />
          <img src={js} className="w-10 md:w-11 lg:w-12" alt="JavaScript" />
          <img src={css} className="w-10 md:w-11 lg:w-12" alt="CSS" />
          <img src={sq} className="w-10 md:w-11 lg:w-12" alt="SQL" />
        </div>

        <h3 className="font-bold underline">Tools </h3>
        <div className="flex gap-x-4 items-center flex-wrap gap-y-2">
          <img src={gitHubimg} className="w-10 md:w-11 lg:w-12" alt="GitHub" />
          <img src={vs} className="w-10 md:w-11 lg:w-12" alt="VS Code" />
        </div>
      </div>
    ),
  },
};

export default dataObj;
