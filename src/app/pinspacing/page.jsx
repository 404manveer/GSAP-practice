"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function PinSpacingExample() {
  useGSAP(() => {
    // Box A — default pinSpacing (true)
    ScrollTrigger.create({
      trigger: ".box-a",
      start: "top top",
      end: "+=300",
      pin: true,
      markers: true,
    });

    // Box B — pinSpacing disabled
    ScrollTrigger.create({
      trigger: ".box-b",
      start: "top top",
      end: "+=300",
      pin: true,
      pinSpacing: false,
      markers: true,
    });
  });

  return (
    <div className="min-h-[300vh] bg-gray-100 p-10 space-y-32">

      {/* Spacer content */}
      <div className="h-[100vh] flex items-center justify-center text-xl">
        Scroll down
      </div>

      {/* Box A */}
      <div className="box-a h-40 w-full bg-blue-500 text-white flex items-center justify-center text-xl">
        pinSpacing: true
      </div>

      {/* Content between */}
      <div className="h-[100vh] flex items-center justify-center text-xl">
        Normal content
      </div>

      {/* Box B */}
      <div className="box-b h-40 w-full bg-red-500 text-white flex items-center justify-center text-xl">
        pinSpacing: false
      </div>

      {/* Content after */}
      <div className="h-[100vh] flex items-center justify-center text-xl">
        Watch overlap here
      </div>

    </div>
  );
}
