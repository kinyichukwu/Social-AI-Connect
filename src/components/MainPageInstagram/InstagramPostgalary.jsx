import React from "react";
import insp from "../../assets/MainPageInstagram/insp1.png";
import Instagram from "../../assets/Instagram.png";

const images = new Array(20).fill();

const InstagramPostgalary = () => {
    
  return (
    <>
      {/**dextop */}
      <div className="relative flex flex-col items-center">
        <div className="flex justify-center items-center gap-[1.44rem] pt-[1.38rem] pb-[1.52rem]">
          <img src={Instagram} alt="" />

          <p className="text-[#151544] font-normal">
            <span className="font-bold">Add Video</span> For Reel
          </p>
        </div>

        <div className=" w-full  bg-[#fdfdfd]  flex justify-center gap-[1.25rem] items-center">
          <div className="flex justify-center items-center">
            <p className="text-[#16FF8F] text-[1.25rem] font-normal">Gallery</p>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.712 16.8792L14.1953 18.4156L20.6953 25L27.1953 18.4156L25.6786 16.8792L20.6953 21.9273L15.712 16.8792Z"
                fill="#333333"
              />
            </svg>
          </div>

          <div className="text-[#151544] text-[1.25rem] font-semibold">Choose from drafts</div>
        </div>
      </div>

      {/**mobile */}

      {/**grid */}
      <div className="min-h-screen bg-[#f6f6ff]">
        <div className="flex flex-wrap py-6  pt-8  lg:px-20 px-[.5rem] justify-center gap-[0.25rem] items-center overflow-x-hidden">
          {images?.map((a, i) => (
            <img
              src={insp}
              alt=""
              key={i}
              className="h-[17.25rem] w-[11.375rem]"
            />
          ))}
        </div>{" "}
      </div>
    </>
  );
};

export default InstagramPostgalary;
