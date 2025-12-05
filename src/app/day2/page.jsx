'use client'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Day2() {

  useGSAP(() => {
    const tl = gsap.timeline({
    //   repeat: -1,
    //     yoyo: true,
    });

    // Step 1: Grow one by one
    tl.to(".box", {
      duration: 1,
      scale: 1.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      yoyoEase: "power1.inOut",
      stagger: {
        each: 0.3,
        from: "random",
      },
    });

    // Step 2: Shrink one by one (reverse stagger)
    // tl.to(".box", {
    //   duration: 1,
    //   scale: 1,
    //   ease: "power.inOut(1, 0.3)",
    //   stagger: {
    //     each: 0.3,
    //     from: "end",
    //   },
    // });

  });

  return (
    <div className="main flex border items-center h-screen gap-4 p-6">
      {Array.from({ length: 16 }).map((_, i) => (
        <div key={i} className={boxcss}>box{i + 1}</div>
      ))}
    </div>
  );
}

const boxcss =
  "box flex-1 bg-blue-500 px-2 py-4 m-2 flex items-center justify-center text-white";
