import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const GSAPtimeline = () => {
  const box = useRef(null);

  useEffect(() => {
    let timeline = gsap.timeline();
    timeline
      .to(box.current, { x: 100, duration: 2 })
      .to(box.current, { y: 100, duration: 2 })
      .to(box.current, {
        x: 200,
        y: 0,
        rotate: 360,
        duration: 2,
        ease: "bounce",
      });
  }, []);

  return (
    <div className="mb-6">
      <div
        ref={box}
        className="flex items-center justify-center w-24 h-24 border border-black"
      >
        Timeline
      </div>
    </div>
  );
};

export default GSAPtimeline;
