export default function InstagramPost() {
  return (
    <div className="md:px-8 px-4  bg-[#f6f6ff] md:min-h-screen">
      <div className=" pt-12 pb-10 hidden md:block">
        <h1 className=" text-[1.43rem] font-extrabold text-[#121228] text-center">
          Post to Instagram
        </h1>
        <p className="text-[0.8125rem] text-[#111] font-[400] text-center">
          Dictumst scelerisque ut commodo dis. Risus ac tellus sapien <br />{" "}
          gravida sit elementum dui eget nunc.{" "}
        </p>
      </div>
      <div className="flex flex-wrap  md:gap-[2.63rem] gap-[2.12rem] pb-5 justify-center md:flex-row flex-col pt-[6.87rem] md:pt-0">
        <div
          className=" md:text-[1.2rem] text-[1rem] text-[#151544b1] bg-white md:p-16  p-[1.1rem]
                         rounded-[1.25rem] font-semibold drop-shadow-sm shadow-sm md:border-0 border-[#151544] border-[2px] md:text-start text-center"
        >
          Post
        </div>{" "}
        <div
          className=" md:text-[1.2rem] text-[1rem] text-[#151544b1] bg-white md:p-16  p-[1.1rem]
                       rounded-[1.25rem] font-semibold drop-shadow-sm shadow-sm md:border-0 border-[#151544] border-[2px] md:text-start text-center"
        >
          {" "}
          Reel
        </div>
        <div
          className=" md:text-[1.2rem] text-[1rem] text-[#151544b1] bg-white md:p-16  p-[1.1rem]
                       rounded-[1.25rem] font-semibold drop-shadow-sm shadow-sm md:border-0 border-[#151544] border-[2px] md:text-start text-center"
        >
          {" "}
          Story
        </div>
      </div>
    </div>
  );
}
