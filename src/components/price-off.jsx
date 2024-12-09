import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PriceOff = () => {
  return (
    <div className="w-full bg-black1 flex items-center justify-center relative">
      <p className="text-white4 text-xs md:text-base tracking-[.5px] font-[400] flex items-center gap-2 py-2 ">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        ShopNow
        <button className="underline font-[600]">ShopNow</button>
      </p>

      <div className="absolute top-[50%] -translate-y-[50%] right-10 md:right-20 2xl:right-32 flex items-center">
        <button className="text-white4 text-xs md:text-base tracking-[.5px] font-[400] flex items-center gap-2 py-2">
          English
        </button>
        <ExpandMoreIcon className="size-4 md:size-6 text-white" />
      </div>
    </div>
  );
};

export default PriceOff;
