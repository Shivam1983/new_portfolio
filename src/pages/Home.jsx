import React from "react";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <div className="mt-20 min-h-[500px] px-4 break-words">
      <div
        role="status"
        className="space-y-8 flex flex-wrap-reverse justify-center md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center md:justify-around md:w-[80%] m-auto md:flex-nowrap">
        <div className="w-full">
          <div className="text-center md:text-start">
            <h1 className="text-[25px] md:text-[40px] pb-4 break-words">
              Hi There!
            </h1>
          </div>
          <div className="text-center md:text-start">
            <h1 className="text-[25px] pb-4 md:text-[40px] break-words">
              I'm <strong>Divyansh Verma</strong>
            </h1>
          </div>

          <div className="my-3 text-center md:text-start">
            <p className="text-[16px] md:text-[18px] leading-relaxed">
              I build models, solve real-world problems, and create digital
              tools that help people perform better—sharpening my skills in
              Python, Machine Learning, and Analytics.
            </p>
          </div>

          <div className="text-[25px] font-bold text-center md:text-start md:text-[40px]">
            <Typewriter
              options={{
                strings: [
                  "Software Enthusiast",
                  "Technology Learner",
                  "Coding Enthusiast",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="flex-shrink-0">
          <img
            className="rounded-full border-4 border-gray-400 w-48 md:w-96 max-w-full h-auto"
            src="https://img.freepik.com/premium-photo/software-engineer-digital-avatar-generative-ai_934475-8997.jpg"
            alt="developer"
          />
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Home;
