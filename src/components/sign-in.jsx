import { useState } from "react";
import { Link } from "react-router-dom";

const SignInComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = function () {};
  return (
    <div className="w-full flex lg:flex-row items-center py-8 lg:py-14">
      {
        // NOTE: ENTER THE IMAGE HERE }
      }
      <img
        src="/auth.png"
        alt="auth side"
        className="hidden lg:block w-[45%]"
      />
      <div className="w-full sm:w-[90%] md:w-[80%] xl:w-[50%] flex justify-center">
        <form
          className="w-[50%] flex flex-col items-center gap-4 "
          onSubmit={handleSubmit}
        >
          <h2 className="w-full text-center text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-black1 tracking-[1px] mb-4 lg:mb-6">
            Login to an Exclusive
          </h2>

          <h2 className="w-full text-start text-xx md:text-xs xl:text-base 2xl:text-text-xl text-black1 tracking-[1px] fonr-[300]">
            Enter your details below
          </h2>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="border-b-[1px] border-b-[rgba(0,0,0,.5)] p-2 w-full text-xs md:text-base outline-none mb-4 lg:mb-6"
            placeholder="Emailor Phone Number"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="border-b-[1px] border-b-[rgba(0,0,0,.5)] p-2 w-full text-xs md:text-base outline-none mb-4 lg:mb-6"
            placeholder="password"
          />

          <div className="w-full flex items-center justify-between">
            <button className="w-[45%] py-3 text-white font-bold tracking-[.5px] bg-button1 hover:bg-hoverButton1 duration-300">
              Sign In
            </button>

            <button className="text-button1 text-xs lg:text-base font-[400] tracking-[.5px] hover:text-hoverButton1 duration-300">
              Forgot Password
            </button>
          </div>

          <div className="w-full flex items-center justify-center gap-4">
            <p className=" text-black1 tracking-[.5px] font-[300]">
              I have an account
            </p>

            <Link
              to="/signup"
              className="text-black text-xs lg:text-base font-[400] tracking-[.5px] border-b-[1px] "
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInComponent;
