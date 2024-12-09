function NewArrival() {
  return (
    <div className="w-[95%] md:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto flex flex-col items-start gap-6 2xl:gap-8 mb-14 lg:mb-24 lg:h-[90vh]">
      <div className="flex items-center gap-2">
        <span className="py-4 px-2 bg-button1"></span>
        <h4 className="text-xs lg:text-base text-button1">Features</h4>
      </div>

      <h2 className="text-2xl md:text-3xl 2xl:text-4xl tracking-[1px] font-[500]">
        New Arrival
      </h2>

      <div className="w-full h-[90%] flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full lg:w-[48%] lg:h-full relative bg-black1 p-4">
          <img src="/arrival1.png" className="lg:h-full" alt="arrival" />
        </div>

        <div className="w-full h-full lg:w-[48%] flex flex-col gap-6">
          <div className="w-full h-[46%]">
            <img
              src="/arrival2.png"
              className="h-full w-full px-2"
              alt="arrival"
            />
          </div>

          <div className="w-full h-[47%] flex flex-col lg:flex-row lg:justify-between">
            <div className="w-full lg:w-[48%] h-full">
              <img
                src="/arrival3.png"
                className="h-full p-4 bg-black1"
                alt="arrival"
              />
            </div>

            <div className="w-full lg:w-[48%] h-full">
              <img
                src="/arrival4.png"
                className="h-full p-4 bg-black1"
                alt="arrival"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
