"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function DayPractice() {
  useGSAP(() => {
    const tl = gsap.timeline();

    /* -----------------------------------
       PHASE 1: Scale up (1 → 1.5, one by one)
    ----------------------------------- */
    tl.to(".box", {
      scale: 1.5,
      duration: 0.5,
      stagger: 0.3,
      ease: "power1.out",
    })

      /* -----------------------------------
         PHASE 2: Move all up together (y: -50)
      ----------------------------------- */
      .to(".box", {
        y: -50,
        duration: 0.3,
        ease: "power1.out",
      })

      /* -----------------------------------
         PHASE 3: Scale down (1.5 → 1, reverse order)
      ----------------------------------- */
      .to(".box", {
        scale: 1,
        duration: 0.5,
        stagger: {
          each: 0.3,
          from: "end", // reverse order
        },
        ease: "power1.out",
      })

      /* -----------------------------------
         PHASE 4: Fade out all at once
      ----------------------------------- */
      .to(".box", {
        opacity: 0,
        duration: 0.5,
        ease: "power1.out",
      })

      /* -----------------------------------
         PHASE 5: Fade in all + reset positions
      ----------------------------------- */
      .to(".box", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power1.out",
      })

      /* -----------------------------------
         PHASE 6: RotateX slight tilt one by one
      ----------------------------------- */
      .to(".box", {
        rotation: 10,
        duration: 0.25,
        stagger: 0.3,
        yoyo: true,
        repeat: 1,
        // ease: "power1.out",
      })
    //   .to(".box", {
    //     rotation: 0,
    //     duration: 0.25,
    //     stagger: 0.3,
    //     ease: "power1.inOut",
    //   });
  });

  const boxcss =
    "box flex-1 bg-blue-500 px-2 py-4 m-2 flex items-center justify-center text-white";

  return (
    <div className="main flex border items-center justify-center h-screen gap-4 p-6">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className={boxcss}>
          box{i + 1}
        </div>
      ))}
    </div>
  );
}
