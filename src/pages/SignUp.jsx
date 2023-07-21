import React from "react";
import facebook from "../assets/facebook.svg";
import Logo from "../assets/signup_logo.svg";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex min-h-full">
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

        <div className="lg:flex  lg:mx-[10%] lg:max-w-[80%] justify-between">
          <button class="mt-10 w-full py-1.5 lg:px-3 lg:mr-2 mx-auto flex items-center justify-center sm:max-w-sm  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-xl">
            <span class="mr-3">Sign Up with Google</span>
            <div class="p-2 rounded-full">
              <svg class="w-4" viewBox="0 0 533.5 544.3">
                <path
                  d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                  fill="#4285f4"
                />
                <path
                  d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                  fill="#34a853"
                />
                <path
                  d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                  fill="#fbbc04"
                />
                <path
                  d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                  fill="#ea4335"
                />
              </svg>
            </div>
          </button>

          <button class="mt-10 w-full py-1.5 flex lg:px-3 lg:ml-2 mx-auto items-center justify-center sm:max-w-sm  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-xl">
            <span class="mr-3 blo">Sign Up with facebook</span>
            <div class="p-2 rounded-full">
              <img src={facebook} alt="facebook" className="w-5" />
            </div>
          </button>
        </div>

        <div class="mt-10 border-b-[1.5px] text-center mx-auto w-full sm:max-w-sm lg:max-w-[80%] border-[#0006]">
          <div class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2 ">
            Or
          </div>
        </div>

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
                  I agree with{" "}
                  <a className=" text-blue-600">Terms of Service</a> and{" "}
                  <a className=" text-blue-600">Privacy Policy</a>.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
