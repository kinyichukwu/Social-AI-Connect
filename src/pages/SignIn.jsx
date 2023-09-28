import React, { useState } from "react";
import facebook from "../assets/facebook.svg";
import Logo from "../assets/signup_logo.svg";
import { Link } from "react-router-dom";
import SignInC from "../components/SignIn.component";
import ForgotPassword from "../components/ForgotPassword.component";
import Verification from "../components/Verification.component";
import NewPassword from "../components/NewPassword.component";
import Otp from "../components/signin/Otp";

const SignIn = () => {
  const [page, setpage] = useState(1);
  const [email, setemail] = useState("");
  console.log(email);
  return (
    <div className="flex  min-h-screen">
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

      {page === 1 ? (
        <SignInC
          fwd={() => setpage(2)}
          onSuccess={() => setpage(5)}
          email={(e) => setemail(e)}
        />
      ) : page === 2 ? (
        <ForgotPassword fwd={() => setpage(3)} bck={() => setpage(1)} />
      ) : page === 3 ? (
        <Verification fwd={() => setpage(4)} bck={() => setpage(2)} />
      ) : page === 4 ? (
        <NewPassword />
      ) : page === 5 ? (
        // login auth
        <Otp fwd={() => setpage(4)} bck={() => setpage(2)} usersEmail={email} />
      ) : (
        ""
      )}
    </div>
  );
};

export default SignIn;
