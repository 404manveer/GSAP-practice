// "use client";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// export default function Day5Page() {
//   useGSAP(() => {
//     gsap.from(".item", {
//       y: 50,
//       opacity: 0,
//       duration: 1.5,
//       stagger: {
//         each: 0.2,
//         from: "edges",
//       }, // THE MAIN CONCEPT
//       ease: "power3.out",
//     });
//   });

//   return (
//     <div className="flex gap-4 p-10">
//       <div className="item w-20 h-20 bg-red-500" />
//       <div className="item w-20 h-20 bg-blue-500" />
//       <div className="item w-20 h-20 bg-green-500" />
//       <div className="item w-20 h-20 bg-purple-500" />
//     </div>
//   );
// }

// "use client";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// export default function Day5Grid() {
//   useGSAP(() => {
//     gsap.from(".card", {
//       opacity: 0,
//       y: 50,
//       duration: 1,
//       ease: "power3.out",
//       stagger: {
//         each: 0.12,
//         grid: [3,4],     // <-- 2D grid detection
//         from: "start",   // <-- start from center of grid
//       },
//     });
//   });

//   return (
//     <div className="grid grid-cols-4 gap-4 p-10">
//       {Array.from({ length: 12 }).map((_, i) => (
//         <div key={i} className="card h-24 bg-green-500 rounded" />
//       ))}
//     </div>
//   );
// }


"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Day5Wave() {
  useGSAP(() => {
    gsap.from(".item", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: (i, target, list) => {
        // delay grows towards center
        const start = Math.floor(list.length / 2);
        return Math.abs(i - start) * 0.4;
      },
    });
  });

  return (
    <div className="flex gap-4 p-10">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="item w-16 h-16 bg-purple-500 rounded" />
      ))}
    </div>
  );
}

