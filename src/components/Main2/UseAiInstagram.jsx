import { useState } from "react";
import image from "../../assets/Main2/add image.svg";
import video from "../../assets/Main2/add video.svg";
import GreenButton from "../Button/GreenButton";

export default function UseAiInstagram() {
  const [hashTag, sethashTag] = useState(false);
  return (
    <div className="px-[2%] py-[4.3%] bg-[#F6F6FF] h-full">
      <div className="flex items-start">
        <div className="flex flex-col ">
          <img src={image} alt="" className="translate-y-[-12px]" />
          <img src={video} alt="" className=" translate-y-[-33px]" />
        </div>
        <div className="min-w-[55%] w-[34rem] px-[2.25rem] py-[1.62rem] bg-white drop-shadow-md  rounded-3xl">
          <div className="border rounded-3xl border-[#0000002a] p-5">
            <textarea className="w-full outline-none text-[#121228c5] font-medium h-36 overflow-hidden"></textarea>
            {hashTag && (
              <>
                <hr className="text-[#0000002a] my-6" />

                <p className="text-[#12122882] ">
                  #fashion #branding #clothesstyle
                </p>
              </>
            )}
          </div>

          <div className="flex justify-between mt-6">
            <div className=" bg-[#151544] h-[3.875rem] w-[3.875rem] rounded-3xl flex justify-center items-center cursor-pointer hover:bg-[#1515449d] active:bg-[#151544]" onClick={() => sethashTag(prev => !prev)}>
              <div className="content text-white text-3xl font-medium ">#</div>
            </div>

            <button className=" rounded-lg text-[#07BD65] border-[1.7px] border-[#07BD65] p-3 text-xl font-medium w-36 h-[3.3rem] hover:border-[#07bd65ac] hover:text-[#07bd65a0]  active:border-[#07bd65] active:text-[#07bd65]">
              Done
            </button>
          </div>
        </div>
        <div className="flex ml-6">
          <GreenButton text="Use AI" />
        </div>
      </div>
    </div>
  );
}
