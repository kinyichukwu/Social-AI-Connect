import React from "react";
import HomePageNavBar from "./HomePageNavBar.component";
import homelogo from "../assets/MainPageInstagram/HomeLogo.png";
import backButton from "../assets/Back button.svg";
import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

import { BsCalendarCheck, BsPencilFill } from "react-icons/bs";
import hambugerMenu from "../assets/menu hamburger.png";

const menuA = [
  "Your Updates",
  "Overview",
  "AI Generated",
  "Drafts",
  "Published",
  "Campaign",
  "Calendar",
  "Settings",
];

const NavBar = () => {
  const [showNav, setshowNav] = useState(true);
  const [active, setactive] = useState(3);
  // nav and picture menu
  const [menu, setmenu] = useState(1);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname === "/useai/imagesearch");

  return (
    <div className="fixed  top-0 z-50  w-full bg-white">
      {/** hidden in mobile */}
      <div className="px-[5rem] py-[0.7rem] justify-between items-center md:flex hidden max-w-[84.5rem] mx-auto">
        <img src={homelogo} alt="" />

        <div className="flex  items-center">
          <Link
            to=""
            className="text-[#00A455] hover:text-[#1111114a] text-[13px] pr-[3.3rem] active:text-[#1111118b]"
          >
            Main page
          </Link>
          <Link
            to=""
            className="text-[#1111118b] hover:text-[#11111141] text-[13px] pr-[3.3rem] active:text-[#1111118b]"
          >
            Pricing
          </Link>
          <Link
            to=""
            className="text-[#1111118b] hover:text-[#11111141] text-[13px] pr-[3.3rem] active:text-[#1111118b]"
          >
            Turorial [ Demo ]
          </Link>
          <Link
            to=""
            className="text-[#1111118b] hover:text-[#11111141] text-[13px]  active:text-[#1111118b]"
          >
            Support
          </Link>
        </div>
      </div>

      <div
        className={`md:w-[300px] w-full max-md:w-full max-md:relative fixed bottom-0 z-50 max-md:p-0 py-4 bg-[#151544] main-page-overflow  md:overflow-y-auto overflow-x-hidden mainpageMenuHeight navbarMenu  ${
          showNav ? "hidden" : ""
        }`}
      >
        <div className=" max-md:mb-0 flex max-md:items-center justify-center md:mt-0 mt-[1.55rem]">
          <div
            onClick={() => {
              navigate("/useai");
              setshowNav(true);
            }}
            className="hover:bg-[#00ec7aaa] bg-[#00EC7B]  active:bg-[#00ec7aea]  text-white   cursor-pointer rounded-2xl pl-4 pr-9 py-2 mb-2 max-md:text-center flex items-center w-fit"
          >
            <BsPencilFill className="mx-3" /> <p className="mx-3">Create</p>
          </div>
        </div>

        <div className=" max-md:mb-0 font-normal flex  justify-center w-fit flex-col mx-auto ">
          <div className="mt-6">
            {menuA.slice(0, Math.floor(menuA.length / 2)).map((menu, i) => {
              return (
                <div
                  className={`hover:text-[#00ec7aaa]  active:text-[#00ec7aea] ${
                    i === 0 ? "text-[#00ec7aea]" : "text-white"
                  }     cursor-pointer rounded-2xl px-6 py-2 mb-2  max-md:text-center flex items-center`}
                  onClick={() => {
                    navigate(`/${menu.toLowerCase()}`);
                    setshowNav(true);
                  }}
                >
                  <BsCalendarCheck className="mr-2" />{" "}
                  <p className="mx-2">{menu}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6">
            {menuA.slice(Math.floor(menuA.length / 2)).map((menu, i) => {
              let cur = i + 4;
              return (
                <div
                  className={`hover:text-[#00ec7aaa]  active:text-[#00ec7aea] ${"text-white"}     cursor-pointer rounded-2xl px-6 py-2 mb-2  max-md:text-center flex items-center`}
                  onClick={() => {
                    navigate(`/${menu.toLowerCase()}`);
                    setshowNav(true);
                  }}
                >
                  <BsCalendarCheck className="mr-2" />{" "}
                  <p className="mx-2">{menu}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className=" max-md:mb-0 flex max-md:items-center justify-center my-4">
          <div className="text-[#151544] md:w-full bg-[#ffff] cursor-pointer  px-3 py-2 mb-2 max-md:text-center flex items-center hover:bg-[#ffffffb8] active:bg-[#ffffffe1] font-semibold rounded-xl">
            <p className="mx-auto  font-medium">Help Center</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
