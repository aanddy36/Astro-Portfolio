import { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { DownloadButton } from "../DownloadButton";
import { PersonalCard } from "../PersonalCard";

export const Hero = () => {
  const [{ rotationX, rotationY }, setRotation] = useState({
    rotationX: 0,
    rotationY: 0,
  });
  const cardCont = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const rotationEffect = (e: MouseEvent): void => {
      const { width } = document.body.getBoundingClientRect();
      const { height } = cardCont.current!.getBoundingClientRect();
      const { pageX, pageY } = e;
      const rotationX = ((pageY - height / 2) / height) * -14;
      const rotationY = ((pageX - width / 2) / width) * 14;
      setRotation({ rotationX, rotationY });
    };
    window.addEventListener("mousemove", rotationEffect);

    return () => window.removeEventListener("mousemove", rotationEffect);
  }, []);
  return (
    <div
      id="hero"
      className="grid relative h-[820px] tablet:h-[880px] laptop:h-screen"
      ref={cardCont}
    >
      <div
        className="mx-0 mb-8 mt-20 flex flex-col items-center h-full justify-center gap-8
         laptop:gap-[60px] laptop:m-0 laptop:mt-14"
      >
        <PersonalCard rotationX={rotationX} rotationY={rotationY} />
        <div className="w-full flex justify-center gap-2 tablet:gap-[10%]">
          <a
            href="#contact"
            className="h-10 mt-8 text-sm tablet:text-base font-bold rounded-full cursor-pointer px-4 relative 
              flex items-center gap-4 border-2 transition-all duration-200 border-[#afafaf15] bg-mainBg
               text-[#c5c5c5] hover:text-mainBg hover:bg-[#c0e0f3] 
              tablet:h-11 tablet:mt-0 laptop:text-lg laptop:px-8 laptop:h-[50px]"
          >
            <FaEnvelope /> Contact Me
          </a>

          <DownloadButton />
        </div>
      </div>
      <div
        className=" hidden laptop:flex flex-col gap-12 absolute top-[50%] translate-y-[-50%]
       backdrop-blur-md py-8 px-6 bg-navbar/50 rounded-r-lg"
      >
        <a
          href="https://www.linkedin.com/in/delchiaroa/"
          target="_blank"
          className="cursor-pointer scale-[2.1] text-white/50 hover:text-white/100
        transition-all duration-200"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/aanddy36"
          target="_blank"
          className="cursor-pointer scale-[2.1] text-white/50 hover:text-white/100
        transition-all duration-200"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:anchibro@hotmail.com?subject=Let's work together!"
          target="_blank"
          className="cursor-pointer scale-[2.1] text-white/50 hover:text-white/100
        transition-all duration-200"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};
