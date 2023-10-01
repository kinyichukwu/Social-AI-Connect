import React from "react";
import usericon from "../../assets/user.svg";
import alerticon from "../../assets/alert_icon.svg";

const WelocomeBanner = () => {
  return (
    <div className=" bg-[#151544]  md:mt-[5.5rem] ">
      <div className="flex justify-between items-center max-w-[67rem] py-[2.56rem] mx-auto px-[1.5rem]">
        <div className="gap-[0.5rem]  flex-col ">
          <p className="text-[#FFFFFF] text-[1.5rem] font-bold">Welcome Kay</p>
          <span className="text-[#FFFFFF] text-[16px] leading-[24px] font-normal  ">
            Always know this, Automation sparks progress, while AI drives
            success
          </span>
        </div>
        <div className=" gap-[42px]  items-center justify-between hidden md:flex">
          <img src={usericon} alt="" className=" "></img>
          <img src={alerticon} alt="" className=""></img>
        </div>
      </div>
    </div>
  );
};

export default WelocomeBanner;
