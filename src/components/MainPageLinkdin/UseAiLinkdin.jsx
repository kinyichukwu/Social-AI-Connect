import React from "react";
import { useState } from "react";
import image from "../../assets/Main2/add image.svg";
import video from "../../assets/Main2/add video.svg";
import DocumentPic from "../../assets/Main2/DocumentPic.png";
import GreenButton from "../Button/GreenButton";
import image1 from "../../assets/Main2/asset1.png";
import image2 from "../../assets/Main2/asset2.png";
import image3 from "../../assets/Main2/asset3.png";
import image4 from "../../assets/Main2/asset4.png";

const UseAiLinkdin = () => {
  const [hashTag, sethashTag] = useState(false);
  return (
    <div className="px-[2%] py-[4.3%] bg-[#F6F6FF] h-full">
      <div className="flex items-start">
        <div className="flex flex-col justify-center items-center">
          <div className="p-[0.5rem] bg-white rounded-[1.4rem] w-fit">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="47"
              height="47"
              viewBox="0 0 47 47"
              fill="none"
            >
              <path
                d="M19.5218 25.8111L22.6664 29.5846L27.0689 23.9243L32.7293 31.4714H15.1192L19.5218 25.8111ZM35.245 32.7293V15.1192C35.245 13.723 34.1129 12.6035 32.7293 12.6035H15.1192C14.452 12.6035 13.8121 12.8686 13.3404 13.3404C12.8686 13.8121 12.6035 14.452 12.6035 15.1192V32.7293C12.6035 33.3965 12.8686 34.0364 13.3404 34.5082C13.8121 34.98 14.452 35.245 15.1192 35.245H32.7293C33.3965 35.245 34.0364 34.98 34.5082 34.5082C34.98 34.0364 35.245 33.3965 35.245 32.7293Z"
                fill="#07BD65"
              />
            </svg>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="104"
            height="104"
            viewBox="0 0 104 104"
            fill="none"
          >
            <g filter="url(#filter0_d_98652_4613)">
              <rect
                x="22"
                y="13"
                width="60"
                height="60"
                rx="22.6415"
                fill="white"
              />
              <path
                d="M65.0186 43.0003L45.4903 54.275L45.4903 31.7256L65.0186 43.0003Z"
                fill="#07BD65"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_98652_4613"
                x="0"
                y="0"
                width="104"
                height="104"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="9" />
                <feGaussianBlur stdDeviation="11" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_98652_4613"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_98652_4613"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <div className="p-[0.5rem] bg-white rounded-[1.4rem] w-fit">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="47"
              height="47"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M21 17H26.5L21 11.5V17ZM14 10H22L28 16V28C28 28.5304 27.7893 29.0391 27.4142 29.4142C27.0391 29.7893 26.5304 30 26 30H14C12.89 30 12 29.1 12 28V12C12 10.89 12.89 10 14 10ZM23 26V24H14V26H23ZM26 22V20H14V22H26Z"
                fill="#07BD65"
              />
            </svg>
          </div>


        </div>
        <div className=" w-[34rem] px-[2.25rem] py-[1.62rem] bg-white drop-shadow-md shadow-sm  rounded-2xl">
          <div className="border rounded-3xl border-[#0000002a] p-5">
            <input
              className="w-full outline-none text-[#121228c5] font-medium overflow-hidden"
              placeholder="What do want to talk about?"
            />
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

                <div
                  className="w-[86px] h-[86px] relative rounded-[20px] bg-gray-100 bg-no-repeat bg-center bg-contain"
                  style={{ backgroundImage: `url("${image4}")` }}
                >
                  <div className="w-[15px] h-[15px] left-[61px] top-[8px] absolute bg-white rounded-full" />
                  <div className="w-3 h-3 left-[63px] top-[10px] absolute cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M21 17H26.5L21 11.5V17ZM14 10H22L28 16V28C28 28.5304 27.7893 29.0391 27.4142 29.4142C27.0391 29.7893 26.5304 30 26 30H14C12.89 30 12 29.1 12 28V12C12 10.89 12.89 10 14 10ZM23 26V24H14V26H23ZM26 22V20H14V22H26Z"
                        fill="#07BD65"
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
              Choose file
            </button>
          </div>
        </div>
        <div className="flex ml-5">
          <GreenButton text="Use AI" />
        </div>
      </div>
    </div>
  );
};

export default UseAiLinkdin;
