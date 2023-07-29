import React from "react";
import facebook from "../assets/facebook.svg";
import Logo from "../assets/signup_logo.svg";
import SignUpC from "../components/SignUp.component";
import NewPassword from "../components/NewPassword.component";
import Verification from "../components/Verification.component";
import ForgotPassword from "../components/ForgotPassword.component";

const SignUp = () => {
  return (
    <div className="flex min-h-full ">
      <div className="flex-1 hidden lg:flex bg-[#121228] justify-center  flex-col min-h-screen">
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

      <ForgotPassword />
    </div>
  );
};

export default SignUp;
