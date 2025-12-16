"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ScrollTriggerBase() {
  useGSAP(() => {
    gsap.utils.toArray(".box").forEach((box) => {
      gsap.to(box, {
        x: 200,
        duration: 1,
        ease: "bounce.inOut",
        scrollTrigger: {
          trigger: box,
        },
      });
    });
  });

  return (
    <div className="flex flex-col gap-40 items-center min-h-[200vh] pt-40">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`box w-56 h-56 bg-red-${300 + i * 100} flex items-center justify-center`}
        >
          box {i}
        </div>
      ))}
    </div>
  );
}
