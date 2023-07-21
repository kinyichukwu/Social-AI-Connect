import React from "react";
import facebook from "../assets/facebook.svg";
import Logo from "../assets/signup_logo.svg";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex min-h-full lg:h-screen">
      <div className="flex-1 hidden lg:flex bg-[#121228] justify-center  flex-col">
        <div className="pl-[5.4%] pr-[4.6%] mb-28 flex items-center">
          <img src={Logo} alt="" className="" />
          <span className="text-xl font-bold text-white ml-4 block">
            i Connect
          </span>
        </div>

        <div className="pl-[5.4%] pr-[4.6%]">
          <p className="text-white font-bold text-5xl">
            A software that is trained on{" "}
            <span className="text-[#00D871]">
              how you talk, communicate and respond to everything
            </span>{" "}
          </p>
        </div>

        <div className="pl-[5.4%] pr-[4.6%] mt-16">
          <p className="text-white text-lg font-normal ">
            Dictumst scelerisque ut commodo dis. Risus ac tellus sapien gravida
            sit elementum dui eget nunc. Eu arcu montes, sit elit, maecenas
            feugiat.
          </p>
        </div>
      </div>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:max-w-sm lg:max-w-[80%] lg:mx-[10%]">
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 lg:text-left">
            Sign in to I-Connect
          </h2>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500 lg:text-left lg:mx-[10%]">
          <span className=" lg:inline-block hidden ">
            Enter your details below{" "}
          </span>
          <span className=" lg:inline-block hidden mx-3"> | </span>
          <span className=" inline-block mr-8">Don’t have an account? </span>

          <Link
            to="/signup"
            className="font-bold leading-6 text-[#00D871] hover:text-[#00d870c8] hover:border-[#00d87087] border-2 border-[#00D871] p-2 rounded-xl"
          >
            Sign Up
          </Link>
        </p>

      
      

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm lg:max-w-[80%] ">
          <form className="space-y-6" action="#" method="POST">
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
                Sign In
              </button>
            </div>

            <div className="relative flex gap-x-3">
              <div className="text-sm leading-6">
                <p className="text-gray">
                  By continuing you’re confirming that you have read and agree
                  to our <a className=" text-blue-600">Terms </a> and
                  <a className=" text-blue-600"> Privacy Policy</a>.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
