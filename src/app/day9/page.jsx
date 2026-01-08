"use client"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useGSAP } from "@gsap/react"
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);


export default function Day9(){

   useEffect(()=>{
    gsap.to(".box", {
  scrollTrigger: {
    trigger: ".box",
    start: "top top",
    end: "+=300",
    pin: true,
    markers: true,
  },
});

    gsap.to(".box1",{
        x:800,
        // ease:"power2.inOut",
        // ease:"none",
        scrollTrigger:{
            trigger:".box1",
            start:"top center",
            end: "top top",
            scrub:1,
            markers:true
        }

    })
   },[])

    return(
       <section className=" pt-[100vh] h-[270vh] flex  gap-2.5 " >

        <div className="box w-64 h-64 bg-red-800 " >

       </div>
        <div className="box1 w-64 h-64 bg-red-800 " >
box1
       </div>
       </section>
    )
}