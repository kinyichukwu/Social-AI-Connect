import React, { useState } from "react";
import Arrow_left from "../assets/arrow-left.svg";
import Brand from "./Brand.component";
import AddBrand from "./AddBrand.component";
import SignupButton from "../assets/signupbutton.svg";
import BrandSocialConnect from "./BrandSocialMediaConnect.component";

const AddBrandForm = () => {
  const increment = () => {
    let count = 0;
    count = +console.log(count);
  };

  increment();
  const [submit, setSubmit] = useState(false);
  const [brand, setBrand] = useState([]);
  const addBrandForm = (
    <div class="w-[928px] h-[1202px] absolute bg-white rounded-[20px]  top-[328px] left-[256px] border shadow-[0_9px_0px_0px_rgba(0,0,0,0.8)]">
      <div class="p-5 left-[320px] top-[26px] absolute bg-white rounded-[20px] justify-center items-center gap-2.5 inline-flex ">
        <div class="text-slate-900 text-[32px] font-semibold">
          Add new brand
        </div>
      </div>
      <div class="w-[928px] h-[0px] left-0 top-[130px] absolute border border-gray-400"></div>

      <div class="left-[171px] top-[186px] absolute flex-col justify-start items-start gap-7 inline-flex  h-[733px] w-[587px]">
        <div class="flex-col justify-start items-start gap-[26px] flex">
          <div class="h-[102px] flex-col justify-start items-start gap-3 flex">
            <div class="justify-start items-center gap-2.5 inline-flex">
              <div class="text-slate-900 text-xl font-medium font-[Poppins]">
                Brand Name
              </div>
            </div>
            <div class="h-[60px] pl-9 pr-[19px] pt-4 pb-[15px] rounded-[11px] border border-gray-400 justify-end items-center inline-flex w-[587px]">
              <div class="w-[532px] text-slate-900 text-base font-normal leading-[28.88px] tracking-tight"></div>
            </div>
          </div>
        </div>
        <div class="self-stretch flex-col justify-start items-start gap-[26px] flex ">
          <div class="h-[124px] w-[587px] flex-col justify-start items-start gap-3 flex">
            <div class="justify-start items-center gap-2.5 inline-flex">
              <div class="text-slate-900 text-xl font-medium font-[Poppins]">
                What do you like to write about?
              </div>
            </div>
            <input class="self-stretch px-9 py-3 rounded-[11px] border border-gray-400 justify-start items-start gap-2.5 inline-flex w-[587px] h-[82px]"></input>
          </div>
        </div>
        <div class="self-stretch flex-col justify-start items-start gap-[26px] flex">
          <div class="h-[124px] flex-col justify-start items-start gap-3 flex">
            <div class="justify-start items-center gap-2.5 inline-flex">
              <div class="text-slate-900 text-xl font-medium font-[Poppins]">
                Who are your target audiences?
              </div>
            </div>
            <input class="self-stretch px-9 py-3 rounded-[11px] border border-gray-400 justify-start items-start gap-2.5 inline-flex w-[587px] h-[82px]"></input>
          </div>
        </div>
        <div class="h-[106px] justify-start items-start gap-2.5 inline-flex">
          <div class="flex-col justify-start items-start gap-2.5 inline-flex">
            <div class="h-[106px] flex-col justify-start items-start gap-4 flex">
              <div class="justify-center items-center gap-[22px] inline-flex">
                <div class="text-slate-900 text-xl font-medium">
                  What language do you write in?
                </div>
              </div>
              <div class=" rounded-[11px] border border-gray-400  inline-flex w-[587px]">
                <select
                  class="w-[587px] text-slate-900 text-xl rounded-[11px] border border-gray-400  font-normal bg-white leading-9 tracking-tight h-[60px] self-stretch font-[Poppins]"
                  id="Select"
                  name="Languages"
                >
                  <option value="en-US">English (United States)</option>
                  <option value="nl">Dutch - Nederlands</option>

                  <option value="fr">French - français</option>
                  <option value="pt">Portuguese - português</option>
                  <option value="es">Spanish - español</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-col justify-start items-start gap-[13px]  h-[165px] w-[122px]  flex">
          <div class="justify-start items-center gap-2.5 inline-flex">
            <div class="text-slate-900 text-xl font-medium font-[Poppins] leading-[30px] text-[20px]">
              Add Logo
            </div>
          </div>
          <div class="w-[122px] h-[122px] p-[41px] bg-green-100 rounded-[20px] justify-center items-center inline-flex">
            <div class="w-10 h-10 relative flex-col justify-start items-start flex"></div>
          </div>
        </div>
      </div>

      <div class="w-[196px] h-20 pt-5 left-[623px] top-[1076px] absolute justify-center items-center inline-flex">
        <div class="w-[196px] self-stretch px-10 py-2.5 bg-[#00CB6A] rounded-[11px] justify-center items-center gap-2.5 inline-flex">
          <button
            onClick={() => {
              setSubmit(true), setBrand([...brand, <Brand></Brand>]);
            }}
          >
            <div class="justify-start items-center flex">
              <div class="text-white text-xl font-medium">Sign up</div>

              <div class="w-10 h-10 justify-center items-center  flex">
                <div class="w-10 h-10 relative flex-col justify-start items-start flex">
                  <img src={SignupButton}></img>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div class="w-10 h-10 left-[57px] top-[50px] absolute  ">
        <img src={Arrow_left} className=" absolute top-[9px] left-[9px]"></img>
      </div>
    </div>
  );

  return (
    <div>
      {submit ? <BrandSocialConnect></BrandSocialConnect> : addBrandForm}
    </div>
  );
};

export default AddBrandForm;
