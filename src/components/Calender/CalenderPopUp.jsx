import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "./calenderUtils/calender";
import cn from "./calenderUtils/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const hrs = new Array(12).fill(0);
const mins = new Array(60).fill(0);
const timeAndDay = {
  time: "AM",
  hour: null,
  minute: null,
};

export default function CalenderPopUp() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const [selectTimeAndDay, setselectTimeAndDay] = useState(timeAndDay);

  const { time, hour, minute } = selectTimeAndDay;
  return (
    <div className="">
      {/**remove sm:w-1/2 will make it responsive */}
      <div className="flex space-x-[1rem] sm:divide-x justify-center  h-screen items-center  fixed z-[50000] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="w-[512px] h-[27.75rem] bg-white rounded-2xl px-[2rem] py-[1.5rem]">
          <div className="flex justify-center items-center">
            <div className="flex space-x-2 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="cursor-pointer hover:scale-105 transition-all text-[#686B6F] "
                onClick={() => {
                  setToday(today.month(today.month() - 1));
                }}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.1208 15.712L21.5844 14.1953L15 20.6953L21.5844 27.1953L23.1208 25.6786L18.0727 20.6953L23.1208 15.712Z"
                  fill="#686B6F"
                />
              </svg>

              <h1
                className="cursor-pointer hover:scale-105 transition-all text-[1rem] font-normal text-[#151544] p-[0.62rem] bg-[#F8F8F8] rounded-3xl"
                onClick={() => {
                  setToday(currentDate);
                }}
              >
                {months[today.month()]?.slice(0, 3)}{" "}
                <span className=" opacity-50">{today.year()}</span>
              </h1>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="cursor-pointer hover:scale-105 transition-all text-[#686B6F]"
                onClick={() => {
                  setToday(today.month(today.month() + 1));
                }}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.8792 24.288L18.4156 25.8047L25 19.3047L18.4156 12.8047L16.8792 14.3214L21.9273 19.3047L16.8792 24.288Z"
                  fill="#686B6F"
                />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-7 mt-[0.88rem] mb-[1.12rem] ">
            {days.map((day, index) => {
              return (
                <h1
                  key={index}
                  className="text-sm text-center  grid place-content-center text-[#151544] select-none font-semibold "
                >
                  {day}
                </h1>
              );
            })}
          </div>

          <div className=" grid grid-cols-7 border-t">
            {generateDate(today.month(), today.year()).map(
              ({ date, currentMonth, today }, index) => {
                return (
                  <div
                    key={index}
                    className="p-2 text-center h-14 grid place-content-center text-sm "
                  >
                    <h1
                      className={cn(
                        currentMonth ? "" : "text-gray-400",
                        today ? "bg-[#0000009e] text-white" : "",
                        selectDate.toDate().toDateString() ===
                          date.toDate().toDateString()
                          ? "bg-[#07BD65] text-white"
                          : "",
                        "h-10 w-10 rounded-xl grid place-content-center hover:bg-[#07BD65] hover:text-white transition-all cursor-pointer select-none text-[#151544]"
                      )}
                      onClick={() => {
                        setSelectDate(date);
                      }}
                    >
                      {date.date()}
                    </h1>
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className="h-[27.75rem] w-[7.56rem] bg-white rounded-2xl pt-[1.56rem] pb-[2.19rem] px-[0.81rem] flex space-x-[0.5rem]">
          {/**am */}
          <div className="w-full">
            <span
              className={`p-[0.62rem] font-normal ${
                time === "AM"
                  ? "text-white bg-[#151544]"
                  : "bg-[#F8F8F8] text-[#151544]"
              } rounded-3xl cursor-pointer`}
              onClick={() =>
                setselectTimeAndDay({ ...selectTimeAndDay, time: "AM" })
              }
            >
              AM
            </span>

            <div className="flex flex-col justify-center mt-[1.94rem] mx-[0.2rem]">
              <span className="text-center opacity-50 text-[0.75rem] mb-[0.31rem]">
                hr
              </span>

              <div className="flex flex-col bg-[#15154406] rounded-3xl items-center justify-center  overflow-auto">
                <div className="h-[16.8rem] py-[0.2rem]">
                  {hrs.map((hr, i) => (
                    <span
                      key={i}
                      className={`p-[0.62rem]  text-[#151544]   rounded-xl font-normal text-[1rem] block text-center cursor-pointer ${
                        hour === i + 1
                          ? "text-white bg-[#151544]"
                          : "bg-[#F8F8F8] text-[#151544] hover:bg-[#15154418]"
                      }`}
                      onClick={() =>
                        setselectTimeAndDay({
                          ...selectTimeAndDay,
                          hour: i + 1,
                        })
                      }
                    >
                      {i + 1}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/**pm */}
          <div className="w-full">
            <span
              className={`p-[0.62rem] font-normal ${
                time === "PM"
                  ? "text-white bg-[#151544]"
                  : "bg-[#F8F8F8] text-[#151544]"
              }  rounded-3xl cursor-pointer`}
              onClick={() =>
                setselectTimeAndDay({ ...selectTimeAndDay, time: "PM" })
              }
            >
              PM
            </span>

            <div className="flex flex-col justify-center mt-[1.94rem] mx-[0.2rem]">
              <span className="text-center opacity-50 text-[0.75rem] mb-[0.31rem]">
                mins
              </span>

              <div className="flex flex-col bg-[#15154406] rounded-3xl items-center justify-center  overflow-auto">
                <div className="h-[16.8rem] py-[0.2rem]">
                  {mins.map((hr, i) => (
                    <span
                      key={i}
                      className={`p-[0.62rem] text-[#151544]  rounded-xl font-normal text-[1rem] block text-center cursor-pointer ${
                        minute === i + 1
                          ? "text-white bg-[#151544]"
                          : "bg-[#F8F8F8] text-[#151544] hover:bg-[#15154418]"
                      } `}
                      onClick={() =>
                        setselectTimeAndDay({
                          ...selectTimeAndDay,
                          minute: i + 1,
                        })
                      }
                    >
                      {i + 1}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[512px] "></div>
    </div>
  );
}

// this will be for the down calender
// <div className="h-[24rem] w-[7.56rem] sm:px-5 ">
//         <h1 className=" font-semibold">
//           Schedule for {selectDate.toDate().toDateString()}
//         </h1>
//       </div>
