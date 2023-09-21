import search from "../../assets/search.svg";
import mainPostImage from "../../assets/mainpostimage.png";
import profile from "../../assets/MainPageInstagram/profile.jpg";

export default function TrendingPost() {
  return (
    <>
      {/**dextop */}
      <div className="">
        <h1 className="text-center text-[#151544] text-[1.25rem] font-semibold hidden md:block mt-[1.5rem]">
          Search people or topics to get more inspiration 😍💡{" "}
        </h1>
        <div className=" w-full  bg-[#fdfdfd]  flex justify-center">
          <div className=" p-5">
            {/**search */}
            <div className=" h-11 w-80 bg-[#f6f6f6] rounded-3xl flex items-center ">
              <img src={search} alt="" className="px-4" />

              <input
                type="text"
                placeholder="Begin your search"
                className="bg-[#f6f6f6] text-[#4F4F4F]"
              />
            </div>
          </div>
        </div>
      </div>

      {/**mobile */}

      {/**grid */}
      <div className="min-h-screen bg-[#f6f6ff]">
        <div className="flex flex-wrap py-6  pt-8  lg:px-8 px-[1rem] justify-center   space-x-3 items-center">
          <p className="text-[#0E0E35] text-[1.25rem] font-semibold ">
            Recent searches
          </p>

          <ul className="flex space-x-3  text-[#0E0E35] font-semibold items-center">
            <li className="bg-[#D3D3EF] rounded-3xl cursor-pointer px-[1.62rem] py-[0.62rem]">
              Marketing
            </li>
            <li className="bg-[#D3D3EF] rounded-3xl cursor-pointer px-[1.62rem] py-[0.62rem]">
              Fashion
            </li>
            <li className="bg-[#D3D3EF] rounded-3xl cursor-pointer px-[1.62rem] py-[0.62rem]">
              Design fabrics
            </li>
       
          </ul>
          
        </div>{" "}
        <div className="flex flex-wrap py-6  pt-8  gap-9  lg:px-8 px-[1rem] justify-center  items-start">
          {/**col */}
          <div className="flex lg:flex-row flex-col">
            <div class="bg-white rounded-3xl  max-w-[25rem]  p-[1.14rem] drop-shadow-sm shadow">
              <div class="bg-white rounded-sm max-w-md">
                <div className="flex space-x-3 items-center mb-3">
                  <img
                    src={profile}
                    className="h-[3.2rem] w-[3.2rem] rounded-full "
                  />

                  <div className="">
                    <h3 className="text-[0.75rem] font-semibold">
                      Daniel Walters
                    </h3>
                    <p className="text-[0.625rem] font-medium">
                      Daniel Walters
                    </p>
                  </div>
                </div>

                <div class="flex items-center mt-3 mb-2 justify-center">
                  <div class="flex ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="8"
                      viewBox="0 0 7 8"
                      fill="none"
                      className="mr-[0.34rem]"
                    >
                      <circle
                        cx="3.85919"
                        cy="4.03595"
                        r="3.08966"
                        fill="#0C22EB"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="8"
                      viewBox="0 0 7 8"
                      fill="none"
                      className="mr-[0.34rem]"
                    >
                      <circle
                        cx="3.85919"
                        cy="4.03595"
                        r="3.08966"
                        fill="#D9D9D9"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="8"
                      viewBox="0 0 7 8"
                      fill="none"
                      className="mr-[0.34rem]"
                    >
                      <circle
                        cx="3.85919"
                        cy="4.03595"
                        r="3.08966"
                        fill="#D9D9D9"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="8"
                      viewBox="0 0 7 8"
                      fill="none"
                    >
                      <circle
                        cx="3.85919"
                        cy="4.03595"
                        r="3.08966"
                        fill="#D9D9D9"
                      />
                    </svg>
                  </div>
                </div>
                <div class=" text-sm  mt-2 mb-4 text-[0.8rem]">
                  <span className="font-semibold">Dictumst scelerisque</span> ut
                  commodo dis. Risus ac tellus sapien gravida sit elementum dui
                  eget nunc. Eu arcu montes, sit elit, maecenas feugiat.{" "}
                  <span className=" text-[#2C2CDF]">
                    {" "}
                    fashion #branding #clothesstyle
                  </span>
                </div>
              </div>
            </div>

            <div className="flex lg:flex-col flex-row gap-[0.68rem]">
              <div className="p-2 bg-[#151544] inline-block rounded-3xl h-fit lg:mx-[0.68rem]  lg:my-0 my-[0.68rem]  lg:w-fit w-full cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="37"
                  viewBox="0 0 29 30"
                  fill="none"
                  className="text-white mx-auto"
                >
                  <path
                    d="M21.4171 10.5196C21.7383 10.1984 21.7383 9.66314 21.4171 9.35843L19.49 7.43132C19.1853 7.11013 18.65 7.11013 18.3288 7.43132L16.8135 8.93841L19.9018 12.0267L21.4171 10.5196ZM6.83203 18.9281V22.0164H9.92034L19.0288 12.8997L15.9405 9.81138L6.83203 18.9281Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div className="p-2 bg-[#151544] inline-block rounded-3xl h-fit  lg:mx-[0.68rem]  lg:my-0 my-[0.68rem]  lg:w-fit w-full cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="37"
                  viewBox="0 0 38 37"
                  fill="none"
                  className=" text-white  mx-auto"
                >
                  <path
                    d="M23.8877 16.2869H13.7796V14.2855H23.8877V16.2869ZM23.8877 20.2897H13.7796V18.2883H23.8877V20.2897ZM20.8553 24.2925H13.7796V22.2911H20.8553V24.2925ZM18.8337 10.2827C19.1017 10.2827 19.3588 10.3881 19.5484 10.5758C19.738 10.7634 19.8445 11.018 19.8445 11.2834C19.8445 11.5488 19.738 11.8033 19.5484 11.991C19.3588 12.1786 19.1017 12.2841 18.8337 12.2841C18.5656 12.2841 18.3085 12.1786 18.1189 11.991C17.9293 11.8033 17.8228 11.5488 17.8228 11.2834C17.8228 11.018 17.9293 10.7634 18.1189 10.5758C18.3085 10.3881 18.5656 10.2827 18.8337 10.2827ZM25.9094 10.2827H21.6842C21.2596 9.12184 20.1477 8.28125 18.8337 8.28125C17.5196 8.28125 16.4077 9.12184 15.9832 10.2827H11.758C11.2218 10.2827 10.7076 10.4935 10.3284 10.8689C9.94932 11.2442 9.73633 11.7533 9.73633 12.2841V26.294C9.73633 26.8248 9.94932 27.3338 10.3284 27.7092C10.7076 28.0845 11.2218 28.2954 11.758 28.2954H25.9094C26.4455 28.2954 26.9597 28.0845 27.3389 27.7092C27.718 27.3338 27.931 26.8248 27.931 26.294V12.2841C27.931 11.7533 27.718 11.2442 27.3389 10.8689C26.9597 10.4935 26.4455 10.2827 25.9094 10.2827Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/**col */}
          <div className="flex lg:flex-row flex-col">
            <div class="bg-white rounded-3xl  max-w-[25rem]  p-[1.14rem] drop-shadow-sm shadow">
              <div class="bg-white rounded-sm max-w-md">
                <div className="flex space-x-3 items-center mb-3">
                  <img
                    src={profile}
                    className="h-[3.2rem] w-[3.2rem] rounded-full "
                  />

                  <div className="">
                    <h3 className="text-[0.75rem] font-semibold">
                      Daniel Walters
                    </h3>
                    <p className="text-[0.625rem] font-medium">
                      Daniel Walters
                    </p>
                  </div>
                </div>
                <img src={mainPostImage} className=" max-h-[15rem] w-full" />
                <div class="flex items-center mt-3 mb-2 justify-center">
                  <div class="flex ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="8"
                      viewBox="0 0 7 8"
                      fill="none"
                      className="mr-[0.34rem]"
                    >
                      <circle
                        cx="3.85919"
                        cy="4.03595"
                        r="3.08966"
                        fill="#0C22EB"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="8"
                      viewBox="0 0 7 8"
                      fill="none"
                      className="mr-[0.34rem]"
                    >
                      <circle
                        cx="3.85919"
                        cy="4.03595"
                        r="3.08966"
                        fill="#D9D9D9"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="8"
                      viewBox="0 0 7 8"
                      fill="none"
                      className="mr-[0.34rem]"
                    >
                      <circle
                        cx="3.85919"
                        cy="4.03595"
                        r="3.08966"
                        fill="#D9D9D9"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="8"
                      viewBox="0 0 7 8"
                      fill="none"
                    >
                      <circle
                        cx="3.85919"
                        cy="4.03595"
                        r="3.08966"
                        fill="#D9D9D9"
                      />
                    </svg>
                  </div>
                </div>
                <div class=" text-sm  mt-2 mb-4 text-[0.8rem]">
                  <span className="font-semibold">Dictumst scelerisque</span> ut
                  commodo dis. Risus ac tellus sapien gravida sit elementum dui
                  eget nunc. Eu arcu montes, sit elit, maecenas feugiat.{" "}
                  <span className=" text-[#2C2CDF]">
                    {" "}
                    fashion #branding #clothesstyle
                  </span>
                </div>
              </div>
            </div>

            <div className="flex lg:flex-col flex-row">
              <div className="p-2 bg-[#151544] inline-block rounded-3xl h-fit m-[0.68rem]  lg:w-fit w-full cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="37"
                  viewBox="0 0 29 30"
                  fill="none"
                  className="text-white mx-auto"
                >
                  <path
                    d="M21.4171 10.5196C21.7383 10.1984 21.7383 9.66314 21.4171 9.35843L19.49 7.43132C19.1853 7.11013 18.65 7.11013 18.3288 7.43132L16.8135 8.93841L19.9018 12.0267L21.4171 10.5196ZM6.83203 18.9281V22.0164H9.92034L19.0288 12.8997L15.9405 9.81138L6.83203 18.9281Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div className="p-2 bg-[#151544] inline-block rounded-3xl h-fit  m-[0.68rem]  lg:w-fit w-full cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="37"
                  viewBox="0 0 38 37"
                  fill="none"
                  className=" text-white  mx-auto"
                >
                  <path
                    d="M23.8877 16.2869H13.7796V14.2855H23.8877V16.2869ZM23.8877 20.2897H13.7796V18.2883H23.8877V20.2897ZM20.8553 24.2925H13.7796V22.2911H20.8553V24.2925ZM18.8337 10.2827C19.1017 10.2827 19.3588 10.3881 19.5484 10.5758C19.738 10.7634 19.8445 11.018 19.8445 11.2834C19.8445 11.5488 19.738 11.8033 19.5484 11.991C19.3588 12.1786 19.1017 12.2841 18.8337 12.2841C18.5656 12.2841 18.3085 12.1786 18.1189 11.991C17.9293 11.8033 17.8228 11.5488 17.8228 11.2834C17.8228 11.018 17.9293 10.7634 18.1189 10.5758C18.3085 10.3881 18.5656 10.2827 18.8337 10.2827ZM25.9094 10.2827H21.6842C21.2596 9.12184 20.1477 8.28125 18.8337 8.28125C17.5196 8.28125 16.4077 9.12184 15.9832 10.2827H11.758C11.2218 10.2827 10.7076 10.4935 10.3284 10.8689C9.94932 11.2442 9.73633 11.7533 9.73633 12.2841V26.294C9.73633 26.8248 9.94932 27.3338 10.3284 27.7092C10.7076 28.0845 11.2218 28.2954 11.758 28.2954H25.9094C26.4455 28.2954 26.9597 28.0845 27.3389 27.7092C27.718 27.3338 27.931 26.8248 27.931 26.294V12.2841C27.931 11.7533 27.718 11.2442 27.3389 10.8689C26.9597 10.4935 26.4455 10.2827 25.9094 10.2827Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
