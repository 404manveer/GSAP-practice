"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"



gsap.registerPlugin(ScrollTrigger) 



export default function day7(  ){
    
     useGSAP(()=>{
        gsap.to('.box3',{
            x:500,

            scrollTrigger:{
                trigger:".box3",
                start:"top center",
                end:"bottom  center ",
                markers:true
            }

        })
     })
     useGSAP(()=>{
        gsap.to('.box4',{

            x:500,
            duration:1,
            scrollTrigger:{
                trigger:".box4",
                start:"top center",
                end:"bottom  top ",
                 markers:true,
              
            }

        })
     })
     useGSAP(()=>{
        gsap.to('.box5',{

            x:500,
            scrollTrigger:{
                trigger:".box5",
                start:"top center",
                end:"center  center ",
                scale:.9,
                 markers:true
            }

        })
     })




    return(
    <section className=" space-y-8" >

        {
            Array.from({length:6}).map((_,id)=>{
                return(
                    <div className={`box${id+1} w-[300px] h-[400px] bg-red-400  `} >
                        {id+1}
                    </div>
                )
            })
        }
        
    </section>
    )
}