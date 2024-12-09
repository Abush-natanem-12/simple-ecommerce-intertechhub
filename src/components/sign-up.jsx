import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../features/auth/authSlice";

const SignUpComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    const userdData = {
      name,
      email,
      password,
    };

    dispatch(signup(userdData));

    setName("");
    setPassword("");
    setEmail("");

    navigate("/");
  };

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
            Create Account
          </h2>

          <h2 className="w-full text-start text-xx md:text-xs xl:text-base 2xl:text-text-xl text-black1 tracking-[1px] fonr-[300]">
            Enter your details below
          </h2>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="border-b-[1px] border-b-[rgba(0,0,0,.5)] p-2 w-full text-xs md:text-base outline-none mb-4 lg:mb-6"
            placeholder="Name"
          />

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

          <div className="w-full flex flex-col items-center justify-between gap-4">
            <button className="w-[100%] py-3 text-white font-bold tracking-[.5px] bg-button1 hover:bg-hoverButton1 duration-300">
              Sign In
            </button>

            <button className="text-black text-xs lg:text-base font-[400] tracking-[.5px] flex gap-4 justify-center py-4 w-full  border-[1px] border-[rgba(0,0,0,.5)]">
              <img src="/googleIcon.png" className="w-4 h-4" />
              Continue with Google
            </button>
          </div>

          <div className="w-full flex items-center justify-center gap-4">
            <p className=" text-black1 tracking-[.5px] font-[300]">
              Do not have an Account ?
            </p>

            <Link
              to="/login"
              className="text-black text-xs lg:text-base font-[400] tracking-[.5px] border-b-[1px] "
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpComponent;
