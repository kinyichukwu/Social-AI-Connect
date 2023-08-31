import Instagram from "../assets/Instagram.png";
import Linkdin from "../assets/Linkdin.png";
import Twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.svg";
import homelogo from "../assets/Main2/HomeLogo.png";
import backButton from "../assets/Back button.svg";
import hambugerMenu from "../assets/menu hamburger.png";
import { useHover } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";

import { BsCalendarCheck, BsPencilFill } from "react-icons/bs";

// menu
import MainPageMenu from "../components/MainPageInstagram/MainPageMenu";
import MainPageImageSearch from "../components/MainPageInstagram/MainPageImageSearch";

// components Instagram

import search from "../assets/search.png";
import mainPostImage from "../assets/mainpostimage.png";
import profile from "../assets/Main2/profile.jpg";
import calenderImage from "../assets/calender/calenderImage.png";

import { useState } from "react";

const Calendar = () => {
  const [ref1, hovering1] = useHover();
  const [ref2, hovering2] = useHover();
  const [ref3, hovering3] = useHover();
  const [ref4, hovering4] = useHover();
  const [showNav, setshowNav] = useState(true);
  return (
    <div className=" md:h-screen">
      {/**nav bar */}
      <div className="fixed  top-0 z-50  w-full ">
        {/** hidden in mobile */}
        <div className="px-[5rem] py-[0.7rem] justify-between items-center bg-white md:flex hidden ">
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
        <div className="py-4 bg-[#0E0E35] md:px-14 px-[1rem] flex justify-between items-center">
          <img className="md:hidden" src={backButton} alt="" />
          <button className="p-[0.62rem] text-white md:inline-block hidden   rounded-xl hover:text-[#ffffff7f] hover:border-[#ffffff7f] active:text-white  active:border-white font-medium">
            Go back
          </button>
          <button className="py-[1.15rem] px-[1.72rem] text-[#4F4F4F] border border-white rounded-3xl bg-[#E7E7E7] hover:bg-[#e7e7e7c7]  font-medium hover:border-transparent  active:bg-[#E7E7E7] ">
            Company Logo
          </button>
          <div className="flex gap-10">
            <img
              className="md:hidden"
              src={hambugerMenu}
              alt=""
              onClick={() => setshowNav((prev) => !prev)}
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="47"
              height="47"
              viewBox="0 0 47 47"
              fill="none"
              className="md:inline-block hidden"
            >
              <path
                d="M23.4204 32.824C20.2533 32.824 17.4536 31.2024 15.8193 28.7701C15.8574 26.2364 20.8867 24.8428 23.4204 24.8428C25.9541 24.8428 30.9835 26.2364 31.0215 28.7701C29.3873 31.2024 26.5876 32.824 23.4204 32.824ZM23.4204 14.8347C24.4284 14.8347 25.3951 15.2351 26.1078 15.9479C26.8206 16.6606 27.221 17.6273 27.221 18.6353C27.221 19.6432 26.8206 20.6099 26.1078 21.3227C25.3951 22.0354 24.4284 22.4358 23.4204 22.4358C22.4125 22.4358 21.4458 22.0354 20.733 21.3227C20.0203 20.6099 19.6199 19.6432 19.6199 18.6353C19.6199 17.6273 20.0203 16.6606 20.733 15.9479C21.4458 15.2351 22.4125 14.8347 23.4204 14.8347ZM23.4204 11.0342C21.7568 11.0342 20.1094 11.3619 18.5724 11.9985C17.0354 12.6352 15.6388 13.5683 14.4625 14.7447C12.0867 17.1205 10.752 20.3428 10.752 23.7027C10.752 27.0626 12.0867 30.2848 14.4625 32.6606C15.6388 33.837 17.0354 34.7702 18.5724 35.4068C20.1094 36.0435 21.7568 36.3711 23.4204 36.3711C26.7803 36.3711 30.0026 35.0364 32.3784 32.6606C34.7542 30.2848 36.0889 27.0626 36.0889 23.7027C36.0889 16.697 30.3881 11.0342 23.4204 11.0342Z"
                fill="white"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="47"
              height="47"
              viewBox="0 0 47 47"
              fill="none"
              className="md:inline-block hidden"
            >
              <path
                d="M25.8886 34.0669C25.8886 34.7389 25.619 35.3834 25.139 35.8585C24.659 36.3337 24.0081 36.6006 23.3293 36.6006C22.6505 36.6006 21.9996 36.3337 21.5196 35.8585C21.0397 35.3834 20.77 34.7389 20.77 34.0669H25.8886ZM23.3293 11.2637C23.6687 11.2637 23.9942 11.3971 24.2341 11.6347C24.4741 11.8723 24.6089 12.1945 24.6089 12.5305V13.8987C28.2431 14.5068 31.0072 17.6359 31.0072 21.3985V28.9995L34.8461 32.8001H11.8125L15.6514 28.9995V21.3985C15.6514 17.6359 18.4155 14.5068 22.0497 13.8987V12.5305C22.0497 12.1945 22.1845 11.8723 22.4245 11.6347C22.6644 11.3971 22.9899 11.2637 23.3293 11.2637Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <div
          className={`md:w-[300px] w-full max-md:w-full max-md:relative fixed bottom-0 z-50 max-md:p-0 py-4 bg-[#151544] main-page-overflow  md:overflow-y-auto overflow-x-hidden mainpageMenuHeight navbarMenu  ${
            showNav ? "hidden" : ""
          }`}
        >
          <div className=" max-md:mb-0 flex max-md:items-center justify-center md:mt-0 mt-[1.55rem]">
            <div className="hover:bg-[#00ec7aaa] bg-[#00EC7B]  active:bg-[#00ec7aea]  text-white   cursor-pointer rounded-2xl pl-4 pr-9 py-2 mb-2 max-md:text-center flex items-center w-fit">
              <BsPencilFill className="mx-3" /> <p className="mx-3">Create</p>
            </div>
          </div>

          <div className=" max-md:mb-0 font-normal flex  justify-center w-fit flex-col mx-auto ">
            <div className="mt-6">
              <div className="hover:text-[#00ec7aaa]  active:text-[#00ec7aea]  text-[#00ec7aea]   cursor-pointer rounded-2xl px-6 py-2 mb-2  max-md:text-center flex items-center">
                <BsCalendarCheck className="mr-2" />{" "}
                <p className="mx-2">Your Updates</p>
              </div>

              <div className="hover:text-[#00ec7aaa]  active:text-[#00ec7aea]  text-white   cursor-pointer rounded-2xl px-6 py-2 mb-2  max-md:text-center flex items-center ">
                <BsCalendarCheck className="mr-2" />{" "}
                <p className="mx-2">Overview</p>
              </div>

              <div className="hover:text-[#00ec7aaa]  active:text-[#00ec7aea]  text-white   cursor-pointer rounded-2xl px-6 py-2 mb-2  max-md:text-center flex items-center">
                <BsCalendarCheck className="mr-2" />{" "}
                <p className="mx-2">AI Generated</p>
              </div>

              <div className="hover:text-[#00ec7aaa]  active:text-[#00ec7aea]  text-white   cursor-pointer rounded-2xl px-6 py-2 mb-2  max-md:text-center flex items-center ">
                <BsCalendarCheck className="mr-2" />{" "}
                <p className="mx-2">Drafts</p>
              </div>
            </div>

            <div className="mt-6">
              <div className="hover:text-[#00ec7aaa]  active:text-[#00ec7aea]  text-white   cursor-pointer rounded-2xl px-6 py-2 mb-2  max-md:text-center flex items-center">
                <BsCalendarCheck className="mr-2" />{" "}
                <p className="mx-2">Published</p>
              </div>

              <div className="hover:text-[#00ec7aaa]  active:text-[#00ec7aea]  text-white   cursor-pointer rounded-2xl px-6 py-2 mb-2  max-md:text-center flex items-center ">
                <BsCalendarCheck className="mr-2" />{" "}
                <p className="mx-2">Campaign</p>
              </div>

              <div className="hover:text-[#00ec7aaa]  active:text-[#00ec7aea]  text-white   cursor-pointer rounded-2xl px-6 py-2 mb-2  max-md:text-center flex items-center ">
                <BsCalendarCheck className="mr-2" />{" "}
                <p className="mx-2">Calendar</p>
              </div>

              <div className="hover:text-[#00ec7aaa]  active:text-[#00ec7aea]  text-white   cursor-pointer rounded-2xl px-6 py-2 mb-2  max-md:text-center flex items-center">
                <BsCalendarCheck className="mr-2" />{" "}
                <p className="mx-2">Settings</p>
              </div>
            </div>
          </div>

          <div className=" max-md:mb-0 flex max-md:items-center justify-center my-4">
            <div className="text-[#151544] md:w-full bg-[#ffff] cursor-pointer  px-3 py-2 mb-2 max-md:text-center flex items-center hover:bg-[#ffffffb8] active:bg-[#ffffffe1] font-semibold rounded-xl">
              <p className="mx-auto  font-medium">Help Center</p>
            </div>
          </div>
        </div>
      </div>

      <section className="flex  max-md:flex-col md:mt-[171.6px] mt-[94px] h-full">
        <MainPageMenu showNav={showNav} />

        <div className="w-full  ml-[300px] max-md:w-full max-md:ml-0">
          <div className="  flex justify-center items-center bg-[#ffffff]  shadow-[#00000000] drop-shadow-md ">
            <div
              className=" pt-6 md:mr-[1.75rem] mr-[1.43rem] cursor-pointer "
              ref={ref1}
            >
              <img
                src={facebook}
                alt=""
                className="md:w-[1.875rem] w-[1.6rem] mx-auto"
              />
              <p className="text-[#111111]/60 md:text-xs text-[0.6rem] ">
                Facebook
              </p>
              <div
                className={`mt-[0.2rem] w-full h-[0.4rem] ${
                  hovering1 ? "bg-[#00D871]" : "bg - white"
                } rounded-md`}
              ></div>
            </div>
            <div
              className=" pt-6 md:mr-[1.75rem] mr-[1.43rem] cursor-pointer"
              ref={ref2}
            >
              <img
                src={Twitter}
                alt=""
                className="md:w-[1.875rem] w-[1.6rem] mx-auto"
              />
              <p className="text-[#111111]/60 md:text-xs text-[0.6rem]">
                Twitter
              </p>
              <div
                className={`mt-[0.2rem] w-full h-[0.4rem] ${
                  hovering2 ? "bg-[#00D871] bg-gradient-to-r " : "bg - white"
                } rounded-md`}
              ></div>
            </div>
            <div
              className=" pt-6 md:mr-[1.75rem] mr-[1.43rem] cursor-pointer"
              ref={ref3}
            >
              <img
                src={Instagram}
                alt=""
                className="md:w-[1.875rem] mx-auto w-[1.6rem]"
              />
              <p className="text-[#111111]/60 md:text-xs text-[0.6rem]">
                Instagram
              </p>
              <div
                className={`mt-[0.2rem] w-full h-[0.4rem] ${
                  hovering3 ? "bg-[#00D871]" : "bg - white"
                } rounded-md`}
              ></div>
            </div>
            <div className=" pt-6 cursor-pointer" ref={ref4}>
              {" "}
              <img
                src={Linkdin}
                alt=""
                className="md:w-[1.875rem] w-[1.6rem] mx-auto"
              />
              <p className="text-[#111111]/60 md:text-xs text-[0.6rem]">
                LinkedIn
              </p>
              <div
                className={`mt-[0.2rem] w-full h-[0.4rem] ${
                  hovering4 ? "bg-[#00D871]" : "bg - white"
                } rounded-md`}
              ></div>
            </div>
          </div>

          {/**edit trending post */}

          {/**dextop menu*/}
          <div className=" w-full  bg-[#fdfdfd]  hidden md:flex items-center">
            <div className="flex-[34%] border-r flex space-x-1">
              <h1 className=" text-xl font-medium text-right">All Calendar</h1>
            </div>
            <div className="flex-[66%] ">
              <div className="  flex justify-center items-center ">
                <div
                  className="md:mr-[1.75rem] mr-[1.43rem] cursor-pointer "
                  ref={ref1}
                >
                  <img
                    src={facebook}
                    alt=""
                    className="md:w-[1.875rem] w-[1.6rem] mx-auto"
                  />
                  <p className="text-[#111111]/60 md:text-xs text-[0.6rem] ">
                    Facebook
                  </p>
                  <div
                    className={`mt-[0.2rem] w-full h-[0.4rem] ${
                      hovering1 ? "bg-[#00D871]" : "bg - white"
                    } rounded-md`}
                  ></div>
                </div>
                <div
                  className="  md:mr-[1.75rem] mr-[1.43rem] cursor-pointer"
                  ref={ref2}
                >
                  <img
                    src={Twitter}
                    alt=""
                    className="md:w-[1.875rem] w-[1.6rem] mx-auto"
                  />
                  <p className="text-[#111111]/60 md:text-xs text-[0.6rem]">
                    Twitter
                  </p>
                  <div
                    className={`mt-[0.2rem] w-full h-[0.4rem] ${
                      hovering2
                        ? "bg-[#00D871] bg-gradient-to-r "
                        : "bg - white"
                    } rounded-md`}
                  ></div>
                </div>
                <div
                  className="  md:mr-[1.75rem] mr-[1.43rem] cursor-pointer"
                  ref={ref3}
                >
                  <img
                    src={Instagram}
                    alt=""
                    className="md:w-[1.875rem] mx-auto w-[1.6rem]"
                  />
                  <p className="text-[#111111]/60 md:text-xs text-[0.6rem]">
                    Instagram
                  </p>
                  <div
                    className={`mt-[0.2rem] w-full h-[0.4rem] ${
                      hovering3 ? "bg-[#00D871]" : "bg - white"
                    } rounded-md`}
                  ></div>
                </div>
                <div className=" cursor-pointer" ref={ref4}>
                  {" "}
                  <img
                    src={Linkdin}
                    alt=""
                    className="md:w-[1.875rem] w-[1.6rem] mx-auto"
                  />
                  <p className="text-[#111111]/60 md:text-xs text-[0.6rem]">
                    LinkedIn
                  </p>
                  <div
                    className={`mt-[0.2rem] w-full h-[0.4rem] ${
                      hovering4 ? "bg-[#00D871]" : "bg - white"
                    } rounded-md`}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/**mobile and dextop */}

          {/**grid */}
          <div className="min-h-screen bg-[#f6f6ff] px-[1.25rem] py-[2.6rem]">
            {" "}
            <div className=" bg-[#fff] rounded-lg">
              <div className="flex flex-wrap py-6  pt-8  gap-9  md:px-[3.31rem] md:py-[3.44rem] px-[1rem] justify-center  items-start">
                {/**col */}
                <div className="">
                  <div class=" rounded-3xl  items-center w-[13.1rem] h-[26rem]  px-[0.75rem] py-[0.5rem] drop-shadow-sm shadow border border-[#8b8b8b] bg-[#8b8b8b08]">
                    {/**inner */}
                    <div className="bg-[#fff] h-full rounded-xl">
                      <div className="flex flex-col gap-[0.81rem]">
                        <div className=" text-center w-full bg-[#E8E8FF] rounded-3xl text-[1rem] text-[#151544]">
                          1
                        </div>
                        <div className=" text-center  text-[1rem] font-medium">
                          4 scheduled
                        </div>
                      </div>

                      <div className="flex flex-col mt-[1.2rem] py-[1.25rem] px-[1rem] justify-between ">
                        <div className="h-[9rem] w-[9rem]">
                          <img
                            className="w-full bg-cover rounded-2xl"
                            alt=""
                            src={calenderImage}
                          />
                        </div>

                        <div className=" text-center my-[0.75rem] text-[0.875rem]">
                          <span className=" font-semibold">
                            Dictumst scelerisque{" "}
                          </span>
                          <span className=" font-normal">
                            gravida sit elemen maecenas feugiat
                          </span>
                        </div>
                        <div className=" text-center text-[0.89rem] p-[0.59rem] rounded-3xl font-normal text-[#CE0C00] bg-[#FF616129]">
                          9:20 AM -2:30PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/**col */}
                <div className="">
                  <div class=" rounded-3xl  items-center w-[13.1rem] h-[26rem]  px-[0.75rem] py-[0.5rem] drop-shadow-sm shadow border border-[#8b8b8b] bg-[#8b8b8b08]">
                    {/**inner */}
                    <div className="bg-[#fff] h-full rounded-xl">
                      <div className="flex flex-col gap-[0.81rem]">
                        <div className=" text-center w-full bg-[#E8E8FF] rounded-3xl text-[1rem] text-[#151544]">
                          1
                        </div>
                        <div className=" text-center  text-[1rem] font-medium">
                          4 scheduled
                        </div>
                      </div>

                      <div className="flex flex-col mt-[1.2rem] py-[1.25rem] px-[1rem] justify-between ">
                        <div className="h-[9rem] w-[9rem]">
                          <img
                            className="w-full bg-cover rounded-2xl"
                            alt=""
                            src={calenderImage}
                          />
                        </div>

                        <div className=" text-center my-[0.75rem] text-[0.875rem]">
                          <span className=" font-semibold">
                            Dictumst scelerisque{" "}
                          </span>
                          <span className=" font-normal">
                            gravida sit elemen maecenas feugiat
                          </span>
                        </div>
                        <div className=" text-center text-[0.89rem] p-[0.59rem] rounded-3xl font-normal text-[#CE0C00] bg-[#FF616129]">
                          9:20 AM -2:30PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/**col */}
                <div className="">
                  <div class=" rounded-3xl  items-center w-[13.1rem] h-[26rem]  px-[0.75rem] py-[0.5rem] drop-shadow-sm shadow border border-[#8b8b8b] bg-[#8b8b8b08]">
                    {/**inner */}
                    <div className="bg-[#fff] h-full rounded-xl">
                      <div className="flex flex-col gap-[0.81rem]">
                        <div className=" text-center w-full bg-[#E8E8FF] rounded-3xl text-[1rem] text-[#151544]">
                          1
                        </div>
                        <div className=" text-center  text-[1rem] font-medium">
                          4 scheduled
                        </div>
                      </div>

                      <div className="flex flex-col mt-[1.2rem] py-[1.25rem] px-[1rem] justify-between ">
                        <div className="h-[9rem] w-[9rem]">
                          <img
                            className="w-full bg-cover rounded-2xl"
                            alt=""
                            src={calenderImage}
                          />
                        </div>

                        <div className=" text-center my-[0.75rem] text-[0.875rem]">
                          <span className=" font-semibold">
                            Dictumst scelerisque{" "}
                          </span>
                          <span className=" font-normal">
                            gravida sit elemen maecenas feugiat
                          </span>
                        </div>
                        <div className=" text-center text-[0.89rem] p-[0.59rem] rounded-3xl font-normal text-[#CE0C00] bg-[#FF616129]">
                          9:20 AM -2:30PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/**col */}
                <div className="">
                  <div class=" rounded-3xl  items-center w-[13.1rem] h-[26rem]  px-[0.75rem] py-[0.5rem] drop-shadow-sm shadow border border-[#8b8b8b] bg-[#8b8b8b08]">
                    {/**inner */}
                    <div className="bg-[#fff] h-full rounded-xl">
                      <div className="flex flex-col gap-[0.81rem]">
                        <div className=" text-center w-full bg-[#E8E8FF] rounded-3xl text-[1rem] text-[#151544]">
                          1
                        </div>
                        <div className=" text-center  text-[1rem] font-medium">
                          4 scheduled
                        </div>
                      </div>

                      <div className="flex flex-col mt-[1.2rem] py-[1.25rem] px-[1rem] justify-between ">
                        <div className="h-[9rem] w-[9rem]">
                          <img
                            className="w-full bg-cover rounded-2xl"
                            alt=""
                            src={calenderImage}
                          />
                        </div>

                        <div className=" text-center my-[0.75rem] text-[0.875rem]">
                          <span className=" font-semibold">
                            Dictumst scelerisque{" "}
                          </span>
                          <span className=" font-normal">
                            gravida sit elemen maecenas feugiat
                          </span>
                        </div>
                        <div className=" text-center text-[0.89rem] p-[0.59rem] rounded-3xl font-normal text-[#CE0C00] bg-[#FF616129]">
                          9:20 AM -2:30PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calendar;