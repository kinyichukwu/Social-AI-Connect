import darkBlackButton from "../../assets/home/darkBlackButton.svg";
import OpenGallary from "../../assets/home/OpenGallary.png";
import ArrowRight from "../../assets/home/ArrowRight.png";
import ArrowDown from "../../assets/home/ArrowDown.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const languages = new Array(150).fill(0);

const AddBrandForm = () => {
  const [showLanguages, setshowLanguages] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <form
        className="max-w-[58rem] w-full bg-white mt-[6.15rem] mb-[4.5rem] rounded-2xl shadow-lg"
        style={{
          boxShadow: " 0px 9px 0px 0px rgba(0, 0, 0, 0.29)",
        }}
      >
        {/**menu */}
        <div className="flex justify-between border-b-2 border-b-[#9797B1] pb-[2.25rem] pt-[2.87rem] px-[3.5rem] w-full ">
          <img src={darkBlackButton} className="" alt="" />
          <h1 className="text-[2rem] text-[#0E0E35]  font-semibold">
            Add new brand
          </h1>
          <p></p>
        </div>
        <div className="mt-[3.5rem] mb-[9.81rem] max-w-[36.7rem] mx-auto ">
          <div className="mb-[1.75rem]">
            <p className="text-[#0E0E35] text-[1.25rem] font-medium mb-[0.75rem]">
              Brand Name
            </p>

            <input
              name="brandName"
              type="text"
              autoComplete="brandName"
              placeholder="Brand Name"
              required
              className="block w-full rounded-md border-0 pl-[2.25rem] pr-[1.19rem] pt-[1rem] pb-[0.94rem]
             text-[#0E0E35] text-[1rem] shadow-sm ring-1 ring-inset ring-gray-300
              placeholder:text-gray-400 focus:ring-2 focus:ring-inset
               focus:ring-[#0e0e35bb] sm:text-sm sm:leading-6"
            />
          </div>

          <div className="mb-[1.75rem]">
            <p className="text-[#0E0E35] text-[1.25rem] font-medium mb-[0.75rem]">
              What do you like to write about?
            </p>

            <textarea
              name="brandName"
              type="text"
              autoComplete="brandName"
              placeholder="Tortor nunc ultrices ut adipiscing a porta mattis ut viverr"
              required
              className="block w-full rounded-md border-0 pl-[2.25rem] pr-[1.19rem] pt-[1rem] pb-[0.94rem]
             text-[#0E0E35] text-[1rem] shadow-sm ring-1 ring-inset ring-gray-300
              placeholder:text-gray-400 focus:ring-2 focus:ring-inset
               focus:ring-[#0e0e35bb] sm:text-sm sm:leading-6 outline-none"
            />
          </div>

          <div className="mb-[1.75rem]">
            <p className="text-[#0E0E35] text-[1.25rem] font-medium mb-[0.75rem]">
              Who are your target audiences?
            </p>

            <input
              name="brandName"
              type="text"
              autoComplete="brandName"
              placeholder="Tortor nunc ultrices ut adipiscing a porta mattis ut viverra"
              required
              className="block w-full rounded-md border-0 pl-[2.25rem] pr-[1.19rem] pt-[1rem] pb-[0.94rem]
             text-[#0E0E35] text-[1rem] shadow-sm ring-1 ring-inset ring-gray-300
              placeholder:text-gray-400 focus:ring-2 focus:ring-inset
               focus:ring-[#0e0e35bb] sm:text-sm sm:leading-6"
            />
          </div>

          <div className="mb-[1.75rem]">
            <p className="text-[#0E0E35] text-[1.25rem] font-medium mb-[0.75rem]">
              What language do you write in?
            </p>

            <div className="relative w-full">
              <input
                name="brandName"
                type="text"
                autoComplete="brandName"
                placeholder="Brand Name"
                required
                className="block w-full rounded-md border-0 pl-[2.25rem] pr-[1.19rem] pt-[1rem] pb-[0.94rem]
           text-[#0E0E35] text-[1rem] shadow-sm ring-1 ring-inset ring-gray-300
            placeholder:text-gray-400 focus:ring-2 focus:ring-inset
             focus:ring-[#0e0e35bb] sm:text-sm sm:leading-6"
              />

              <img
                src={ArrowDown}
                alt=""
                className="absolute top-2 right-2 cursor-pointer"
                onClick={() => setshowLanguages((prev) => !prev)}
              />

              {showLanguages && (
                <div className=" absolute main-page-overflow w-full bg-white h-[8rem] overflow-auto border-[#00CB6A] border rounded-lg top-[68px]">
                  {languages?.map(() => (
                    <li className="list-none px-[2rem] py-[.55rem] text-[1rem] text-[#0e0e3594] cursor-pointer hover:bg-[#f6f6f6] active:bg-[#fff]">
                      Arabic
                    </li>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mb-[1.75rem]">
            <p className="text-[#0E0E35] text-[1.25rem] font-medium mb-[0.75rem]">
              Add Logo
            </p>

            <img src={OpenGallary} alt="" className="cursor-pointer" />
          </div>
        </div>

        {/**button */}
        <div
          className="flex px-[2.5rem] py-[0.62rem] text-white bg-[#00CB6A] rounded-xl items-center w-fit ml-auto mr-[6.81rem] mb-[2.88rem] cursor-pointer"
          onClick={() => navigate("/homepage/addsocialmedia")}
        >
          <p className="text-[1.25rem] font-medium">Sign up</p>
          <img src={ArrowRight} alt="" className="" />
        </div>
      </form>
    </div>
  );
};

export default AddBrandForm;
