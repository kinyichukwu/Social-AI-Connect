import { useState } from "react";
import image from "../../assets/Main2/add image.svg";
import video from "../../assets/Main2/add video.svg";
import GreenButton from "../Button/GreenButton";
import image1 from "../../assets/Main2/asset1.png";
import image2 from "../../assets/Main2/asset2.png";
import image3 from "../../assets/Main2/asset3.png";
import image4 from "../../assets/Main2/asset4.png";

export default function UseAiInstagram() {
  const [hashTag, sethashTag] = useState(false);
  return (
    <div className="px-[2%] py-[4.3%] bg-[#F6F6FF] h-full">
      <div className="flex items-start">
        <div className="flex flex-col ">
          <img src={image} alt="" className="translate-y-[-12px]" />
          <img src={video} alt="" className=" translate-y-[-33px]" />
        </div>
        <div className=" w-[34rem] px-[2.25rem] py-[1.62rem] bg-white drop-shadow-md  rounded-3xl">
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

          {hashTag && (
            <>
              <div className="flex space-x-2 flex-wrap mt-6">
                <div
                  className="w-[86px] h-[86px] relative rounded-[20px] bg-gray-100 bg-no-repeat bg-center bg-contain"
                  style={{ backgroundImage: `url("${image2}")` }}
                >
                  <div className="w-[15px] h-[15px] left-[61px] top-[8px] absolute bg-white rounded-full" />
                  <div className="w-3 h-3 left-[63px] top-[10px] absolute cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <path
                        d="M9 3.60429L8.39571 3L6 5.39571L3.60429 3L3 3.60429L5.39571 6L3 8.39571L3.60429 9L6 6.60429L8.39571 9L9 8.39571L6.60429 6L9 3.60429Z"
                        fill="#151544"
                      />
                    </svg>
                  </div>
                </div>

                <div
                  className="w-[86px] h-[86px] relative rounded-[20px] bg-gray-100 bg-no-repeat bg-center bg-contain"
                  style={{ backgroundImage: `url("${image4}")` }}
                >
                  <div className="w-[15px] h-[15px] left-[61px] top-[8px] absolute bg-white rounded-full" />
                  <div className="w-3 h-3 left-[63px] top-[10px] absolute cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <path
                        d="M9 3.60429L8.39571 3L6 5.39571L3.60429 3L3 3.60429L5.39571 6L3 8.39571L3.60429 9L6 6.60429L8.39571 9L9 8.39571L6.60429 6L9 3.60429Z"
                        fill="#151544"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="flex justify-between mt-6">
            <div
              className=" bg-[#151544] h-[3.875rem] w-[3.875rem] rounded-3xl flex justify-center items-center cursor-pointer hover:bg-[#1515449d] active:bg-[#151544]"
              onClick={() => sethashTag((prev) => !prev)}
            >
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
