import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Hero() {
  return (
    <div className="w-[95%] md:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto flex flex-col md:flex-row md:justify-between my-14 lg:mb-24 ">
      <div className="w-full md:w-[20%] flex flex-col items-center text-start md:items-start">
        <button className="bg-transparent border-none text-base md:text-[18px] flex gap-6 lg:gap-8 text-black tracking-[.5px] px-2 py-3">
          Womens Fashion
          <ArrowForwardIosIcon className="text-black size-2 lg:size-[3px]" />
        </button>
        <button className="bg-transparent border-none text-base md:text-[18px] flex gap-6 lg:gap-8 text-black tracking-[.5px] px-2 py-3">
          Mens fashion
          <ArrowForwardIosIcon className="text-black size-2 lg:size-[3px]" />
        </button>
        <button className="bg-transparent border-none text-base md:text-[18px] text-black tracking-[.5px] px-2 py-3">
          Electronics
        </button>
        <button className="bg-transparent border-none text-base md:text-[18px] text-black tracking-[.5px] px-2 py-3">
          Home & Lifestyle
        </button>
        <button className="bg-transparent border-none text-base md:text-[18px] text-black tracking-[.5px] px-2 py-3">
          Medicine
        </button>
        <button className="bg-transparent border-none text-base md:text-[18px] text-black tracking-[.5px] px-2 py-3">
          Sports and Outdoor
        </button>
        <button className="bg-transparent border-none text-base md:text-[18px] text-black tracking-[.5px] px-2 py-3">
          Babys and Toys
        </button>
        <button className="bg-transparent border-none text-base md:text-[18px] text-black tracking-[.5px] px-2 py-3">
          Grocerries & pets
        </button>
        <button className="bg-transparent border-none text-base md:text-[18px] text-black tracking-[.5px] px-2 py-3">
          Health and Beauty
        </button>
      </div>
      <img src="/hero-frame.png" alt="hero " className="w-full md:w-[75%]" />
    </div>
  );
}

export default Hero;
