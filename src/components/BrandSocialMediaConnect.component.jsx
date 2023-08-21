import React from "react";
import Arrow_left from "../assets/arrow-left.svg"
import Twitter_logo from "../assets/twitter_logo.svg"
import facebook from "../assets/facebook.svg"
import Linkedin_logo from "../assets/linkedin_logo.svg"
import Intsagram_logo from "../assets/instagram_logo.svg"
import Connected_logo from "../assets/connected_logo.svg"
import SignupButton from "../assets/signupbutton.svg"
const BrandSocialConnect=()=>{

 return(
    <div class="w-[928px] h-[730px] absolute bg-white rounded-[20px]  top-[327px] left-[256px] border shadow-[0_9px_0px_0px_rgba(0,0,0,0.8)]">
      
  <div class="p-5 left-[196px] top-[26px] absolute bg-white rounded-[20px] justify-center items-center gap-2.5 inline-flex  ">
        <div class="text-slate-900 text-[32px] font-semibold font-[Poppins] self-center ">Connect your brand's account</div>
       
    </div>
    <div class="w-10 h-10 left-[57px] top-[50px] absolute  "><img src={Arrow_left}  className=" absolute top-[9px] left-[9px]"></img></div>
    <div class="w-[928px] h-[0px] left-0 top-[130px] absolute border border-gray-400"></div>
    <div class="text-slate-900 text-[16px] font-[Poppins] self-center top-[146px] relative font-light left-[124px] w-[681px] h-[29px]  text-center leading-[28.88px] ">Connect social media account to personalize your experience. </div>
    <div class="text-[24px] font-[Poppins] left-[375px] w-[178px] h-[34px]   absolute top-[185px] font-normal leading-[33.65px] opacity-80 text-[#0E0E35]">Connected(0) </div>
      <div class="w-[805px] h-[235px] border relative top-[248px] left-[62px] gap-[34px] flex flex-row ">
        <div class="w-[158px] h-[162px] px-[16px] py-[20px] rounded-[20px]">
          <div class="w-[126px] h-[57px] gap-[8px] flex flex-row  justify-center items-center">
            <img src={Twitter_logo}></img>
            <div class="font-[Poppins] font-normal text-[18px] leading-[32.49px] text-center w-[61px] h-[32px] ">Twitter</div>
            
          </div>
          <div class="w-[90px] h-[49px] shadow gap-[10px] border rounded-[20px] p-[2.5px]  relative top-[16px] left-[16px] justify-center items-center flex border-[#00CA69]">
            <div class=" text-center self-center text-[#00CB6A]">Connect</div>
          </div>
        </div>
        <div class="w-[186px] h-[162px]  px-[16px] py-[20px] rounded-[20px]">
        <div class="w-[154px] h-[57px] gap-[8px] flex flex-row  justify-center items-center">
            <img src={facebook} class="w-[57px] h-[57px]"></img>
            <div class="font-[Poppins] font-normal text-[18px] leading-[32.49px] text-center w-[61px] h-[32px] tracking-[0.5%]">Facebook</div>
            
          </div>
          <div class="w-[90px] h-[49px] shadow gap-[10px] border rounded-[20px] p-[2.5px]  relative top-[16px] left-[48px] justify-center items-center flex border-[#00CA69]">
            <div class=" text-center self-center text-[#00CB6A]">Connect</div>
          </div>
        </div>
        <div class="w-[175px] h-[162px]   px-[16px] py-[20px] rounded-[20px] gap-[16px]">
        <div class="w-[143px] h-[57px]  gap-[8px] flex flex-row  justify-center items-center">
            <img src={Linkedin_logo} ></img>
            <div class="font-[Poppins] font-normal text-[18px] leading-[32.49px]  w-[78px] h-[32px] tracking-[0.5%] text-start">Linkedin</div>
            
          </div>
          <div class="w-[90px] h-[49px] shadow gap-[10px] border rounded-[20px] p-[2.5px]  relative top-[16px]  justify-center items-center flex border-[#00CA69]">
            <div class=" text-center self-center text-[#00CB6A]">Connect</div>
          </div>
        </div>
        <div class="w-[184px] h-[235px]   px-[12px] py-[20px] rounded-[20px] gap-[16px] flex flex-col">
          <div class="w-[160px] h-[57px]  gap-[8px] flex flex-row  justify-start items-center">
            <img src={Intsagram_logo} ></img>
            <div class="font-[Poppins] font-normal text-[18px] leading-[32.49px]  w-[95px] h-[32px] tracking-[0.5%] text-start">Instagram</div>
            
          </div>
          <div class="w-[135px] h-[122px] gap-[24px]  self-center flex justify-between flex-col">
           <div class="flex flex-row">
            <div class="w-[111px] h-[49px] p-2.5 gap-2.5 flex flex-row font-[Poppins] text-[16px] font-medium  self-center leading-[28.88px] text-[#0E0E35]">
              Connected
              
            </div>
            <img src={Connected_logo} class="h-[24px] w-[24px] self-center"></img>
            </div>
          <div class="w-[113px] h-[49px] shadow gap-[10px] border rounded-[20px] p-[2.5px]  self-center   bg-[#00CA69]">
            <div class="  text-center text-[#FFFFFF] font-[Poppins] font-medium text-[16px] p-[2.5px] gap-[10px] leading-[28.88px] tracking-tight ">Disconnect</div>
          </div>
          </div>

        </div>
           
   
      </div>
      
    <div class="w-[196px] h-20 pt-5 absolute left-[689px] top-[579px] justify-center items-center ">
        <div class="w-[196px] self-stretch px-10 py-2.5 bg-[#00CB6A] rounded-[11px] justify-center items-center gap-2.5 inline-flex">
            <button>
     
  <div class="justify-start items-center flex">
               
               <div class="text-white text-xl font-medium">Sign up</div>
              
               <div class="w-10 h-10 justify-center items-center  flex">
                   <div class="w-10 h-10 relative flex-col justify-start items-start flex">
                    <img src={SignupButton}></img>
                   </div>
                
               </div>
           </div>
            </button>
        </div>
    </div>
    </div>
    )

}
 export default BrandSocialConnect