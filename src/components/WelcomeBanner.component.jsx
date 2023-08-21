import React from "react"
import usericon from "../assets/user.svg"
import alerticon from "../assets/alert_icon.svg"


const WelocomeBanner=()=>{
    return(
          <div className="w-screen h-151  bg-[#151544] flex flex-row items-center  ">
           <div className="h-[68px] w-[785.91px]  ml-[208px] gap-[8px] inline-flex items-start flex-col ">
            <p className="text-[#FFFFFF] text-[24px] leading-[36px] font-bold">Welcome Kay</p>
            <span className="text-[#FFFFFF] text-[16px] leading-[24px] font-normal  ">Always know this, Automation sparks progress, while AI drives success</span>
            
           </div>
           <div className="w-[46.07px] h-[134.13px]  -rotate-90  gap-[42px] inline-flex flex-col ml-[145.35px] items-center justify-between   ">
            <img src={usericon} alt="" className=" rotate-90 pl-[10.49px]"></img>
            <img src={alerticon} alt="" className="rotate-90"></img>
            </div>
            </div>
        
    )
    
    
    
    
    }
    
    export default WelocomeBanner