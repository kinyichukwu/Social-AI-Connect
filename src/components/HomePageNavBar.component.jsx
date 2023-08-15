import React from "react";
import company_logo from "../assets/company_logo.svg"
import signuplogo from "../assets/signup_logo.svg"

const HomePageNavBar=()=>{
return(
      <div className="w-1045.31  h-57  flex flex-row justify-between ">
        <div className="p=2.5 g-2.5 h-54 w-175.31 ">
        <img src={company_logo} alt="" className="p-2.5 gap-2.5 "/>
        </div>
        <div className="h-4  w-457 gap-[66px] flex self-center">
            
            <span className="font-[Poppins]  text-[13px] leading-[19.5px] font-[500px] text-[#00A455]" > Main Page</span>
            <span className="font-[Inter]  text-xxs font-normal text-[#111111]"> Pricing</span>
            <span className="font-[Inter]  text-xxs font-normal text-[#111111]"> Tutorial [ Demo ]</span>
            <span className="font-[Inter]  text-xxs font-normal text-[#111111]">Support</span>
        </div>

        </div>
    
)




}

export default HomePageNavBar