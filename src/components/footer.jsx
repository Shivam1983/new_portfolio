// React import not required with new JSX transform

import linkedimg from "../assets/icons8-linkedin-50.png";
import instaimg from "../assets/icons8-instagram-50.png";

const Footer = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-around items-center bg-gray-800 text-white mt-10 mb-0 p-4 gap-3">
      <p className="hidden md:block">Developed by Divyansh Verma</p>
      <p className="hidden md:block">@copyright2025</p>
      <p className="block md:hidden">@copyright2025</p>
      <div className="flex gap-2">
        <a
          href="https://www.instagram.com/v_divyansh_/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="px-1 md:px-4">
          <img className="w-7" src={instaimg} alt="instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/divyansh-verma-311570314/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-1 md:px-4">
          <img className="w-7" src={linkedimg} alt="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
