import React from "react";
import search from "../../assets/search.png";
import mainPostImage from "../../assets/mainpostimage.png";
import profile from "../../assets/Main2/profile.jpg";
import { PiClipboardTextFill } from "react-icons/pi";
import { BiTimeFive } from "react-icons/bi";
import { MdPublish } from "react-icons/md";

const CreateSchedulePost = () => {
  return (
    <>
      {/**grid */}
      <div className="h-screen bg-[#f6f6ff]">
        {" "}
        <div className="flex flex-wrap py-6  pt-8  gap-9  md:px-8  lg:px-32 items-start justify-center mx-[1rem]">
          {/**col */}
          <div className="flex md:space-x-[2.5rem] md:space-y-0 md:flex-row flex-col space-y-5">
            <div className="flex  flex-col">
              <div class="bg-white rounded-3xl  max-w-[25rem]  p-[1.14rem] drop-shadow-sm shadow">
                <div class="bg-white rounded-sm max-w-md">
                  <img src={mainPostImage} className=" max-h-[15rem] w-full" />
                  <div class="flex items-center mt-3 mb-2 justify-center">
                    <div class="flex ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="7"
                        height="8"
                        viewBox="0 0 7 8"
                        fill="none"
                        className="mr-[0.34rem]"
                      >
                        <circle
                          cx="3.85919"
                          cy="4.03595"
                          r="3.08966"
                          fill="#0C22EB"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="7"
                        height="8"
                        viewBox="0 0 7 8"
                        fill="none"
                        className="mr-[0.34rem]"
                      >
                        <circle
                          cx="3.85919"
                          cy="4.03595"
                          r="3.08966"
                          fill="#D9D9D9"
                        />
                      </svg>
                    </div>
                  </div>

                  <div class=" text-sm  mt-2 mb-4 text-[0.8rem]">
                    <span className="font-semibold">Dictumst scelerisque</span>{" "}
                    ut commodo dis. Risus ac tellus sapien gravida sit elementum
                    dui eget nunc. Eu arcu montes, sit elit, maecenas feugiat.{" "}
                    <span className=" text-[#2C2CDF]">
                      {" "}
                      fashion #branding #clothesstyle
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-5 space-x-1">
                <div className="flex items-center justify-center border border-[#07BD65] rounded-2xl p-[0.55rem] w-full space-x-[0.1rem] cursor-pointer">
                  <PiClipboardTextFill size={25} className=" text-green-500" />

                  <p className="text-green-500 text-xs font-normal my-auto">
                    Add to draft
                  </p>
                </div>
                <div className="flex items-center justify-center border border-[#07BD65] rounded-2xl p-[0.55rem] w-full space-x-[0.1rem] cursor-pointer">
                  <BiTimeFive size={25} className=" text-green-500" />

                  <p className="text-green-500 text-xs font-normal my-auto">
                    Schedule
                  </p>
                </div>
                <div className="flex items-center justify-center border border-[#07BD65] bg-green-500 rounded-2xl p-[0.55rem] w-full space-x-[0.1rem] cursor-pointer">
                  <MdPublish size={25} className=" text-white" />

                  <p className="text-white text-xs font-normal my-auto">
                    Publish
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 57 57"
                fill="none"
                className=" cursor-pointer hidden md:block"
              >
                <path
                  d="M57 28.5C57 44.2401 44.2401 57 28.5 57C12.7599 57 0 44.2401 0 28.5C0 12.7599 12.7599 0 28.5 0C44.2401 0 57 12.7599 57 28.5Z"
                  fill="#07BD65"
                />
                <path
                  d="M37.8407 31.5847H30.4051V39.1251H27.4378V31.5847H20.0371V28.8967H27.4378V21.3215H30.4051V28.8967H37.8407V31.5847Z"
                  fill="white"
                />
              </svg>

              <div className="w-full bg-green-500 text-white text-[25px] font-semibold text-center rounded-3xl md:hidden">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateSchedulePost;
