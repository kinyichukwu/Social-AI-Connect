import React from "react";
import { BsCalendarCheck, BsPencilFill, BsSearch } from "react-icons/bs";
import search from "../../assets/search.png";
import image4 from "../../assets/MainPageInstagram/asset4.png";

const imgs = new Array(8).fill(0);

const MainPageVideoSearch = () => {
  return (
    <div className="w-[300px] max-md:w-full max-md:relative fixed  max-md:p-0 py-8 px-[0.88rem] bg-[#151544] main-page-overflow  overflow-y-auto overflow-x-hidden mainpageMenuHeight  md:block ">
      <div className="w-32 h-10 px-[0.88rem] py-[0.62rem] bg-[#25256B] rounded-xl border border-white justify-center items-center gap-2.5 inline-flex mt-3 mx-4 md:mx-0 ">
        <div className="text-white text-sm font-light">Import videos</div>
      </div>

      <div className=" h-11 pl-3 pr-20 py-0.5 bg-white rounded-3xl justify-start items-center flex space-x-1 my-[1.5rem] mx-4 md:mx-0">
        <img className=" " src={search} alt="" />
        <input
          className="opacity-60 text-slate-900 text-base font-normal "
          placeholder=" search videos"
        />
      </div>

      <div className=" mb-[0.875rem] mx-4 md:mx-0">
        <span className="text-white text-base font-light">Results for</span>
        <span className="text-white text-base font-semibold">
          {" "}
          Crypto videos
        </span>
      </div>

      <div className="flex flex-wrap gap-[0.75rem] justify-center my-8 mx-4 md:mx-0">
        {imgs.map((x, i) => (
          <div
            className="w-[128px] h-[14.5rem] flex justify-center items-center rounded-3xl bg-white"
            key={i}
          >
            <img src={image4} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPageVideoSearch;
