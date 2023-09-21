import React, { useState } from "react";
import search from "../../assets/search.png";
import mainPostImage from "../../assets/mainpostimage.png";
import profile from "../../assets/MainPageInstagram/profile.jpg";
import reel from "../../assets/MainPageInstagram/reel.png";
import plusInsta from "../../assets/MainPageInstagram/plusInstagram.png";
import { PiClipboardTextFill } from "react-icons/pi";
import { BiTimeFive } from "react-icons/bi";
import { MdPublish } from "react-icons/md";
import CalenderPopUp from "../Calender/CalenderPopUp";
import { GrClose } from "react-icons/gr";

const ShowReal = ({ close }) => {
  return (
    <div className="flex items-center justify-center flex-row md:flex-col md:space-y-4 md:space-x-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 58 57"
        fill="none"
        onClick={close}
        className="cursor-pointer hidden md:block"
      >
        <path
          d="M49.1529 8.34746C60.2829 19.4774 60.2829 37.5226 49.1529 48.6525C38.023 59.7825 19.9778 59.7825 8.84786 48.6525C-2.28209 37.5226 -2.28209 19.4774 8.84786 8.34746C19.9778 -2.78249 38.023 -2.78248 49.1529 8.34746Z"
          fill="#07BD65"
        />
        <path
          d="M37.7865 24.0763L32.5287 29.3341L37.8606 34.666L35.7624 36.7641L30.4306 31.4323L25.1974 36.6654L23.2967 34.7647L28.5299 29.5316L23.1733 24.1751L25.2715 22.0769L30.628 27.4334L35.8858 22.1756L37.7865 24.0763Z"
          fill="white"
        />
      </svg>

      <div
        className="w-full bg-green-500 text-white text-[25px] font-semibold text-center rounded-3xl md:hidden mr-3 cursor-pointer"
        onClick={() => close()}
      >
        —
      </div>

      <div className=" bg-[#D3D3EF] p-[0.3rem] rounded-full cursor-pointer w-full md:w-fit mr-3">
        <img src={reel} alt="" className="mx-auto" />
      </div>

      <div className="bg-[#D3D3EF] p-[0.3rem] rounded-full cursor-pointer  w-full md:w-fit">
        <img src={plusInsta} alt="" className="mx-auto" />
      </div>
    </div>
  );
};

const CreateSchedulePost = () => {
  const [reelOption, setreelOption] = useState(false);

  return (
    <>
      {/**grid
       */}
      <CalenderPopUp />
      <div className="h-screen bg-[#f6f6ff] relative">
        {" "}
        <div className="flex flex-wrap py-6  pt-8  gap-9  md:px-8  lg:px-32 items-start justify-center mx-[1rem]">
          {/**col */}
          <div className="flex md:space-x-[2.5rem] md:space-y-0 md:flex-row flex-col space-y-5">
            <div className="flex  flex-col">
              <div className="bg-white rounded-3xl  max-w-[25rem]  p-[1.14rem] drop-shadow-sm shadow">
                <div className="bg-white rounded-sm max-w-md">
                  <img src={mainPostImage} className=" max-h-[15rem] w-full" />
                  <div className="flex items-center mt-3 mb-2 justify-center">
                    <div className="flex ">
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

                  <div className=" text-sm  mt-2 mb-4 text-[0.8rem]">
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
              {reelOption ? (
                <ShowReal
                  close={() => setreelOption(false)}
                  reelOption={reelOption}
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 57 57"
                  fill="none"
                  className=" cursor-pointer hidden md:block"
                  onClick={() => setreelOption(true)}
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
              )}

              {!reelOption && (
                <div
                  className="w-full bg-green-500 text-white text-[25px] font-semibold text-center rounded-3xl md:hidden"
                  onClick={() => setreelOption(true)}
                >
                  +
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateSchedulePost;
