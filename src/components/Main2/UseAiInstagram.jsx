import image from "../../assets/Main2/add image.svg";
import video from "../../assets/Main2/add video.svg";
import GreenButton from "../Button/GreenButton";

export default function UseAiInstagram() {
  return (
    <div className="px-[2%] py-[4.3%] bg-[#F6F6FF] h-full">
      <div className="flex items-start">
        <div className="flex flex-col ">
          <img src={image} alt="" />
          <img src={video} alt="" />
        </div>
        <div className="min-w-[55%] p-[2.25rem] bg-white drop-shadow-md  rounded-3xl">
          <div className="border rounded-3xl border-[#0000002a] p-5">
            <textarea className="w-full outline-none text-[#121228c5] font-medium h-36 overflow-hidden"></textarea>

            <hr className="text-[#0000002a] my-6" />

            <p className="text-[#12122882] ">
              #fashion #branding #clothesstyle
            </p>
          </div>

          <div className="flex justify-between mt-6">
            <div className=" bg-[#151544] h-16 w-16 rounded-3xl flex justify-center items-center">
              <div className="content text-white text-3xl font-medium ">#</div>
            </div>

            <button className=" rounded-lg text-[#07BD65] border-[1.7px] border-[#07BD65] p-3 text-xl font-medium w-36 hover:border-[#07bd65ac] hover:text-[#07bd65a0]  active:border-[#07bd65] active:text-[#07bd65]">
              Done
            </button>
          </div>
        </div>
        <div className="flex ml-6">
          <GreenButton text="Use AI" />
        </div>
      </div>
    </div>
  );
}
