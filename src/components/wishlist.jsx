import { useEffect, useState } from "react";
import { getAllProducts } from "../hooks/requests";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { removeFromCart } from "../features/cart/cartSlice";
import { useSelector } from "react-redux";
import { removeFromWish } from "../features/wishlist/wishSlice";
import DeleteIcon from "@mui/icons-material/Delete";

function WishListComponent() {
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

  const handleRemmoveFromWish = (productId) => {
    dispatch(removeFromWish(productId));
  };

  useEffect(function () {
    const fetchProducts = async function () {
      try {
        setLoading(true);
        const limitedProducts = await getAllProducts();
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
        <h4 className="text-xs lg:text-base text-button1">Todays</h4>
      </div>

      <div className="w-full flex gap-10 items-end">
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl tracking-[1px] font-[500]">
          WishList ({wish.length})
        </h2>

        <div className="flex items-center gap-5 ml-auto">
          <button className="text-xl md:text-2xl border-[1px] border-black  bg-white2 py-2 px-3 hover:bg-hoverButton1 hover:text-white duration-500 font-[300]">
            Move All To Bag
          </button>

          <button className="text-xl md:text-2xl border-[1px] border-black  bg-white2 py-2 px-3 hover:bg-hoverButton1 hover:text-white duration-500 font-[300]">
            Clear WishList
          </button>
        </div>
      </div>

      <div className="w-full flex gap-5 items-end overflow-x-auto snap-x snap-mandatory">
        {wish.length === 0 ? (
          <div className="text-2xl text-center text-gray tracking-[.5px] w-full py-14 mb-14 lg:mb-24">
            {" "}
            You have now wishlist currently{" "}
          </div>
        ) : (
          todaysProducts.map((el) => {
            return (
              wish.includes(el.id) && (
                <div
                  key={el.id}
                  className="w-[24%]  flex flex-col items-center gap-3 lg:gap-4 flex-shrink-0 snap-center relative"
                >
                  <button
                    onClick={() => handleRemmoveFromWish(el.id)}
                    className="text-button1 absolute top-2 right-2"
                  >
                    <DeleteIcon className="w-6 h-6" />
                  </button>

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
              )
            );
          })
        )}
      </div>
    </div>
  );
}

export default WishListComponent;
