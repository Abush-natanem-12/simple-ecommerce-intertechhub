import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

function ContactComponent() {
  return (
    <div className="w-[95%] md:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto flex flex-col lg:flex-row py-8 md:py-14">
      <div className="w-full md:w-[30%] flex flex-col *: items-start">
        <div className="flex flex-col gap-4 py-6">
          <div className="flex items-center justify-start gap-4">
            <div className="bg-button1 rounded-full p-2">
              <CallIcon className="text-white  size-2 lg:size-4" />
            </div>
            <span className="text-base lg:text-xl tracking-[1px] text-black">
              Call To us
            </span>
          </div>
          <p className="text-xs lg:text-base tracking-[1px] text-black">
            We are available 24/7, 7 days a week.
          </p>
          <p className="text-xs lg:text-base tracking-[1px] text-black">
            Phone: +8801611112222
          </p>
        </div>

        <div className="flex flex-col gap-4 py-6">
          <div className="flex items-center justify-start gap-4">
            <div className="bg-button1 rounded-full p-2">
              <EmailIcon className="text-white  size-2 lg:size-4" />
            </div>
            <span className="text-base lg:text-xl tracking-[1px] text-black">
              Write To us
            </span>
          </div>
          <p className="text-xs lg:text-base tracking-[1px] text-black">
            Fill out our form and we will contact you within 24 hours..
          </p>
          <p className="text-xs lg:text-base tracking-[1px] text-black">
            Emails: customer@exclusive.com
          </p>
          <p className="text-xs lg:text-base tracking-[1px] text-black">
            Emails: support@exclusive.com
          </p>
        </div>
      </div>

      <form className="w-full md:w-[65%] p-4 flex flex-col items-end  gap-6">
        <div className="w-full flex flex-col md:flex-row md:justify-between gap-y-5">
          <input
            type="text"
            className="text-xs md:text-base w-full sm:w-[85%] md:w-[32%] tracking-[.5px] bg-white2 p-2 border-none outline-none text-gray"
            placeholder="Your name"
          />

          <input
            type="text"
            className="text-xs md:text-base w-full sm:w-[85%] md:w-[32%] tracking-[.5px] bg-white2 p-2 border-none outline-none text-gray"
            placeholder="Your name"
          />

          <input
            type="text"
            className="text-xs md:text-base w-full sm:w-[85%] md:w-[32%] tracking-[.5px] bg-white2 p-2 border-none outline-none text-gray"
            placeholder="Your name"
          />
        </div>

        <textarea
          className="text-xs md:text-base w-full h-52 tracking-[.5px] bg-white2 p-2 border-none outline-none text-gray resize-none"
          placeholder="Your Message"
        />

        <button className="text-base lg:text-xl tracking-[1px] bg-button1 hover:bg-hoverButton1 duration-300 px-4 py-2 text-white">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactComponent;
