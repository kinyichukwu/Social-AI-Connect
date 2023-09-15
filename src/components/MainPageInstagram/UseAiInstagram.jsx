import { useState } from "react";
import image from "../../assets/Main2/add image.svg";
import video from "../../assets/Main2/add video.svg";
import GreenButton from "../Button/GreenButton";
import image1 from "../../assets/Main2/asset1.png";
import image2 from "../../assets/Main2/asset2.png";
import image3 from "../../assets/Main2/asset3.png";
import image4 from "../../assets/Main2/asset4.png";
import { useNavigate } from "react-router-dom";

export default function UseAiInstagram() {
  const navigate = useNavigate();
  const [hashTag, sethashTag] = useState(false);
  const [showAi, setshowAi] = useState(false);
  return (
    <div className="md:px-8 px-5 py-14 bg-[#F6F6FF] h-full min-h-screen">
      <div className="flex items-start md:justify-end lg:justify-center lg:flex-row flex-col-reverse">
        <div className="flex lg:flex-col flex-row">
          <img
            src={image}
            alt=""
            className="lg:translate-y-[-12px] lg:translate-x-[0] translate-x-[-23px] cursor-pointer"
            onClick={() => navigate("/useai/imagesearch")}
          />
          <img
            src={video}
            alt=""
            className=" lg:translate-y-[-33px] lg:translate-x-[0] translate-x-[-33px] cursor-pointer"
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

          {showAi && (
            <div className="">
              <h1 className=" text-[1rem] text-[#3A3A61] font-semibold mb-4 mt-4">
                What do you want to post about?
              </h1>
              <input
                type="text"
                placeholder=""
                className="h-[3.3125rem] w-full p-[1.25rem] rounded-3xl border border-[#00000032]"
              />
            </div>
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
              onClick={() => navigate("/useai/scheduling")}
            >
              Done
            </button>
          </div>
        </div>
        <div className="flex lg:ml-6 lg:w-fit lg:mt-0 mt-5 w-full ">
          <button
            onClick={() => setshowAi((prev) => !prev)}
            className="py-3 px-6 my-5 lg:my-0  text-white bg-[#07BD65] rounded-2xl text-base font-medium  hover:bg-[#07bd65d4] active:bg-[#07bd65] w-full lg:w-fit"
          >
            {showAi ? "Compose" : "Use AI"}
          </button>
        </div>
      </div>

      {showAi && (
        <div className="flex space-x-[1.5rem] justify-center mt-[1.25rem] bg-white rounded-3xl py-[0.56rem] px-[1.31rem] w-fit mx-auto">
          <div className="bg-[#151544] p-[0.67rem] rounded-3xl cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="40"
              viewBox="0 0 39 40"
              fill="none"
            >
              <path
                d="M29.4388 21.455H20.3143V30.5794H17.2729V21.455H8.14844V18.4135H17.2729V9.28906H20.3143V18.4135H29.4388V21.455Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="bg-[#151544] p-[0.67rem] rounded-3xl cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="40"
              viewBox="0 0 39 40"
              fill="none"
            >
              <path
                d="M16.6329 15.0039C16.8777 14.4716 17.0161 13.8861 17.0161 13.2581C17.0161 10.9055 15.1106 9 12.7581 9C10.4055 9 8.5 10.9055 8.5 13.2581C8.5 15.6106 10.4055 17.5161 12.7581 17.5161C13.3861 17.5161 13.9716 17.3777 14.5039 17.1329L17.0161 19.6452L14.5039 22.1574C13.9716 21.9126 13.3861 21.7742 12.7581 21.7742C10.4055 21.7742 8.5 23.6797 8.5 26.0323C8.5 28.3848 10.4055 30.2903 12.7581 30.2903C15.1106 30.2903 17.0161 28.3848 17.0161 26.0323C17.0161 25.4042 16.8777 24.8187 16.6329 24.2865L19.1452 21.7742L26.5968 29.2258H29.7903V28.1613L16.6329 15.0039ZM12.7581 15.3871C11.5871 15.3871 10.629 14.4397 10.629 13.2581C10.629 12.0765 11.5871 11.129 12.7581 11.129C13.929 11.129 14.8871 12.0765 14.8871 13.2581C14.8871 14.4397 13.929 15.3871 12.7581 15.3871ZM12.7581 28.1613C11.5871 28.1613 10.629 27.2139 10.629 26.0323C10.629 24.8506 11.5871 23.9032 12.7581 23.9032C13.929 23.9032 14.8871 24.8506 14.8871 26.0323C14.8871 27.2139 13.929 28.1613 12.7581 28.1613ZM19.1452 20.1774C18.8471 20.1774 18.6129 19.9432 18.6129 19.6452C18.6129 19.3471 18.8471 19.1129 19.1452 19.1129C19.4432 19.1129 19.6774 19.3471 19.6774 19.6452C19.6774 19.9432 19.4432 20.1774 19.1452 20.1774ZM26.5968 10.0645L20.2097 16.4516L22.3387 18.5806L29.7903 11.129V10.0645H26.5968Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="bg-[#151544] p-[0.67rem] rounded-3xl cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="40"
              viewBox="0 0 39 40"
              fill="none"
            >
              <path
                d="M23.9849 29.3236H28.8236V24.4849H23.9849V29.3236ZM23.9849 22.0655H28.8236V17.2268H23.9849V22.0655ZM16.7268 14.8075H21.5655V9.96875H16.7268V14.8075ZM23.9849 14.8075H28.8236V9.96875H23.9849V14.8075ZM16.7268 22.0655H21.5655V17.2268H16.7268V22.0655ZM9.46875 22.0655H14.3075V17.2268H9.46875V22.0655ZM9.46875 29.3236H14.3075V24.4849H9.46875V29.3236ZM16.7268 29.3236H21.5655V24.4849H16.7268V29.3236ZM9.46875 14.8075H14.3075V9.96875H9.46875V14.8075Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
