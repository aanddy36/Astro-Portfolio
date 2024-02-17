import { FaCloudDownloadAlt } from "react-icons/fa";
import fileUrl from "../assets/andres-del-chiaro.pdf";

export const DownloadButton = () => {
  const handleDownloadClick = () => {
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = "andres-del-chiaro.pdf";
    anchor.click();
    anchor.remove();
  };

  return (
    <div>
      <button
        className="h-10 mt-8 text-sm tablet:text-base font-bold rounded-full cursor-pointer px-4 
        relative flex items-center gap-4 border-2 transition-all duration-200 border-mainBg text-mainBg
        bg-lightBlue hover:bg-hoverBtn tablet:h-11 tablet:mt-0 laptop:text-lg 
        laptop:px-8 laptop:h-[50px]"
        onClick={handleDownloadClick}
      >
        <FaCloudDownloadAlt /> Download CV
      </button>
    </div>
  );
};

