export default function GreenButton({ text }) {
  return (
    <button className="py-4 px-8 mb-auto text-white bg-[#07BD65] rounded-2xl text-base font-medium  hover:bg-[#07bd65d4]   active:bg-[#07bd65] ">
      {text}
    </button>
  );
}
