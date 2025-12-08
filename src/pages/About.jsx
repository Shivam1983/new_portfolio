const About = () => {
  return (
    <div className="mt-20 min-h-[500px] px-4">
      <div className="max-w-7xl mx-auto break-words">
        {/* Header Section with Animation */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/50 shadow-xl">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Hello! I’m <strong>Divyansh Verma</strong>, a passionate MCA student currently in the 3rd year of a 5-year integrated program. I’m enthusiastic about how technology shapes the world and driven by the curiosity to learn how real-world systems are built.
            </p>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mt-4">
              I enjoy writing clean and efficient code, solving problems, and continuously sharpening my skills to become a strong software developer. Whether it’s building academic projects or experimenting with new tools and technologies, I’m always excited to explore, create, and improve.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/20 backdrop-blur-lg p-6 rounded-2xl border border-blue-700/30 shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold text-blue-300 mb-4">CURRENTLY FOCUSING ON</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>Strengthening my fundamentals in Software Development</li>
              <li>Learning Data Structures, Algorithms</li>
              <li>Working on academic and personal projects to gain hands-on experience</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/50 shadow-xl">
            <p className="text-gray-200 text-base md:text-lg leading-relaxed">
              Right now, I’m in my learning and growth phase — building a solid technical foundation for the future. This portfolio reflects my journey, and I aim to keep enhancing it with new and better projects as I progress.
            </p>
            <p className="text-gray-300 text-sm mt-4">Thank you for checking out my portfolio! I’m excited to learn, innovate, and contribute to meaningful tech solutions ahead.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
