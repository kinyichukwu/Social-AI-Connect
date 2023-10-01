import darkBlackButton from "../../assets/home/darkBlackButton.svg";
import OpenGallary from "../../assets/home/OpenGallary.png";
import ArrowRight from "../../assets/home/ArrowRight.png";
import ArrowDown from "../../assets/home/ArrowDown.svg";

// social media
import fb from "../../assets/home/facebook.png";
import lkin from "../../assets/home/Linkin.png";
import insta from "../../assets/home/Instagram.png";
import Twt from "../../assets/home/Twitter.png";
import cehckbox from "../../assets/home/Checkbox.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const socials = [
  { img: Twt, t: "Twitter" },
  { img: fb, t: "Facebook" },
  { img: lkin, t: "Linked in" },
  { img: insta, t: "Instagram" },
];

const AddSocialMedia = () => {
  const [social, setSocial] = useState(null);

  const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <form
        className="max-w-[58rem] w-full bg-white mt-[6.15rem] mb-[4.5rem] rounded-2xl shadow-lg mx-[1.25rem]"
        style={{
          boxShadow: " 0px 9px 0px 0px rgba(0, 0, 0, 0.29)",
        }}
      >
        {/**menu */}
        <div className="flex justify-between border-b-2 border-b-[#9797B1] pb-[2.25rem] pt-[2.87rem] px-[3.5rem] w-full ">
          <img src={darkBlackButton} className="" alt="" />
          <h1 className="text-[2rem] text-[#0E0E35]  font-semibold">
            Connect your brand’s account
          </h1>
          <p></p>
        </div>

        {/**body */}
        <div className="flex items-center flex-col w-full max-w-[50.3rem] mx-auto">
          <div className="mt-[1rem] mb-[3.44rem] text-center">
            <h2 className="text-[1rem] font-light text-[#0E0E35]">
              Connect social media account to personalize your experience.{" "}
            </h2>
            <h2 className="text-[1.5rem] font-normal text-[#0E0E35] opacity-90 mt-[0.63rem]">
              Connected (0)
            </h2>
          </div>

          <div className="flex w-full justify-between mb-[5.5rem]">
            {socials?.map((it, i) => {
              return (
                <div className="flex flex-col gap-[1rem] items-center py-5 px-4">
                  <div className="flex items-center gap-[0.5rem]">
                    <img src={it.img} alt="" />
                    <p className=" opacity-80 font-normal text-[1.125rem] ">
                      {it.t}
                    </p>
                  </div>

                  {social !== i ? (
                    <span
                      className="text-[#00CB6A] text-[1rem] font-medium border border-[#00CB6A] p-[0.63rem] rounded-[1.25rem] inline-block cursor-pointer"
                      style={{
                        boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                      }}
                      onClick={() => setSocial(i)}
                    >
                      Connect
                    </span>
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex items-center mb-6">
                        <p className=" opacity-60 text-[#0E0E35] text-base font-medium p-[0.62rem]">
                          Connected
                        </p>
                        <img src={cehckbox} alt="" />
                      </div>

                      <span
                        className="text-[#fff] bg-[#00CB6A] text-[1rem] font-medium border border-[#00CB6A] p-[0.63rem] rounded-[1.25rem] inline-block cursor-pointer"
                        style={{
                          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                        }}
                        onClick={() => setSocial(null)}
                      >
                        Disconnect
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/**buttons */}

        <div className="flex gap-[3.44rem] items-center mb-[2.88rem]">
          <p
            className=" text-[#9797B1] text-xl font-medium p-[0.62rem] ml-auto cursor-pointer "
            onClick={() => navigate("/mainpageinstagram")}
          >
            Skip
          </p>

          <div
            className="flex px-[2.5rem] py-[0.62rem] text-white bg-[#00CB6A] rounded-xl items-center w-fit  mr-[3.81rem]  cursor-pointer"
            onClick={() => navigate("/mainpageinstagram")}
          >
            <p className="text-[1.25rem] font-medium">Sign up</p>
            <img src={ArrowRight} alt="" className="" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddSocialMedia;
