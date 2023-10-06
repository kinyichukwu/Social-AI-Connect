import React from "react";
import search from "../../assets/search.svg";
import insp from "../../assets/MainPageInstagram/insp1.png";
import ex from "../../assets/MainPageInstagram/cancel.svg";

const images = new Array(20).fill();
const InstagramInspiration = () => {
  return (
    <>
      {/**dextop */}
      <div className="relative flex flex-col items-center">
        <h1 className="text-center text-[#151544] text-[1.25rem] font-semibold hidden md:block mt-[1.5rem]">
          Search people or topics to get more inspiration 😍💡{" "}
        </h1>
        <div className=" w-full  bg-[#fdfdfd]  flex justify-center">
          <div className=" p-5">
            {/**search */}
            <div className=" h-11 w-80 bg-[#f6f6f6] rounded-3xl flex items-center ">
              <img src={search} alt="" className="px-4" />

              <input
                type="text"
                placeholder="Begin your search"
                className="bg-[#f6f6f6] text-[#4F4F4F]"
              />
            </div>
          </div>
        </div>

        <div className="absolute w-[80%] max-w-[38.9rem] bg-white top-[10rem] flex flex-col rounded-2xl">
          <div className="flex justify-between pt-[0.81rem] pb-[0.69rem] px-[1.8rem]">
            <p className="text-[#151544] text-[1.25rem] font-medium">Recent</p>
            <p className="text-[1.25rem] text-[#0B32FF] font-normal cursor-pointer">See all</p>
          </div>

          <div className="">
            <div className="flex justify-between py-[1.5rem] pl-[2.5rem] pr-[0.75rem] items-start">
              {/**image and name */}
              <div className="flex gap-[1.08rem]  ">
                <img
                  src={insp}
                  alt=""
                  className="w-[5.9375rem] h-[5.9375rem] rounded-full border-2 border-[#FF1414]"
                />

                <div className="">
                  <p className="text-[#151544] text-[1.25rem] font-medium ">
                    Victor_finance
                  </p>
                  <p className="text-[#9797B1] text-[1rem] font-normal ">
                    Victor_finance
                  </p>
                  <p className="text-[#9797B1] text-[1rem] font-normal ">
                    107M followers
                  </p>
                </div>
              </div>
              {/**close */}
              <img src={ex} alt="" />
            </div>
            <div className="flex justify-between py-[1.5rem] pl-[2.5rem] pr-[0.75rem] items-start">
              {/**image and name */}
              <div className="flex gap-[1.08rem]  ">
                <img
                  src={insp}
                  alt=""
                  className="w-[5.9375rem] h-[5.9375rem] rounded-full "
                />

                <div className="">
                  <p className="text-[#151544] text-[1.25rem] font-medium ">
                    Victor_finance
                  </p>
                  <p className="text-[#9797B1] text-[1rem] font-normal ">
                    Victor_finance
                  </p>
                  <p className="text-[#9797B1] text-[1rem] font-normal ">
                    107M followers
                  </p>
                </div>
              </div>
              {/**close */}
              <img src={ex} alt=""  className=" cursor-pointer"/>
            </div>
          </div>
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

export default InstagramInspiration;
