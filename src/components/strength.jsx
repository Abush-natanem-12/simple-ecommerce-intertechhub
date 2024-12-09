import { strengthList } from "../constants";

function Strength() {
  return (
    <div className="w-[95%] md:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto flex justify-around py-6 mb-14 lg:mb-24">
      {strengthList.map(function (el, i) {
        return (
          <div
            key={i}
            className="w-[32%] flex flex-col text-center gap-5 items-center"
          >
            {
              // NOTE: for the image
            }
            <div className="bg-gray p-2 md:p-3 2xl:p-4 rounded-full">
              <div className="bg-black p-2 md:p-3  2xl:p-4 rounded-full">
                <img
                  src={`/${el.path}`}
                  alt="delivery Icon"
                  className="w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14"
                />
              </div>
            </div>

            {
              // NOTE: for texts
            }

            <p className="text-base md:text-[18px] 2xl:text-[22px] text-black font-bold tracking-[.5px] uppercase">
              {el.text1}
            </p>

            <p className="text-xs md:text-[base] 2xl:text-[18px] text-black font-[400] tracking-[.5px]">
              {el.text2}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Strength;
