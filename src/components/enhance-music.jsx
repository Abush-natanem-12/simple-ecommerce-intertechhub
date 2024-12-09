function EnhancedMusic() {
  return (
    <div className="w-[95%] md:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto bg-black flex flex-col lg:flex-row justify-around py-10 lg:py-14 mb-14 lg:mb-24">
      <div className="w-full lg:w-[40%] flex flex-col gap-8 items-start">
        <span className="text-button2 text-xs md:text-base 2xl:text-xl tracking-[.5px]">
          Categories
        </span>
        <h3 className="text-white text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">
          Enhance Your Music Experiance
        </h3>

        <div className="w-full flex items-center gap-4">
          <div className="rounded-full bg-white text-black flex flex-col  items-center p-4">
            <span className="text-base font-bold">23</span>
            <span className="text-xs ">Hours</span>
          </div>

          <div className="rounded-full bg-white text-black flex flex-col  items-center p-4">
            <span className="text-base font-bold">23</span>
            <span className="text-xs ">Hours</span>
          </div>

          <div className="rounded-full bg-white text-black flex flex-col  items-center p-4">
            <span className="text-base font-bold">23</span>
            <span className="text-xs ">Hours</span>
          </div>

          <div className="rounded-full bg-white text-black flex flex-col  items-center p-4">
            <span className="text-base font-bold">23</span>
            <span className="text-xs ">Hours</span>
          </div>
        </div>

        <button className="text-base lg:text-xl bg-button2 hover:bg-hoverButton2 duration-500 text-white px-4 py-2">
          Buy Now
        </button>
      </div>

      <div className="w-full lg:w-[40%] flex justify-center relative">
        <div className="w-[100%] rounded-full h-96 absolute top-0 left-0 bg-[rgba(255,255,255,.1)] blur-xl"></div>
        <img
          src="/big-speaker.png"
          className="w-[90%] relative z-10"
          alt="big music speaker"
        />
      </div>
    </div>
  );
}

export default EnhancedMusic;
