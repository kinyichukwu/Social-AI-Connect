export default function InstagramPost() {
  return (
    <div className="px-[8rem]  bg-[#f6f6ff] md:min-h-screen">
      <div className="max-w-[35rem] pt-14 pb-10">
        <h1 className=" text-[1.43rem] font-extrabold text-[#121228] text-center">
          Post to Instagram
        </h1>
        <p className="text-[0.8125rem] text-[#111] font-[400] text-center">
          Dictumst scelerisque ut commodo dis. Risus ac tellus sapien <br />{" "}
          gravida sit elementum dui eget nunc.{" "}
        </p>
      </div>
      <div className="flex flex-wrap  gap-[2.63rem] pb-5">
        <div className=" text-[1.2rem] text-[#151544b1] bg-white p-16 rounded-[1.25rem] font-semibold drop-shadow-sm shadow-sm">
          Post
        </div>
        <div className=" text-[1.2rem] text-[#151544b1]  bg-white p-16 rounded-[1.25rem] font-semibold drop-shadow-sm shadow-sm">
          Reel
        </div>
        <div className=" text-[1.2rem] text-[#151544b1]  bg-white p-16 rounded-[1.25rem] font-semibold drop-shadow-sm shadow-sm">
          Story
        </div>
      </div>
    </div>
  );
}
