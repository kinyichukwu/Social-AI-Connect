import React from "react";
import { Link } from "react-router-dom";

const NewPassword = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:max-w-sm lg:max-w-[80%] lg:mx-[10%]">
        <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 ">
          New Password
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm lg:max-w-[80%] ">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label className="block text-sm leading-6 text-start text-gray-600">
              Enter New Password
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="password"
                type="password"
                autoComplete="******"
                required
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00d8709c] sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm leading-6 text-start text-gray-600"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
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
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
