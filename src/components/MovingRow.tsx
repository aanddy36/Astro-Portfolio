import { useEffect, useState } from "react";
import "../index.css";

export const MovingRow = ({
  children,
  direction,
}: {
  children: any;
  direction: "left" | "right";
}) => {
  const [vars, setVars] = useState("-100%");
  useEffect(() => {
    setVars(direction === "left" ? "-100%" : "100%");
  }, [direction]);
  return (
    <div
      className="flex items-center gap-14 px-7 move"
      style={{ "--direction": vars } as React.CSSProperties}
    >
      {children}
    </div>
  );
};
