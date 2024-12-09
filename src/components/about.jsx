// NOTE: IMPORTING CONSTANT VALUES
import { aboutStrengthList } from "../constants";
import { AboutPeopleList } from "../constants";
import Strength from "./strength";

function AboutComponent() {
  return (
    <div className="w-[95%] md:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto flex flex-col">
      <div className="w-full flex flex-col gap-8 lg:gap-0 items-center lg:flex-row lg:justify-around  mb-14 lg:mb-24">
        <div className="w-full lg:w-[40%] flex flex-col  items-start gap-10">
          <h2 className="text-2xl lg:text-3xl 2xl:text-5xl tracking-[1px] 2xl:tracking-[2px] text-black1 font-[500]">
            Our Story
          </h2>

          <p className="text-base lg:text-[18px] text-black1 font-[400]">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region. <br /> <br />
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>

        <img
          src="/about1.png"
          alt="about"
          className="w-[100%] sm:w-[85%] lg:w-[40%]"
        />
      </div>

      <div className="w-full flex flex-wrap items-center justify-center gap-y-8 md:justify-between mb-14 lg:mb-24">
        {aboutStrengthList.map(function (el, i) {
          let red = i === 1;
          return (
            <StrengthAbout
              key={i}
              source={el.path}
              size={el.size}
              text={el.text}
              red={red}
            />
          );
        })}
      </div>

      <div className="w-full flex flex-wrap items-center justify-center gap-y-8 md:justify-between mb-14 lg:mb-24">
        {AboutPeopleList.map(function (el, i) {
          return (
            <AboutPeeople
              key={i}
              source={el.path}
              role={el.role}
              name={el.name}
            />
          );
        })}
      </div>

      <Strength />
    </div>
  );
}

function StrengthAbout({ source, size, text, red }) {
  return (
    <div
      className={`flex flex-col  gap-4 items-center w-[80%]  md:w-[47%] 2xl:w-[24%] border-[1px] border-[rgba(0,0,0,.4)] py-6 lg:py-10 ${
        red && "bg-button1 text-white1"
      } text-black`}
    >
      <img
        src={`/${source}`}
        alt="strength"
        className={`w-14 h-14 bg-black p-2 rounded-full ${red && "bg-white"}`}
      />
      <span className="text-2xl font-bold tracking-[.5px]">{size}</span>
      <p className="text-sm md:text-base 2xl:text-[18px] tracking-[1px] font-[400]">
        {text}
      </p>
    </div>
  );
}

function AboutPeeople({ source, name, role }) {
  return (
    <div className="w-[95%] md:w-[47%] 2xl:w-[30%]  flex flex-col items-start gap-2 lg:gap-3">
      <div className="w-full flex justify-center bg-white2 pt-6 lg:pt-10">
        <img className="h-96" src={`/${source}`} alt="share holder" />
      </div>
      <h3 className="text-base md:text-xl 2xl:text-2xl tracking-[1px] font-[500]">
        {name}
      </h3>
      <p className="text-xs md:text-base 2xl:text-[14px] tracking-[1px] font-[300]">
        {role}
      </p>

      <div className="flex items-center gap-2">
        {Array.from({ length: 3 }, (_, i) => (
          <img
            src={`/social${i + 1}.png`}
            key={i}
            className="size-4 cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}

export default AboutComponent;
