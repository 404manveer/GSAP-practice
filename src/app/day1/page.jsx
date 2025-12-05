"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Day1() {
  const container = useRef();
  const box = useRef();
  const box1 = useRef();

  useGSAP(() => {
    gsap.fromTo(
      [box.current, box1.current],
      {
        backgroundColor: "#3b82f6", // Tailwind blue-500 EXACT HEX
        borderRadius: "0%",
        x:200
        
      },
      {
        x: 800,
        top:'2%',
        duration: 3,
        borderRadius: "50%",
        backgroundColor: "red",
        ease: "power1.inOut",
        color: "white",
        stagger:3,
         scale:1.5,
        rotation:360
      }
    );
  }, { scope: container });

  return (
    <div ref={container} className="flex border items-center h-screen gap-4">
      <div
        ref={box}
        className=" absolute w-32 h-32 flex items-center justify-center text-white"
      >
        day1
      </div>
      <div
        ref={box1}
        className=" absolute w-32 h-32 flex items-center justify-center text-white"
      >
        day2
      </div>
      
    </div>

  );
}
