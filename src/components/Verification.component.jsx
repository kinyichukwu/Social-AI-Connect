import React from "react";
import { Link } from "react-router-dom";
import LeftArrow from "../assets/arrow-left.svg";

const Verification = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col px-6 py-8 lg:px-8 justify-center">
      <div className=" lg:max-w-[80%] lg:mx-[10%] flex mt-10 ">
        <img src={LeftArrow} alt="" className="" />
        <h2 className=" text-4xl font-bold leading-9 tracking-tight text-gray-900 text-center flex-auto">
          Verification
        </h2>
      </div>

      <p className="mt-24 text-center text-gray-900 text-xl font-medium mb-5">
        Enter Verification Code
      </p>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm lg:max-w-[80%] ">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <div
              id="otp"
              class="flex flex-row justify-between text-center mt-2"
            >
              <input
                class="my-2 border h-16 w-16 text-center form-control rounded-xl bg-[#EAEAEA] text-xl"
                type="text"
                id="first"
                maxlength="1"
              />
              <input
                class="my-2 border h-16 w-16 text-center form-control rounded-xl bg-[#EAEAEA] text-xl"
                type="text"
                id="second"
                maxlength="1"
              />
              <input
                class="my-2 border h-16 w-16 text-center form-control rounded-xl bg-[#EAEAEA] text-xl"
                type="text"
                id="third"
                maxlength="1"
              />
              <input
                class="my-2 border h-16 w-16 text-center form-control rounded-xl bg-[#EAEAEA] text-xl"
                type="text"
                id="fourth"
                maxlength="1"
              />
            </div>
          </div>

          <div className="relative flex gap-x-3 justify-center">
            <div className="text-sm leading-6 ">
              <p className="text-gray-500 ">
                You didn’t receive a code?{" "}
                <span className="text-[#00FF85]">Resend</span>
              </p>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#00D871] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#00d870c8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00d870c8]"
            >
              Reset Password
            </button>
          </div>

          <div className="relative flex gap-x-3 justify-center">
            <div className="text-sm leading-6 ">
              <p className="text-gray-500 ">Don’t have an account?</p>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-bold leading-6 text-[#00D871] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00d870c8] border-[#00D871] border hover:shadow-md shadow-[#00D871]"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Verification;
