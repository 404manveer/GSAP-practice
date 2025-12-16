"use client";

import { useRef } from "react";
import { gsap } from "gsap";

export default function FlipCard() {
  const cardRef = useRef(null);

  const handleEnter = () => {
    gsap.to(cardRef.current, {
      rotationY: 180,
      duration: 0.8,
      ease: "power3.inOut",
    });
  };

  const handleLeave = () => {
    gsap.to(cardRef.current, {
      rotationY: 0,
      duration: 0.8,
      ease: "power3.inOut",
    });
  };

  return (
    <div
      className="scene h-screen flex items-center justify-center  "
      style={{ perspective: 1000 }}
    >
      <div
        ref={cardRef}
        className="card w-64 h-96 relative   "
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.8s",
        }}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >

        {/* Front face */}
        <div
          className="front absolute w-full h-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
            borderRadius: "12px",
          }}
        >
          TEXT
        </div>

        {/* Back face */}
        <div
          className="back absolute w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: "12px",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

      </div>
    </div>
  );
}
