import React from "react";
import { BsCalendarCheck, BsPencilFill, BsSearch } from "react-icons/bs";
import search from "../../assets/search.png";
import image from "../../assets/Main2/asset1.png";
import image2 from "../../assets/Main2/asset2.png";
import image3 from "../../assets/Main2/asset3.png";
import image4 from "../../assets/Main2/asset4.png";

const MainPageImageSearch = () => {
  return (
    <div className="w-[300px] max-md:w-full max-md:relative fixed  max-md:p-0 py-8 px-[0.88rem] bg-[#151544] main-page-overflow  overflow-y-auto overflow-x-hidden mainpageMenuHeight">
      <div className="w-32 h-10 px-[0.88rem] py-[0.62rem] bg-[#25256B] rounded-xl border border-white justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-sm font-light">Import images</div>
      </div>

      <div className="w-full h-11 pl-3 pr-20 py-0.5 bg-white rounded-3xl justify-start items-center flex space-x-1 my-[1.5rem]">
        <img className=" " src={search} alt="" />
        <input
          className="opacity-60 text-slate-900 text-base font-normal "
          placeholder=" search images"
        />
      </div>

      <div className=" mb-[0.875rem]">
        <span className="text-white text-base font-light">Results for</span>
        <span className="text-white text-base font-semibold">
          {" "}
          Crypto currency
        </span>
      </div>

      <div className="flex flex-wrap gap-[0.75rem] justify-center">
        <div className="  w-[128px] h-[12rem] flex justify-center items-center rounded-3xl bg-white ">
          <img src={image2} alt="" className="" />
        </div>
        <div className="w-[128px] h-[14.5rem] flex justify-center items-center rounded-3xl bg-white">
          <img src={image4} alt="" />
        </div>
        <div className="w-[128px] h-[14.5rem] flex justify-center items-center rounded-3xl bg-white">
          <img src={image4} alt="" />
        </div>
        <div className="  w-[128px] h-[12rem] flex justify-center items-center rounded-3xl bg-white  ">
          <img src={image4} alt="" />
        </div>

        <div className="  w-[128px] h-[12rem] flex justify-center items-center rounded-3xl bg-white  ">
          <img src={image4} alt="" />
        </div>
        <div className="  w-[128px] h-[12rem] flex justify-center items-center rounded-3xl bg-white ">
          <img src={image2} alt="" className="" />
        </div>

        <div className="w-[128px] h-[14.5rem] flex justify-center items-center rounded-3xl bg-white  ">
          <img src={image4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainPageImageSearch;
