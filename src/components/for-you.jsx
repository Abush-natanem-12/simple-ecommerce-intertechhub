import { useEffect, useState } from "react";
import { getLimitedProducts } from "../hooks/requests";
import { Link, useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { removeFromCart } from "../features/cart/cartSlice";
import { useSelector } from "react-redux";
import { addToWish } from "../features/wishlist/wishSlice";
import { removeFromWish } from "../features/wishlist/wishSlice";
function ForyouProducts() {
  const dispatch = useDispatch();
  const [todaysProducts, setTodaysProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const wish = useSelector((state) => state.wish.wish);
  const cart = useSelector((state) => state.cart.cart);

  const gotoDetail = function (id) {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (productId) => {
    dispatch(addToCart(productId));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleAddToWish = (productId) => {
    dispatch(addToWish(productId));
  };

  const handleRemmoveFromWish = (productId) => {
    dispatch(removeFromWish(productId));
  };

  useEffect(function () {
    const fetchProducts = async function () {
      try {
        setLoading(true);
        const limitedProducts = await getLimitedProducts(6);
        setTodaysProducts(limitedProducts);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="w-[95%] md:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto mb-14 lg:mb-24 flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <span className="py-4 px-2 bg-button1"></span>
        <h4 className="text-xs lg:text-base text-button1">for you</h4>
      </div>

      <div className="w-full flex gap-10 items-end">
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl tracking-[1px] font-[500]">
          Just For You
        </h2>

        <div className="flex items-center gap-5 ml-auto">
          <button className="text-xl md:text-2xl 2xl:text-3xl font-bold bg-white2 py-2 px-3 rounded-full">
            &larr;
          </button>

          <button className="text-xl md:text-2xl 2xl:text-3xl font-bold bg-white2 py-2 px-3 rounded-full">
            &rarr;
          </button>
        </div>
      </div>

      <div className="w-full flex gap-5 items-end overflow-x-auto snap-x snap-mandatory">
        {todaysProducts.map((el) => {
          return (
            <div
              key={el.id}
              className="w-[24%]  flex flex-col items-center gap-3 lg:gap-4 flex-shrink-0 snap-center relative"
            >
              <span className="text-white bg-button1 tracking-[.5px] px-2 py-1 absolute top-0 left-0">
                -30%
              </span>

              {wish.includes(el.id) ? (
                <button
                  onClick={() => handleRemmoveFromWish(el.id)}
                  className="text-button1 absolute top-2 right-2"
                >
                  <FavoriteIcon className="w-6 h-6" />
                </button>
              ) : (
                <button
                  onClick={() => handleAddToWish(el.id)}
                  className="text-button1 absolute top-2 right-2"
                >
                  <FavoriteBorderIcon className="w-6 h-6" />
                </button>
              )}

              <Link
                to={`/product/${el.id}`}
                className="text-black absolute top-10 right-2"
              >
                <VisibilityIcon className="w-6 h-6" />
              </Link>
              <div className=" h-56 w-full flex justify-center bg-white2 py-4">
                {" "}
                <img
                  onClick={() => gotoDetail(el.id)}
                  className="h-[100%]"
                  src={el.image}
                />{" "}
              </div>

              <p className="text-xs md:text-base text-black tracking-[.5px]">
                {el.title}
              </p>

              <div className="flex self-start gap-5">
                <span className="text-sm md:text-xs text-button1 font-[500] tracking-[.4px] ">
                  ${el.price}
                </span>

                <span className="text-sm md:text-xs line-through tracking-[.4px] ">
                  ${Math.round(el.price / 0.6, 2)}
                </span>
              </div>

              {cart.includes(el.id) ? (
                <button
                  onClick={() => handleRemoveFromCart(el.id)}
                  className="w-full bg-black text-white text-xs md:text-base 2xl:text-xl tracking-[.5px] py-2 md:py-3 2xl:py-4"
                >
                  Remove From Cart
                </button>
              ) : (
                <button
                  onClick={() => handleAddToCart(el.id)}
                  className="w-full bg-black text-white text-xs md:text-base 2xl:text-xl tracking-[.5px] py-2 md:py-3 2xl:py-4"
                >
                  Add To Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ForyouProducts;
