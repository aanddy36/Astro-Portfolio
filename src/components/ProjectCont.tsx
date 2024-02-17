import React, { useEffect, useRef, useState } from "react";

export const ProjectCont = ({ children }: { children: any }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [{ offsetX, offsetY }, setOffset] = useState({
    offsetX: 0,
    offsetY: 0,
  });

  useEffect(() => {
    if (ref.current) {
      const width = ref.current.clientWidth;
      ref.current.style.minHeight = `${width * 0.8}px`;
    }
    const adjustHeight = () => {
      if (ref.current) {
        const width = ref.current.clientWidth;
        ref.current.style.minHeight = `${width * 0.8}px`;
      }
    };
    window.addEventListener("resize", adjustHeight);

    return () => window.removeEventListener("resize", adjustHeight);
  }, []);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    let { left, top } = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - left;
    const offsetY = e.clientY - top;
    setOffset({ offsetX, offsetY });
  }

  return (
    <>
      <div
        className="group relative rounded-lg overflow-hidden p-px mb-8 text-white 
        bg-gradient-to-b  from-white/20 to-white/0"
        onMouseMove={handleMove}
        ref={ref}
      >
        <div
          className="flex flex-col rounded-lg h-fit gap-8 laptop:gap-4 p-4 bg-gradient-to-b 
            from-[#1b1021] to-[#100316]"
        >
          <div
            className="absolute inset-0 opacity-0 bg-white/10 transition duration-300 
            group-hover:opacity-100"
            style={{
              WebkitMaskImage: `radial-gradient(180px at ${offsetX}px ${offsetY}px, white,
                 transparent)`,
            }}
          ></div>
          {children}
        </div>
      </div>
    </>
  );
};
