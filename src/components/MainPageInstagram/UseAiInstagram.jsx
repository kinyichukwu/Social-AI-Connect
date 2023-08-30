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
    <div className="md:px-8 px-5 py-14 bg-[#F6F6FF] h-full min-h-screen">
      <div className="flex items-start md:justify-end lg:justify-center lg:flex-row flex-col-reverse h-full">
        <div className="flex lg:flex-col flex-row">
          <img
            src={image}
            alt=""
            className="lg:translate-y-[-12px] lg:translate-x-[0] translate-x-[-23px] "
          />
          <img
            src={video}
            alt=""
            className=" lg:translate-y-[-33px] lg:translate-x-[0] translate-x-[-33px]"
          />
        </div>
        <div className=" lg:w-[34rem] w-full md:px-[2.1rem] px-[1rem] py-[1.62rem] bg-white md:drop-shadow-md  rounded-3xl">
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

          <div className="flex justify-between md:mt-6 mt-[2.25rem]">
            <div
              className=" bg-[#151544] md:h-[3.875rem] md:w-[3.875rem]  h-[3rem] w-[3rem] rounded-2xl flex justify-center items-center cursor-pointer hover:bg-[#1515449d] active:bg-[#151544]"
              onClick={() => sethashTag((prev) => !prev)}
            >
              <div className="content text-white md:text-3xl text-[1.1rem] font-medium ">
                #
              </div>
            </div>

            <button
              className="
             rounded-lg text-[#07BD65] border-[1.7px] border-[#07BD65] md:p-3 p-[0.62rem] md:text-xl text-md text-center
             font-medium md:w-36 w-[7.5rem] md:h-[3.3rem] h-[3rem]
              hover:border-[#07bd65ac]  hover:text-[#07bd65a0] active:border-[#07bd65] active:text-[#07bd65]"
            >
              Done
            </button>
          </div>
        </div>
        <div className="flex lg:ml-6 lg:w-fit lg:mt-0 mt-5 w-full ">
          <button className="py-3 px-6 my-5 lg:my-0  text-white bg-[#07BD65] rounded-2xl text-base font-medium  hover:bg-[#07bd65d4] active:bg-[#07bd65] w-full lg:w-fit">
            Use AI
          </button>
        </div>
      </div>
    </div>
  );
}
