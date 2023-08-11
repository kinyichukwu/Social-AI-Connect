import {
  BsCalendarCheck,
  BsPencil,
  BsPencilFill,
  BsSearch,
} from "react-icons/bs";
import Instagram from "../assets/Instagram.png";
import Linkdin from "../assets/Linkdin.png";
import Twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.svg";
import search from "../assets/search.png";
import mainPostImage from "../assets/mainpostimage.png";
import { useHover } from "@uidotdev/usehooks";
import TrendingPost from "../components/Main2/TrendingPost";
import InstagramPost from "../components/Main2/InstagramPost";

const Main2 = () => {
  const [ref1, hovering1] = useHover();
  const [ref2, hovering2] = useHover();
  const [ref3, hovering3] = useHover();
  const [ref4, hovering4] = useHover();
  return (
    <section className="flex max-md:flex-col">
      <div className="px-5 "></div>
      <div className="w-[22%] h-screen max-md:w-full max-md:relative  max-md:h-fit fixed p-5 max-md:p-0 py-4 bg-[#151544] main-page-overflow  overflow-y-auto overflow-x-hidden">
        <div className=" max-md:mb-0 flex max-md:items-center justify-center mx-1">
          <div className="hover:bg-[#00ec7aaa] bg-[#00EC7B]  active:bg-[#00ec7aea]  text-white   cursor-pointer rounded-2xl pl-4 pr-9 py-2 mb-2 max-md:rounded-none max-md:text-center flex items-center w-fit">
            <BsPencilFill className="mx-3" /> <p className="mx-3">Create</p>
          </div>
        </div>

        <div className=" max-md:mb-0 flex max-md:items-center justify-center w-fit flex-col mx-auto">
          <div className="mt-6">
            <div className="hover:text-[#00ec7aaa]  active:text-[#00ec7aea]  text-white   cursor-pointer rounded-2xl px-6 py-2 mb-2 max-md:rounded-none max-md:text-center flex items-center">
              <BsCalendarCheck className="mx-2" />{" "}
              <p className="mx-2">Trending</p>
            </div>

            <div className="hover:text-[#00ec7aaa]  active:text-[#00ec7aea]  text-white   cursor-pointer rounded-2xl px-6 py-2 mb-2 max-md:rounded-none max-md:text-center flex items-center ">
              <BsCalendarCheck className="mx-2" />{" "}
              <p className="mx-2">overview</p>
            </div>

            <div className="hover:text-[#00ec7aaa]  active:text-[#00ec7aea]  text-white   cursor-pointer rounded-2xl px-6 py-2 mb-2 max-md:rounded-none max-md:text-center flex items-center">
              <BsCalendarCheck className="mx-2" />{" "}
              <p className="mx-2">AI Generated</p>
            </div>

            <div className="hover:text-[#00ec7aaa]  active:text-[#00ec7aea]  text-white   cursor-pointer rounded-2xl px-6 py-2 mb-2 max-md:rounded-none max-md:text-center flex items-center ">
              <BsCalendarCheck className="mx-2" />{" "}
              <p className="mx-2">Drafts</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="hover:text-[#00ec7aaa]  active:text-[#00ec7aea]  text-white   cursor-pointer rounded-2xl px-6 py-2 mb-2 max-md:rounded-none max-md:text-center flex items-center">
              <BsCalendarCheck className="mx-2" />{" "}
              <p className="mx-2">Published</p>
            </div>

            <div className="hover:text-[#00ec7aaa]  active:text-[#00ec7aea]  text-white   cursor-pointer rounded-2xl px-6 py-2 mb-2 max-md:rounded-none max-md:text-center flex items-center ">
              <BsCalendarCheck className="mx-2" />{" "}
              <p className="mx-2">Campaign</p>
            </div>

            <div className="hover:text-[#00ec7aaa]  active:text-[#00ec7aea]  text-white   cursor-pointer rounded-2xl px-6 py-2 mb-2 max-md:rounded-none max-md:text-center flex items-center ">
              <BsCalendarCheck className="mx-2" />{" "}
              <p className="mx-2">Calendar</p>
            </div>

            <div className="hover:text-[#00ec7aaa]  active:text-[#00ec7aea]  text-white   cursor-pointer rounded-2xl px-6 py-2 mb-2 max-md:rounded-none max-md:text-center flex items-center">
              <BsCalendarCheck className="mx-2" />{" "}
              <p className="mx-2">Settings</p>
            </div>
          </div>
        </div>

        <div className=" max-md:mb-0 flex max-md:items-center justify-center mt-4 ">
          <div className="text-[#151544]  bg-[#ffff] cursor-pointer rounded-xl px-2 py-2 mb-2 max-md:text-center flex items-center w-fit hover:bg-[#ffffffb8] active:bg-[#ffffffe1] font-semibold">
            <p>Help Center</p>
          </div>
        </div>
      </div>

      <div className="w-[78%] ml-auto max-md:w-full max-md:ml-0 ">
        <div className="  flex justify-center items-center bg-[#ffffff]  shadow-[#00000000] drop-shadow-md">
          <div className=" pt-6 mr-[1.75rem] cursor-pointer " ref={ref1}>
            <img src={facebook} alt="" className="  w-[1.875rem]  mx-auto" />
            <p className="text-[#111111]/60 ">facebook</p>
            <div
              className={`mt-[0.2rem] w-full h-[0.4rem] ${
                hovering1 ? "bg-[#00D871]" : "bg - white"
              } rounded-md`}
            ></div>
          </div>
          <div className=" pt-6 mr-[1.75rem] cursor-pointer" ref={ref2}>
            <img src={Twitter} alt="" className=" w-[1.875rem] mx-auto" />
            <p className="text-[#111111]/60">Twitter</p>
            <div
              className={`mt-[0.2rem] w-full h-[0.4rem] ${
                hovering2 ? "bg-[#00D871] bg-gradient-to-r " : "bg - white"
              } rounded-md`}
            ></div>
          </div>
          <div className=" pt-6 mr-[1.75rem] cursor-pointer" ref={ref3}>
            <img src={Instagram} alt="" className=" w-[1.875rem] mx-auto" />
            <p className="text-[#111111]/60">Instagram</p>
            <div
              className={`mt-[0.2rem] w-full h-[0.4rem] ${
                hovering3 ? "bg-[#00D871]" : "bg - white"
              } rounded-md`}
            ></div>
          </div>
          <div className=" pt-6 mr-[1.75rem] cursor-pointer" ref={ref4}>
            {" "}
            <img src={Linkdin} alt="" className=" w-[1.875rem] mx-auto" />
            <p className="text-[#111111]/60">LinkedIn</p>
            <div
              className={`mt-[0.2rem] w-full h-[0.4rem] ${
                hovering4 ? "bg-[#00D871]" : "bg - white"
              } rounded-md`}
            ></div>
          </div>
        </div>

        <InstagramPost />
      </div>
    </section>
  );
};

export default Main2;
