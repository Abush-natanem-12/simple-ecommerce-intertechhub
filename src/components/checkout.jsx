import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllProducts } from "../hooks/requests";
import { Link } from "react-router-dom";

function CheckoutComponent() {
  const [todaysProducts, setTodaysProducts] = useState([]);
  const cart = useSelector((state) => state.cart.cart);

  useEffect(function () {
    const fetchProducts = async function () {
      try {
        const limitedProducts = await getAllProducts();
        setTodaysProducts(limitedProducts);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  const totalBalance = todaysProducts
    .filter((product) => cart.includes(product.id))
    .reduce((sum, product) => sum + product.price, 0);
  return (
    <div className="w-[95%] md:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto flex flex-col gap-6 py-14 lg:pb-24">
      <h2 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl tracking-[.5px]">
        Billing Details
      </h2>

      <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-0">
        <form className="w-full lg:w-[42%] flex flex-col gap-3">
          <div className="w-full sm:w-[90%] md:w-[85%] lg:w-full 2xl:w-[80%]  flex flex-col gap-2">
            <label className="text-xs md:text-base tracking-[.5px] text-gray">
              First Name
            </label>

            <input
              type="text"
              className="w-full px-2 py-3 bg-white2 border-none outline-none rounded-lg"
            />
          </div>

          <div className="w-full sm:w-[90%] md:w-[85%] lg:w-full 2xl:w-[80%]  flex flex-col gap-2">
            <label className="text-xs md:text-base tracking-[.5px] text-gray">
              Company Name
            </label>

            <input
              type="text"
              className="w-full px-2 py-3 bg-white2 border-none outline-none rounded-lg"
            />
          </div>

          <div className="w-full sm:w-[90%] md:w-[85%] lg:w-full 2xl:w-[80%]  flex flex-col gap-2">
            <label className="text-xs md:text-base tracking-[.5px] text-gray">
              Street Address
            </label>

            <input
              type="text"
              className="w-full px-2 py-3 bg-white2 border-none outline-none rounded-lg"
            />
          </div>

          <div className="w-full sm:w-[90%] md:w-[85%] lg:w-full 2xl:w-[80%]  flex flex-col gap-2">
            <label className="text-xs md:text-base tracking-[.5px] text-gray">
              Apartment Floor etc (optional)
            </label>

            <input
              type="text"
              className="w-full px-2 py-3 bg-white2 border-none outline-none rounded-lg"
            />
          </div>

          <div className="w-full sm:w-[90%] md:w-[85%] lg:w-full 2xl:w-[80%]  flex flex-col gap-2">
            <label className="text-xs md:text-base tracking-[.5px] text-gray">
              Town / City
            </label>

            <input
              type="text"
              className="w-full px-2 py-3 bg-white2 border-none outline-none rounded-lg"
            />
          </div>

          <div className="w-full sm:w-[90%] md:w-[85%] lg:w-full 2xl:w-[80%]  flex flex-col gap-2">
            <label className="text-xs md:text-base tracking-[.5px] text-gray">
              Phone Number
            </label>

            <input
              type="text"
              className="w-full px-2 py-3 bg-white2 border-none outline-none rounded-lg"
            />
          </div>

          <div className="w-full sm:w-[90%] md:w-[85%] lg:w-full 2xl:w-[80%]  flex flex-col gap-2">
            <label className="text-xs md:text-base tracking-[.5px] text-gray">
              Email Address
            </label>

            <input
              type="text"
              className="w-full px-2 py-3 bg-white2 border-none outline-none rounded-lg"
            />
          </div>
        </form>

        <div className="w-full lg:w-[42%] flex flex-col gap-3">
          <div className="w-full flex flex-col">
            {cart.length === 0 ? (
              <div className="text-2xl text-center text-gray tracking-[.5px] w-full py-14 mb-14 lg:mb-24">
                {" "}
                You have no carts for checkout{" "}
              </div>
            ) : (
              todaysProducts.map((el) => {
                return (
                  cart.includes(el.id) && (
                    <div
                      key={el.id}
                      className="w-full  flex  items-center gap-7 lg:gap-10 flex-shrink-0 snap-center relative"
                    >
                      <div className=" h-20  flex justify-center bg-white2 py-4">
                        {" "}
                        <img className="h-[100%]" src={el.image} />{" "}
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
          <div className="w-full flex flex-col gap-2">
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

            <form className="w-full flex px-5 justify-between pb-3">
              <input
                className="text-xs lg:text-base w-[55%] py-2 text-black tracking-[.5px] border-2 border-[rgba(0,0,0,.4)] outline-none px-2"
                placeholder="Coupon Code"
              />
              <button className="text-xs lg:text-base text-white bg-button1 hover:bg-hoverButton1 py-2 w-[40%] tracking-[.5px]">
                Apply Cuopon
              </button>
            </form>

            <Link
              to={"/"}
              className="text-xs lg:text-base text-white bg-button1 hover:bg-hoverButton1 py-2 w-[40%] tracking-[.5px] ml-4"
            >
              Place Order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutComponent;
