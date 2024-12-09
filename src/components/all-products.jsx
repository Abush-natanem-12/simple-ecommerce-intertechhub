import { useEffect, useState } from "react";
import { getAllProducts, getLimitedProducts } from "../hooks/requests";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/RemoveRedEye";
import { Link, useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addToCart } from "../features/cart/cartSlice";
import { removeFromCart } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToWish } from "../features/wishlist/wishSlice";
import { removeFromWish } from "../features/wishlist/wishSlice";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [some, setSome] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  useEffect(
    function () {
      const fetchProducts = async function () {
        try {
          const data = await (some ? getAllProducts() : getLimitedProducts(8));
          setProducts(data);
        } catch (error) {
          console.error("Failed to fetch products:", error);
        }
      };

      fetchProducts();
    },
    [some]
  );
  return (
    <div className="w-[95%] md:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto flex flex-col gap-6 lg:gap-8 mb-14 lg:mb-24">
      <div className="flex items-center gap-2">
        <span className="py-4 px-2 bg-button1"></span>
        <h4 className="text-xs lg:text-base text-button1">Our Products</h4>
      </div>

      <div className="w-full flex gap-10 items-end">
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl tracking-[1px] font-[500]">
          Explore Our Products
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

      <div className="w-full flex items-end gap-y-8 justify-between flex-wrap">
        {products.map((el) => {
          return (
            <div
              key={el.id}
              className="w-[24%]  flex flex-col items-center gap-3 lg:gap-4 flex-shrink-0 snap-center relative"
            >
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
                  alt="product"
                />{" "}
              </div>

              <p className="text-xs md:text-base text-black tracking-[.5px]">
                {el.title}
              </p>

              <div className="flex self-start gap-5">
                <span className="text-xs md:text-base text-button1 font-[800] tracking-[.4px] ">
                  ${el.price}
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

      <button
        onClick={() => setSome(true)}
        className="text-xs md:text-base 2xl:text-xl text-white border-none bg-button1 hover:bg-hoverButton1 duration-400 py-2 px-6 
        self-center"
      >
        View All Products
      </button>
    </div>
  );
}

export default AllProducts;
