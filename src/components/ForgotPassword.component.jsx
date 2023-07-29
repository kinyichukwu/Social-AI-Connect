import React from "react";
import { Link } from "react-router-dom";
import LeftArrow from "../assets/arrow-left.svg";

const ForgotPassword = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col px-6 py-8 lg:px-8 justify-center">
      <div className=" lg:max-w-[80%] lg:mx-[10%] flex mt-10 ">
        <img src={LeftArrow} alt="" className="" />
        <h2 className=" text-4xl font-bold leading-9 tracking-tight text-gray-900 text-center flex-auto">
          Forgot Password
        </h2>
      </div>

      <p className="mt-24 text-center text-gray-900 text-xl font-medium mb-5">
        Enter Verification Code
      </p>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm lg:max-w-[80%] ">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label className="block text-sm leading-6 text-start text-gray-600">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00d8709c] sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#00D871] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#00d870c8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00d870c8]"
            >
              Rest Password
            </button>
          </div>

          <div className="relative flex gap-x-3 justify-center  ">
            <div className="text-sm leading-6 mt-24">
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

export default ForgotPassword;
