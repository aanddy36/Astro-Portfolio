import { useEffect, useState } from "react";
import toggleBars from "../../assets/toggle-bars.png";
export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 32) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`rounded-lg transition-all duration-200 w-[95%] left-[50%]
     -translate-x-[50%] backdrop-blur-md z-[2] flex flex-col overflow-hidden
      bg-navbar/50 ${
        isSticky
          ? "fixed rounded-t-0 shadow-md"
          : "absolute top-8 rounded-t-lg shadow-none "
      }`}
    >
      <nav className=" flex justify-between items-center pl-4 pr-6 py-3 w-full">
        <a
          onClick={() => setIsNavOpen(false)}
          href="#hero"
          className="text-3xl italic text-white mx-1 mb-1 transition duration-200 cursor-pointer"
        >
          [<span className="font-extrabold text-4xl line">a</span>]
        </a>
        <ul
          className="hidden laptop:flex text-[#fff]/70 gap-5 laptop:gap-8 transition
        duration-200 text-base laptop:text-lg"
        >
          <li className=" cursor-pointer hover:text-white">
            <a href="#education">Experience</a>
          </li>
          <li className=" cursor-pointer hover:text-white">
            <a href="#projects">Projects</a>
          </li>
          <li className=" cursor-pointer hover:text-white">
            <a href="#techs">Skills & Certifications</a>
          </li>
          <li className=" cursor-pointer hover:text-white">
            <a href="#about">About</a>
          </li>
        </ul>
        <a
          href="#contact"
          className="px-4 py-1 font-medium rounded-full bg-transparent border transition 
        duration-200 border-white hover:bg-white hidden laptop:block
         hover:text-mainBg text-base laptop:text-lg"
        >
          <span className="text-sm tablet:text-base">Contact</span>
        </a>
        <button
          className="laptop:hidden"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <img
            src={toggleBars.src}
            className="opacity-70 transition-opacity duration-200 
        cursor-pointer hover:opacity-100 h-6"
          />
        </button>
      </nav>

      <ul
        className={`w-full flex flex-col text-right transition-all duration-300
        `}
        onClick={() => setIsNavOpen(false)}
        style={{ height: isNavOpen ? "245px" : "0px" }}
      >
        <a
          href="#education"
          className="px-6 text-white/70 hover:text-white/100 cursor-pointer hover:px-9
             w-full border-t border-[#fff]/30 py-3 transition-all duration-200"
        >
          Experience
        </a>
        <a
          href="#projects"
          className="px-6 text-white/70 hover:text-white/100 cursor-pointer hover:px-9
             w-full border-t border-[#fff]/30 py-3 transition-all duration-200"
        >
          Projects
        </a>
        <a
          href="#techs"
          className="px-6 text-white/70 hover:text-white/100 cursor-pointer hover:px-9
             w-full border-t border-[#fff]/30 py-3 transition-all duration-200"
        >
          Skills & Certifications
        </a>
        <a
          href="#about"
          className="px-6 text-white/70 hover:text-white/100 cursor-pointer hover:px-9
             w-full border-t border-[#fff]/30 py-3 transition-all duration-200"
        >
          About
        </a>
        <a
          href="#contact"
          className="px-6 text-white/70 hover:text-white/100 cursor-pointer hover:px-9
             w-full border-t border-[#fff]/30 py-3 transition-all duration-200"
        >
          Contact
        </a>
      </ul>
    </div>
  );
};
