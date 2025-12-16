// "use client"
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// gsap.registerPlugin(useGSAP);

// export default function Day4Page() {
//     useGSAP(()=>{
//         const tl = gsap.timeline();

//         const obj = {value:0};


        
//         tl.to(".box",{
//             x:-300,
//             duration:2,
//             color:"blue",
//             scale:i=>(1+ i)*1.5,
//             height:500,
//             backgroundColor:"yellow",
            
            
//         })
//         tl.to(".container",{
//             scrollTop:200,
//             duration:2,
//         })
//         tl.to('.container',{
//             scrollTop:0,
//             duration:2,
//         })
//         tl.to("#rect",{
//            x:100,
//             attr:{
//              fill:'red',
//              height:"+=400"
//             },
//             duration:1,
           

//         })
//         tl.to(obj,{
//             value:100,
//             duration:2, 
//         })
//         tl.to('.box',{
//             rotationY:360,
//             scale:1,
//             backgroundColor:"red",
//             color:"white",
//             height:50,
//             duration:2,
//         })
//          return () => tl.kill();
    
//     })

//   return (
//     <div className=" container h-56  flex overflow-auto border-4 border-red-500 items-center justify-center">
//     <div className=" box w-12 flex items-center justify-center h-12 bg-red-500 p-4  ">text</div>
//     <svg width="200" height="50">
//   <rect id="rect" width="50" height="50" fill="skyblue" />
// </svg>
//     </div>
//   );
// }
"use client";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Day4Page() {
  const scope = useRef(null);
  const boxRef = useRef(null);
  const containerRef = useRef(null);
  const rectRef = useRef(null);

  useGSAP(
    () => {
      /* ---------------------------------------
       * 1) UI Animation Timeline
       * ------------------------------------- */
      const uiTL = gsap.timeline();

      uiTL.to(boxRef.current, {
        x: -300,
        scale: (i) => (1 + i) * 1.5,
        backgroundColor: "yellow",
        color: "blue",
        scaleY: 1.5, // Instead of animating height
        duration: 2,
      });

      /* ---------------------------------------
       * 2) Scroll Timeline
       * ------------------------------------- */
      const scrollTL = gsap.timeline();

      scrollTL.to(containerRef.current, {
        scrollTop: 200,
        duration: 2,
      });
      scrollTL.to(containerRef.current, {
        scrollTop: 0,
        duration: 2,
      });

      /* ---------------------------------------
       * 3) SVG Timeline
       * ------------------------------------- */
      const svgTL = gsap.timeline();

      svgTL.to(rectRef.current, {
        x: 100,
        attr: {
          fill: "red",
          height: "+=40", // within SVG, attributes are OK
        },
        duration: 1,
      });

      /* ---------------------------------------
       * 4) Value Animation (logic-only)
       * ------------------------------------- */
      const obj = { value: 0 };
      const logicTL = gsap.timeline();

      logicTL.to(obj, {
        value: 100,
        duration: 2,
        onUpdate: () => {
          // Example: you will use this in UI / charts / whatever
          console.log("Animated value:", obj.value.toFixed(0));
        },
      });

      /* ---------------------------------------
       * 5) Final Reset Animation Timeline
       * ------------------------------------- */
      const resetTL = gsap.timeline();

      resetTL.to(boxRef.current, {
        rotationY: 360,
        scale: 1,
        backgroundColor: "red",
        color: "white",
        scaleY: 1, // instead of height
        duration: 2,
      });

      /* ---------------------------------------
       * MASTER TIMELINE merges all
       * ------------------------------------- */
      const master = gsap.timeline();
      master.add(uiTL).add(scrollTL).add(svgTL).add(logicTL).add(resetTL);

      return () => master.kill(); // cleanup
    },
    { scope }
  );

  return (
    <div ref={scope}>
      <div
        ref={containerRef}
        className="container h-56 flex overflow-auto border-4 border-red-500 items-center justify-center"
      >
        <div
          ref={boxRef}
          className="box w-12 flex items-center justify-center h-12 bg-red-500 p-4"
        >
          text
        </div>

        <svg width="200" height="50">
          <rect ref={rectRef} width="50" height="50" fill="skyblue" />
        </svg>
      </div>
    </div>
  );
}
