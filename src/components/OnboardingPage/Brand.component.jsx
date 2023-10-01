import React from "react";
import galary from "../../assets/home/galary.svg";
import multiCircles from "../../assets/home/multiCircles.svg";

const Brand = () => {
  return (
    <div class="w-[238px] h-[247px] pr-[0.30px] pt-[57px] pb-[4.55px] flex-col justify-end items-center flex ">
      <div class="w-[237.70px] h-[185.45px] relative bg-white rounded-[17.84px] shadow flex-col justify-start items-start flex">
        <div class="w-[2.67rem] h-[2.67rem] bg-green-500 rounded-full absolute top-[1.56rem] left-[1.31rem] flex items-center justify-center">
          <img src={galary} alt="" />
        </div>

        <div class="h-[43px] pt-1.5 pb-[7px] items-end flex absolute left-[82px] top-[25px] ">
          <div class="w-[227px] opacity-80 text-zinc-800  left-[-6px] relative font-medium text-[1.25rem] ">
            M’Pentad Produ
          </div>
        </div>
        <div class="w-[131px] opacity-80 text-slate-900 text-[0.625rem] font-normal  tracking-tight top-[65px] left-[78px] leading-[16.5px] relative ">
          Dictumst scelerisque ut .
        </div>

        <div class="flex-col justify-start items-start flex left-[26px] absolute  top-[140px] text-[#3A3A61]">
          <div class="text-[0.55738rem] font-normal ">Opened</div>
          <div class="text-[0.61313rem] font-bold  ">Aug 22, 2009</div>
        </div>
        <div class="w-[72px] h-6 absolute  flex left-[136px] top-[142px]">
          <img src={multiCircles} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Brand;
