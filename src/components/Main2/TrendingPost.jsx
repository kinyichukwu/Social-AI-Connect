import search from "../../assets/search.png";
import mainPostImage from "../../assets/mainpostimage.png";

export default function TrendingPost() {
  return (
    <>
      <div className=" w-full  bg-[#fdfdfd] flex ">
        <div className="flex-[34%] border-r p-5">
          <h1 className=" text-xl font-medium text-right">Trending posts</h1>
        </div>
        <div className="flex-[66%] p-5">
          {/**search */}
          <div className=" h-11 w-80 bg-[#f6f6f6] rounded-3xl flex items-center ">
            <img src={search} alt="" className="px-4" />

            <input
              type="text"
              placeholder="search"
              className="bg-[#f6f6f6] text-[#4F4F4F]"
            />
          </div>
        </div>
      </div>

      {/**grid */}
      <div className="flex flex-wrap  gap-5 bg-[#f6f6ff] px-32 h-full">
        {/**col */}
        <div className="flex my-10">
          <div class="bg-white rounded-lg  max-w-[25rem]  p-[1.14rem]">
            <div class="bg-white rounded-sm max-w-md">
              <img src={mainPostImage} className=" max-h-[15rem] w-full" />
              <div class="flex items-center mt-3 mb-2 justify-between">
                <div class="flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 37 38"
                    fill="none"
                  >
                    <path
                      d="M18.1946 28.848L16.7435 27.5392C11.5899 22.9087 8.1875 19.8448 8.1875 16.1068C8.1875 13.0429 10.6092 10.6533 13.6914 10.6533C15.4326 10.6533 17.1038 11.4565 18.1946 12.7157C19.2853 11.4565 20.9565 10.6533 22.6977 10.6533C25.7799 10.6533 28.2016 13.0429 28.2016 16.1068C28.2016 19.8448 24.7992 22.9087 19.6456 27.5392L18.1946 28.848Z"
                      fill="#FF002E"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 37 38"
                    fill="none"
                  >
                    <path
                      d="M25.8615 10.6533H11.3058C10.8232 10.6533 10.3605 10.845 10.0192 11.1862C9.67802 11.5274 9.48633 11.9902 9.48633 12.4728V28.848L13.1253 25.209H25.8615C26.3441 25.209 26.8069 25.0174 27.1481 24.6761C27.4893 24.3349 27.681 23.8721 27.681 23.3896V12.4728C27.681 11.9902 27.4893 11.5274 27.1481 11.1862C26.8069 10.845 26.3441 10.6533 25.8615 10.6533ZM25.8615 23.3896H13.1253L11.3058 25.209V12.4728H25.8615"
                      fill="#353739"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 38 38"
                    fill="none"
                  >
                    <path
                      d="M15.585 26.0378L15.8959 21.4579L24.4241 13.9654C24.8016 13.6298 24.3464 13.4674 23.8467 13.7597L13.3197 20.2452L8.76687 18.8377C7.78968 18.567 7.77858 17.9066 8.98896 17.4302L26.7227 10.7606C27.5333 10.4033 28.3106 10.9555 27.9997 12.1681L24.9793 26.0378C24.7683 27.0231 24.1576 27.2613 23.3137 26.8066L18.7164 23.4934L16.5066 25.5831C16.2512 25.8321 16.0403 26.0378 15.585 26.0378Z"
                      fill="#37383A"
                    />
                  </svg>
                </div>

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

                <div class="flex opacity-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="37"
                    height="38"
                    viewBox="0 0 37 38"
                    fill="none"
                  >
                    <path
                      d="M18.1946 28.848L16.7435 27.5392C11.5899 22.9087 8.1875 19.8448 8.1875 16.1068C8.1875 13.0429 10.6092 10.6533 13.6914 10.6533C15.4326 10.6533 17.1038 11.4565 18.1946 12.7157C19.2853 11.4565 20.9565 10.6533 22.6977 10.6533C25.7799 10.6533 28.2016 13.0429 28.2016 16.1068C28.2016 19.8448 24.7992 22.9087 19.6456 27.5392L18.1946 28.848Z"
                      fill="#FF002E"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="37"
                    height="38"
                    viewBox="0 0 37 38"
                    fill="none"
                  >
                    <path
                      d="M25.8615 10.6533H11.3058C10.8232 10.6533 10.3605 10.845 10.0192 11.1862C9.67802 11.5274 9.48633 11.9902 9.48633 12.4728V28.848L13.1253 25.209H25.8615C26.3441 25.209 26.8069 25.0174 27.1481 24.6761C27.4893 24.3349 27.681 23.8721 27.681 23.3896V12.4728C27.681 11.9902 27.4893 11.5274 27.1481 11.1862C26.8069 10.845 26.3441 10.6533 25.8615 10.6533ZM25.8615 23.3896H13.1253L11.3058 25.209V12.4728H25.8615"
                      fill="#353739"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                  >
                    <path
                      d="M15.585 26.0378L15.8959 21.4579L24.4241 13.9654C24.8016 13.6298 24.3464 13.4674 23.8467 13.7597L13.3197 20.2452L8.76687 18.8377C7.78968 18.567 7.77858 17.9066 8.98896 17.4302L26.7227 10.7606C27.5333 10.4033 28.3106 10.9555 27.9997 12.1681L24.9793 26.0378C24.7683 27.0231 24.1576 27.2613 23.3137 26.8066L18.7164 23.4934L16.5066 25.5831C16.2512 25.8321 16.0403 26.0378 15.585 26.0378Z"
                      fill="#37383A"
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

          <div className="flex flex-col">
            <div className="p-3 bg-[#151544] inline-block rounded-3xl h-fit m-[0.68rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="37"
                viewBox="0 0 29 30"
                fill="none"
                className="text-white"
              >
                <path
                  d="M21.4171 10.5196C21.7383 10.1984 21.7383 9.66314 21.4171 9.35843L19.49 7.43132C19.1853 7.11013 18.65 7.11013 18.3288 7.43132L16.8135 8.93841L19.9018 12.0267L21.4171 10.5196ZM6.83203 18.9281V22.0164H9.92034L19.0288 12.8997L15.9405 9.81138L6.83203 18.9281Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="p-3 bg-[#151544] inline-block rounded-3xl h-fit  m-[0.68rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="37"
                viewBox="0 0 38 37"
                fill="none"
                className=" text-white  "
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
        <div className="flex my-10">
          <div class="bg-white rounded-lg  max-w-[25rem]  p-[1.14rem]">
            <div class="bg-white rounded-sm max-w-md">
              <img src={mainPostImage} className=" max-h-[15rem] w-full" />
              <div class="flex items-center justify-between  mt-3 mb-2">
                <div class="flex gap-5">
                  <svg
                    fill="#262626"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                  </svg>
                  <svg
                    fill="#262626"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    fill="#262626"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                  </svg>
                </div>
                <div class="flex">
                  <svg
                    fill="#262626"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
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

          <div className="flex flex-col">
            <div className="p-3 bg-[#151544] inline-block rounded-3xl h-fit m-[0.68rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="37"
                viewBox="0 0 29 30"
                fill="none"
                className="text-white"
              >
                <path
                  d="M21.4171 10.5196C21.7383 10.1984 21.7383 9.66314 21.4171 9.35843L19.49 7.43132C19.1853 7.11013 18.65 7.11013 18.3288 7.43132L16.8135 8.93841L19.9018 12.0267L21.4171 10.5196ZM6.83203 18.9281V22.0164H9.92034L19.0288 12.8997L15.9405 9.81138L6.83203 18.9281Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="p-3 bg-[#151544] inline-block rounded-3xl h-fit  m-[0.68rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="37"
                viewBox="0 0 38 37"
                fill="none"
                className=" text-white  "
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
    </>
  );
}
