import SendIcon from "@mui/icons-material/Send";
const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center bg-black1">
      <div className="w-[95%] md:w-[90%] xl:w-[85%] 2xl:w-[80%] text-white4 flex flex-col 2xl:flex-row 2xl:justify-around py-6 md:py-12 2xl:py-20">
        <div className="w-full 2xl:w-[36%] flex flex-col md:flex-row">
          <div className="w-full md:w-[47%] flex flex-col gap-2 2xl:gap-4">
            <h4 className="text-xs md:text-base 2xl:text-xl tracking-[.5px] font-[600]">
              Exclusive
            </h4>
            <div className="flex flex-col gap-2 2xl:gap-4">
              <span className="text-sm md:text-xs 2xl:text-[18px] font-[600]">
                {" "}
                Subscribe
              </span>
              <span className="text-sm md:text-xs 2xl:text-[18px] font-[300]">
                {" "}
                Get 10% off your first order
              </span>
              <form className="w-[90%] relative">
                <input
                  type="text"
                  className="w-full px-5 py-2 border-[1px] border-white rounded-lg outline-none bg-transparent placeholder:font-[300] tracking-[1px]"
                  placeholder="Enter your Email "
                />
                <SendIcon className="size-4 lg:size-6 text-white absolute top-[50%] -translate-y-[50%] right-3" />
              </form>
            </div>
          </div>

          <div className="w-full md:w-[47%] flex flex-col gap-2 2xl:gap-4">
            <h4 className="text-xs md:text-base 2xl:text-xl tracking-[.5px] font-[400]">
              Support
            </h4>
            <div className="flex flex-col gap-2 2xl:gap-4">
              <span className="text-sm md:text-xs 2xl:text-[18px] font-[300] leading-[3]">
                {" "}
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </span>
              <span className="text-sm md:text-xs 2xl:text-[18px] font-[300]">
                {" "}
                exclusive@gmail.com
              </span>
              <span className="text-sm md:text-xs 2xl:text-[18px] font-[300]">
                {" "}
                +88015-88888-9999
              </span>
            </div>
          </div>
        </div>

        <div className="w-full 2xl:w-[36%] flex flex-col md:flex-row ">
          <div className="w-full md:w-[47%] flex flex-col gap-2 2xl:gap-4">
            <h4 className="text-xs md:text-base 2xl:text-xl tracking-[.5px] font-[600]">
              Account
            </h4>
            <div className="flex flex-col gap-2 2xl:gap-4">
              <span className="text-sm md:text-xs 2xl:text-[18px] font-[300]">
                {" "}
                My Account
              </span>
              <span className="text-sm md:text-xs 2xl:text-[18px] font-[300]">
                {" "}
                Login / Register
              </span>
              <span className="text-sm md:text-xs 2xl:text-[18px] font-[300]">
                {" "}
                Cart
              </span>
              <span className="text-sm md:text-xs 2xl:text-[18px] font-[300]">
                {" "}
                Wishlist
              </span>
            </div>
          </div>

          <div className="w-full md:w-[47%] flex flex-col gap-2 2xl:gap-4">
            <h4 className="text-xs md:text-base 2xl:text-xl tracking-[.5px] font-[400]">
              Quick Link
            </h4>
            <div className="flex flex-col gap-2 2xl:gap-4">
              <span className="text-sm md:text-xs 2xl:text-[18px] font-[300] leading-[3]">
                {" "}
                Privacy Policy
              </span>
              <span className="text-sm md:text-xs 2xl:text-[18px] font-[300]">
                {" "}
                Term of Use
              </span>
              <span className="text-sm md:text-xs 2xl:text-[18px] font-[300]">
                {" "}
                FAQ
              </span>

              <span className="text-sm md:text-xs 2xl:text-[18px] font-[300]">
                {" "}
                contact
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className="w-full text-center py-2 xl:py-4 text-xs md:text-base tracking-[.5px] font-[400] text-gray">
        &copy; 2023 Your Website. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
