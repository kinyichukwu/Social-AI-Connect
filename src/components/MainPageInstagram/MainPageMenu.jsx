import React from "react";
import { BsCalendarCheck, BsPencilFill } from "react-icons/bs";

const MainPageMenu = ({showNav}) => {
  return (
    <div className="md:w-[300px] w-full max-md:w-full max-md:relative fixed bottom-0 z-50 max-md:p-0 py-4 bg-[#151544] main-page-overflow  md:overflow-y-auto overflow-x-hidden mainpageMenuHeight c">
      <div className=" max-md:mb-0 flex max-md:items-center justify-center md:mt-0 mt-[1.55rem]">
        <div className="hover:bg-[#00ec7aaa] bg-[#00EC7B]  active:bg-[#00ec7aea]  text-white   cursor-pointer rounded-2xl pl-4 pr-9 py-2 mb-2 max-md:text-center flex items-center w-fit">
          <BsPencilFill className="mx-3" /> <p className="mx-3">Create</p>
        </div>
      </div>

      <div className=" max-md:mb-0 font-normal flex  justify-center w-fit flex-col mx-auto ">
        <div className="mt-6">
          <div className="hover:text-[#00ec7aaa]  active:text-[#00ec7aea]  text-[#00ec7aea]   cursor-pointer rounded-2xl px-6 py-2 mb-2  max-md:text-center flex items-center font-normal">
            <BsCalendarCheck className="mr-2" />{" "}
            <p className="mx-2">Your Updates</p>
          </div>

          <div className="hover:text-[#00ec7aaa]  active:text-[#00ec7aea]  text-white   cursor-pointer rounded-2xl px-6 py-2 mb-2  max-md:text-center flex items-center font-normal">
            <BsCalendarCheck className="mr-2" />{" "}
            <p className="mx-2">Overview</p>
          </div>

          <div className="hover:text-[#00ec7aaa]  active:text-[#00ec7aea]  text-white   cursor-pointer rounded-2xl px-6 py-2 mb-2  max-md:text-center flex items-center font-normal">
            <BsCalendarCheck className="mr-2" />{" "}
            <p className="mx-2">AI Generated</p>
          </div>

          <div className="hover:text-[#00ec7aaa]  active:text-[#00ec7aea]  text-white   cursor-pointer rounded-2xl px-6 py-2 mb-2  max-md:text-center flex items-center font-normal">
            <BsCalendarCheck className="mr-2" /> <p className="mx-2">Drafts</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="hover:text-[#00ec7aaa]  active:text-[#00ec7aea]  text-white   cursor-pointer rounded-2xl px-6 py-2 mb-2  max-md:text-center flex items-center font-normal">
            <BsCalendarCheck className="mr-2" />{" "}
            <p className="mx-2">Published</p>
          </div>

          <div className="hover:text-[#00ec7aaa]  active:text-[#00ec7aea]  text-white   cursor-pointer rounded-2xl px-6 py-2 mb-2  max-md:text-center flex items-center font-normal">
            <BsCalendarCheck className="mr-2" />{" "}
            <p className="mx-2">Campaign</p>
          </div>

          <div className="hover:text-[#00ec7aaa]  active:text-[#00ec7aea]  text-white   cursor-pointer rounded-2xl px-6 py-2 mb-2  max-md:text-center flex items-center font-normal">
            <BsCalendarCheck className="mr-2" />{" "}
            <p className="mx-2">Calendar</p>
          </div>

          <div className="hover:text-[#00ec7aaa]  active:text-[#00ec7aea]  text-white   cursor-pointer rounded-2xl px-6 py-2 mb-2  max-md:text-center flex items-center font-normal">
            <BsCalendarCheck className="mr-2" />{" "}
            <p className="mx-2">Settings</p>
          </div>
        </div>
      </div>

      <div className=" max-md:mb-0 flex max-md:items-center justify-center mt-4 ">
        <div className="text-[#151544] md:w-full bg-[#ffff] cursor-pointer  px-3 py-2 mb-2 max-md:text-center flex items-center hover:bg-[#ffffffb8] active:bg-[#ffffffe1] font-semibold">
          <p className="mx-auto  font-medium">Help Center</p>
        </div>
      </div>
    </div>
  );
};

export default MainPageMenu;
