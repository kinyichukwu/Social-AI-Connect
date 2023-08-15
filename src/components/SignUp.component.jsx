import React from "react";
import { Link } from "react-router-dom";

const SignUpC = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:max-w-sm lg:max-w-[80%] lg:mx-[10%]">
        <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 lg:text-left">
          Get started for free
        </h2>
      </div>

      <p className="mt-10 text-center text-sm text-gray-500 lg:text-left lg:mx-[10%]">
        <span className=" lg:inline-block hidden ">
          Enter your details below{" "}
        </span>
        <span className=" lg:inline-block hidden mx-3"> | </span>
        <span className=" inline-block mr-8">Aleady have an account? </span>

        <Link
          to="/signin"
          className="font-bold leading-6 text-[#00D871] hover:text-[#00d870c8] hover:border-[#00d87087] border-2 border-[#00D871] p-2 rounded-xl"
        >
          Log in
        </Link>
      </p>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm lg:max-w-[80%] ">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label className="block text-sm leading-6 text-start text-gray-600">
              First name
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
            <label className="block text-sm leading-6 text-start text-gray-600">
              Last name
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
            <label className="block text-sm leading-6 text-start text-gray-600">
              Email address
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
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm leading-6 text-start text-gray-600"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-[#00D871] hover:text-[#00d870c8]"
                >
                  Forgot password?
                </a>
              </div>
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
              Sign up
            </button>
          </div>

          <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 "
              />
            </div>
            <div className="text-sm leading-6">
              <p className="text-gray">
                Get notified when someones posts a comment on a posting.
              </p>
            </div>
          </div>

          <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 "
              />
            </div>
            <div className="text-sm leading-6">
              <p className="text-gray">
                I agree with <a className=" text-blue-600">Terms of Service</a>{" "}
                and <a className=" text-blue-600">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpC;
