import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
const Header = () => {
  const [showOption, setOption] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = function () {
    dispatch(logout());
    setOption(false);
  };

  const user = useSelector((state) => state.auth.user);
  const wishlist = useSelector((state) => state.wish.wish);
  const cartList = useSelector((state) => state.cart.cart);

  return (
    <header className="w-[95%] md:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto flex items-center justify-between py-3 md:py-5 2xl:py-8 border-b-[1px] border-b-[rgba(0,0,0,.5)]">
      <Link
        to={"/"}
        className="text-xl md:text-2xl 2xl:text-3xl tracking-[1px] text-black font-bold"
      >
        Exclusive
      </Link>

      <div className="flex items-center gap-8">
        <Link
          to={"/"}
          className="text-sm md:text-base 2xl:text-[18px] tracking-[1px] font-[400]"
        >
          Home
        </Link>

        <Link
          to={"/about"}
          className="text-sm md:text-base 2xl:text-[18px] tracking-[1px] font-[400]"
        >
          About
        </Link>

        <Link
          to={"/contact"}
          className="text-sm md:text-base 2xl:text-[18px] tracking-[1px] font-[400]"
        >
          Contact
        </Link>

        <Link
          to={"/signup"}
          className="text-sm md:text-base 2xl:text-[18px] tracking-[1px] font-[400]"
        >
          Sign up
        </Link>
      </div>

      <div className="flex items-center gap-5">
        <form className="relative w-72">
          <input
            type="text"
            className="w-full py-2 pl-3 pr-8 bg-white2 border-none outline-none"
            placeholder="what are you looking for ?"
          />
          <SearchIcon className="w-4 h-4 absolute top-[50%] -translate-y-[50%] right-5" />
        </form>
      </div>

      {user ? (
        <div className="flex items-center gap-3 relative">
          <Link to={"/wishlist"} className="size-16 relative">
            <FavoriteBorderIcon className="size-full" />
            <span className="text-xs text-white bg-red-500 py-1 px-2 rounded-full absolute -top-1 right-6">
              {wishlist.length}
            </span>
          </Link>

          <Link to={"/cart"} className="size-16 relative ">
            <ShoppingCartIcon className="size-full" />
            <span className="text-xs text-white bg-red-500 py-1 px-2 rounded-full absolute -top-1 right-6">
              {cartList.length}
            </span>
          </Link>

          <button
            className="size-16 flex items-start justify-center"
            onClick={() => setOption((curr) => (curr = !curr))}
          >
            <AccountBoxIcon className="" />
          </button>

          {showOption && (
            <div className="flex absolute right-2 text-white gap-4 p-5 top-6 bg-gradient-to-r from-[rgba(0,0,0,.6)] to-purple-500  flex-col items-start ">
              <Link
                to={"/account"}
                onClick={() => setOption(false)}
                className="text-base tracking-[.5px]"
              >
                Manage My account
              </Link>
              <button
                onClick={() => setOption(false)}
                className="text-base tracking-[.5px]"
              >
                My Order
              </button>
              <button
                onClick={() => setOption(false)}
                className="text-base tracking-[.5px]"
              >
                My Cancellation
              </button>

              <button
                onClick={() => setOption(false)}
                className="text-base tracking-[.5px]"
              >
                My Reviews
              </button>

              <button
                onClick={handleLogout}
                className="text-base tracking-[.5px]"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : null}
    </header>
  );
};

export default Header;
