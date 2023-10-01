import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LeftArrow from "../../assets/arrow-left.svg";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";


const Otp = ({ fwd, bck, usersEmail }) => {
  const navigate = useNavigate();
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]; // Create refs for each input
  const [values, setValues] = useState(["", "", "", ""]); // Store input values

  useEffect(() => {
    const focusNextInput = (index) => {
      if (index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    };

    const handleInputChange = (index, value) => {
      const newValues = [...values];
      newValues[index] = value;
      setValues(newValues);

      // Automatically focus on the next input if the current input is filled
      if (value !== "") {
        focusNextInput(index);
      }
    };

    // Add event listeners for each input
    inputRefs.forEach((ref, index) => {
      ref.current.addEventListener("input", (event) => {
        handleInputChange(index, event.target.value);
      });
    });

    // Remove event listeners on component unmount
    return () => {
      inputRefs.forEach((ref, index) => {
        if (ref.current) {
          // Check if ref is not null
          ref.current.removeEventListener("input", (event) => {
            handleInputChange(index, event.target.value);
          });
        }
      });
    };
  }, [inputRefs, values]);

  const signuppost = async (e) => {
    e.preventDefault();
    setloading(true);

    try {
      const res = await axios.post(
        "https://iconnect-backend.onrender.com/profile",
        {
          email: usersEmail,
          otp: values.join(""),
        }
      );
      const data = res.data;

      toast.success("Welcome to I-Connect");
      // set data to data gotten and route to unboarding
      // const { _id } = data.data;
      // setCurrentUser(_id)

      // store this data in local storage
      navigate("/homepage");

      // toast.error(data.message);

      console.log(data);
    } catch (error) {
      console.log(error);

      toast.error("Network Error");
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col px-6 py-8 lg:px-8 justify-center">
      <div className=" lg:max-w-[80%] lg:mx-[10%] flex mt-10 ">
        <img
          src={LeftArrow}
          alt=""
          className="cursor-pointer"
          onClick={() => bck()}
        />
        <h2 className=" text-4xl font-bold leading-9 tracking-tight text-gray-900 text-center flex-auto">
          Verification
        </h2>
      </div>

      <p className="mt-24 text-center text-gray-900 text-xl font-medium mb-5">
        Enter Verification Code
      </p>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm lg:max-w-[80%] ">
        <form className="space-y-6">
          <div>
            <div
              id="otp"
              class="flex flex-row justify-between text-center mt-2"
            >
              <input
                ref={inputRefs[0]}
                class="my-2 border h-16 w-16 text-center form-control rounded-xl bg-[#EAEAEA] text-xl"
                type="text"
                id="first"
                maxlength="1"
              />
              <input
                ref={inputRefs[1]}
                class="my-2 border h-16 w-16 text-center form-control rounded-xl bg-[#EAEAEA] text-xl"
                type="text"
                id="second"
                maxlength="1"
              />
              <input
                ref={inputRefs[2]}
                class="my-2 border h-16 w-16 text-center form-control rounded-xl bg-[#EAEAEA] text-xl"
                type="text"
                id="third"
                maxlength="1"
              />
              <input
                ref={inputRefs[3]}
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
              onClick={(e) => signuppost(e)}
              className="flex w-full justify-center rounded-md bg-[#00D871] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#00d870c8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00d870c8]"
            >
              Verify Otp
            </button>
          </div>

          <div className="relative flex gap-x-3 justify-center">
            <div className="text-sm leading-6 ">
              <p className="text-gray-500 ">Don’t have an account?</p>
            </div>
          </div>

          <div>
            <button
              onClick={() => navigate("/signup")}
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

export default Otp;
