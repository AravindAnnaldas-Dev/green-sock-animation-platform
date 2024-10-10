import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const GSAPbasic = () => {
  const box = useRef(null);

  useEffect(() => {
    gsap.to(box.current, { x: 200, rotate: 360, duration: 2, ease: "bounce" });
  }, []);

  return (
    <div className="mb-6">
      <div
        ref={box}
        className="flex items-center justify-center w-24 h-24 border border-black"
      >
        Basic
      </div>
    </div>
  );
};

export default GSAPbasic;
