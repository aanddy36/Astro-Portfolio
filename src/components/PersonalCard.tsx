import pp from "../assets/cv-bg.png";
import { FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { ReactLogo } from "../assets/reactIcons/ReactLogo";

interface IAngles {
  rotationX: number;
  rotationY: number;
}

export const PersonalCard = ({ rotationX, rotationY }: IAngles) => {
  const coloredName = {
    background: "linear-gradient(130deg,#be1cfa 20%, #54c8fa)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
  };
  return (
    <div
      className="relative grid place-items-center border-2 border-[#5b3ff850] full:h-[380px]
      full:w-[780px] w-[320px] h-[600px] rounded-lg bg-[#5b3ff81e] text-white transition-dimensions 
      duration-200 shadow-sm tablet:w-[400px] tablet:h-[650px] laptop:w-[720px] laptop:h-[360px]"
      style={{
        transform: `perspective(500px) rotateX(${
          rotationX < -12 ? -12 : rotationX
        }deg) rotateY(${rotationY}deg)`,
      }}
    >
      <div
        className="w-[95%] h-[97%] border-4 border-cardBorder rounded-lg backdrop-blur-sm
       laptop:h-[90%]"
      >
        <div
          className="absolute w-full gap-[1.4em] justify-center text-sm left-[50%] top-[90px] 
          flex -translate-x-[50%] items-center font-bold tablet:top-[100px] tablet:text-[16px] 
          tablet:gap-8 laptop:top-[30px] laptop:left-10 laptop:translate-x-0 laptop:w-fit "
        >
          <ReactLogo />
          <div className="flex items-center gap-[0.3rem] tablet:gap-[0.8rem]">
            <FaMapMarkerAlt className="scale-[1.3] text-cardBorder" />
            <span className="text-subText">Barranquilla, Colombia</span>
          </div>
        </div>
        <div
          className="font-github absolute w-[200px] gap-[1.5rem] pl-8 text-xl top-0 right-0 
          h-[65px] font-bold flex items-center justify-center bg-[#5b3ff838] tablet:gap-8 
          tablet:pl-10 tablet:text-[23px] tablet:w-[250px]"
          style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 30% 100%)" }}
        >
          <FaGithub className="scale-[2.5] pl-[0.5rem]" />
          <span>aanddy36</span>
        </div>
        {/* <CardSection />
        <GithubCard /> */}
        <img
          src={pp.src}
          className="rounded-full top-[160px] left-[50%] w-[180px] -translate-x-[50%] shadow-pp tablet:top-[180px]
           tablet:w-[200px] absolute laptop:top-[100px] laptop:left-[60px] laptop:translate-x-0"
          style={{
            background:
              "radial-gradient(circle, rgba(61,224,230,1) 17%, rgba(41,154,179,1) 60%, rgba(22,109,162,1) 100%)",
          }}
        />
        <h2
          className="absolute text-center w-full text-[38px] leading-tight left-[0%] top-[360px] tablet:top-[390px] font-[600] 
          laptop:top-[135px] laptop:left-[42%] laptop:text-[42px] laptop:w-auto full:text-5xl full:left-[39%]"
          style={coloredName}
        >
          Andrés Del Chiaro
        </h2>
        <h3
          className="text-[18px] w-full text-center absolute top-[460px] left-[0%] font-[600] tablet:top[450px] 
        tablet:text-xl laptop:w-auto laptop:top-[195px] laptop:left-[40%] laptop:text-3xl"
        >
          Frontend Developer | React
        </h3>
        <h4 className="absolute bottom-[15px] right-5 text-sm text-subText font-[700] tablet:text-lg">
          Making Web Development Fun
        </h4>
      </div>
    </div>
  );
};
