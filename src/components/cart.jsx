import { useEffect, useState } from "react";
import { getAllProducts } from "../hooks/requests";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";
import { useSelector } from "react-redux";

function CartComponent() {
  let totalBalance = 0;

  const dispatch = useDispatch();
  const [todaysProducts, setTodaysProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart.cart);

  const gotoDetail = function (id) {
    navigate(`/product/${id}`);
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
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

  totalBalance = todaysProducts
    .filter((product) => cart.includes(product.id))
    .reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="w-[95%] md:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto py-14 mb-14 lg:mb-24 flex flex-col gap-5">
      <div className="w-full flex gap-10 items-end">
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl tracking-[1px] font-[500]">
          Cart ({cart.length})
        </h2>
      </div>

      <div className="w-full flex flex-col gap-5 items-end overflow-x-auto snap-x snap-mandatory">
        {cart.length === 0 ? (
          <div className="text-2xl text-center text-gray tracking-[.5px] w-full py-14 mb-14 lg:mb-24">
            {" "}
            You have now cartlist currently{" "}
          </div>
        ) : (
          todaysProducts.map((el) => {
            return (
              cart.includes(el.id) && (
                <div
                  key={el.id}
                  className="w-full  flex  items-center gap-7 lg:gap-10 flex-shrink-0 snap-center relative"
                >
                  <button
                    onClick={() => handleRemoveFromCart(el.id)}
                    className="text-red-500  px-2 py-1 rounded-full absolute text-red font-[900] -top-0 -right-0"
                  >
                    X
                  </button>

                  <div className=" h-20  flex justify-center bg-white2 py-4">
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

                  <span className="text-sm md:text-base 2xl:text-xl font-[400] tracking-[.4px] ">
                    ${el.price}
                  </span>
                </div>
              )
            );
          })
        )}
      </div>

      <div className="w-full flex justify-between items-start">
        <form className="w-[45%] flex px-5 justify-between pb-3">
          <input
            className="text-xs lg:text-base w-[55%] py-2 text-black tracking-[.5px] border-2 border-[rgba(0,0,0,.4)] outline-none px-2"
            placeholder="Coupon Code"
          />
          <button className="text-xs lg:text-base text-white bg-button1 hover:bg-hoverButton1 py-2 w-[40%] tracking-[.5px]">
            Apply Cuopon
          </button>
        </form>

        <div className="w-[45%] flex flex-col items-center gap-4 px-5 justify-between pb-3 ">
          <div className="w-full flex px-5 justify-between border-b-[1px] border-b-[rgba(0,0,0,.4)] pb-3">
            <span className="text-xs lg:text-base text-black tracking-[.5px]">
              Subtotal :{" "}
            </span>
            <span className="text-xs lg:text-base text-black tracking-[.5px]">
              {totalBalance}
            </span>
          </div>

          <div className="w-full flex px-5 justify-between border-b-[1px] border-b-[rgba(0,0,0,.4)] pb-3">
            <span className="text-xs lg:text-base text-black tracking-[.5px]">
              Shipping :{" "}
            </span>
            <span className="text-xs lg:text-base text-black tracking-[.5px]">
              Free
            </span>
          </div>

          <div className="w-full flex px-5 justify-between pb-3">
            <span className="text-xs lg:text-base text-black tracking-[.5px]">
              Total :{" "}
            </span>
            <span className="text-xs lg:text-base text-black tracking-[.5px]">
              {totalBalance}
            </span>
          </div>
          <Link
            to={"/checkout"}
            className="text-xs text-center lg:text-base text-white bg-button1 hover:bg-hoverButton1 py-2 w-[40%] tracking-[.5px]"
          >
            process to checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartComponent;
