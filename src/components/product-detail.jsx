import { useState, useEffect } from "react";
import { getProductById } from "../hooks/requests";
import { Link, useParams } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function ProductDetailComponent() {
  const { id } = useParams();

  const [chhosenColor, setChoosenColor] = useState("red");
  const [choosenSize, setChoosenSize] = useState("m");
  const [productCounter, setProductCounter] = useState(1);

  const [detailProduct, setDetailProduct] = useState({});

  useEffect(
    function () {
      const productById = async function () {
        try {
          const product = await getProductById(id);
          setDetailProduct(product);
          console.log(product);
        } catch (error) {
          console.error("Failed to fetch product:", error);
        }
      };

      productById();
    },
    [id]
  );

  return (
    <div className="w-[95%] md:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto flex flex-col lg:flex-row lg:justify-between py-14 lg:pb-24">
      <div className="w-full lg:w-[50%] flex flex-col lg:flex-row">
        <img
          src="hello world"
          alt="detail product"
          className="lg:hidden w-full"
        />

        <div className="w-full flex lg:flex-col lg:gap-2 justify-between lg:w-[30%]">
          <img src={detailProduct.image} className="w-[23%] lg:w-[95%] " />
          <img src={detailProduct.image} className="w-[23%] lg:w-[95%] " />
          <img src={detailProduct.image} className="w-[23%] lg:w-[95%] " />
          <img src={detailProduct.image} className="w-[23%] lg:w-[95%] " />
        </div>

        <img
          src={detailProduct.image}
          alt="detail product"
          className="hidden lg:flex w-full"
        />
      </div>

      <div className="w-full lg:w-[45%] flex flex-col items-start gap-4">
        <h1 className="text-xl md:text-2xl 2xl:text-[26px] font-bold  tracking-[.5px]">
          {detailProduct.title}
        </h1>
        <span>Rating</span>
        <span className="text-base md:text-xl 2xl:text-2xl tracking-[1px] text-black1 font-[400]">
          ${detailProduct.price}
        </span>

        <p className="text-sm md:text-xs 2xl:text-base tracking-[.5px] text-black1">
          {detailProduct.description}
        </p>

        <div className="flex items-center gap-2">
          <span className="text-base lg:text-xl text-gray tracking-[.5px]">
            Colours
          </span>
          <div className="flex gap-2 items-center">
            <button
              onClick={() => setChoosenColor("red")}
              className={`w-5 h-5 bg-button1 ${
                chhosenColor == "red" && "border-2 border-black rounded-full"
              } rounded-full`}
            ></button>
            <button
              onClick={() => setChoosenColor("green")}
              className={`w-5 h-5 bg-button2 ${
                chhosenColor == "green" && "border-2 border-black rounded-full"
              } rounded-full`}
            ></button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-base lg:text-xl text-gray tracking-[.5px]">
            Size
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setChoosenSize("xs")}
              className={`px-2 py-1 rounded-md border-[1px] text-black border-black  ${
                choosenSize === "xs" && "bg-button1 text-white"
              }`}
            >
              xs
            </button>

            <button
              onClick={() => setChoosenSize("s")}
              className={`px-2 py-1 rounded-md border-[1px] text-black border-black  ${
                choosenSize === "s" && "bg-button1 text-white"
              }`}
            >
              S
            </button>

            <button
              onClick={() => setChoosenSize("m")}
              className={`px-2 py-1 rounded-md border-[1px] text-black border-black  ${
                choosenSize === "m" && "bg-button1 text-white"
              }`}
            >
              M
            </button>

            <button
              onClick={() => setChoosenSize("l")}
              className={`px-2 py-1 rounded-md border-[1px] text-black border-black  ${
                choosenSize === "l" && "bg-button1 text-white"
              }`}
            >
              L
            </button>

            <button
              onClick={() => setChoosenSize("xl")}
              className={`px-2 py-1 rounded-md border-[1px] text-black border-black  ${
                choosenSize === "xl" && "bg-button1 text-white"
              }`}
            >
              XL
            </button>
          </div>
        </div>

        <div className="w-full flex justify-between items-center">
          <div className="flex">
            <button
              onClick={() =>
                setProductCounter((curr) =>
                  curr !== 0 ? (curr = curr - 1) : curr
                )
              }
              className="border-[1px] px-2 py-1 border-black text-xl lg:text-2xl font-[900]"
            >
              -
            </button>

            <span className="border-[1px] border-black text-xl lg:text-2xl py-1 px-4 font-bold">
              {productCounter}
            </span>

            <button
              onClick={() => setProductCounter((curr) => (curr = curr + 1))}
              className="border-[1px] px-2 py-1 border-black text-xl lg:text-2xl text-white bg-button1"
            >
              +
            </button>
          </div>

          <Link
            to={"/checkout"}
            className="text-base md:text-xl 2xl:text-2xl text-white bg-button1 hover:bg-hoverButton1 duration-300 py-2 px-6 tracking-[.5px]"
          >
            Buy Now
          </Link>

          <button className="p-3 border-[1px] border-black">
            <FavoriteBorderIcon className="w-4 h-4" />
          </button>
        </div>

        <div className="w-full flex items-center justify-center gap-4 lg:gap-8 px-2 py-3 border-[1px] border-black">
          <img
            src="/deliveryIcon.png"
            alt="bdelivery Icon"
            className="w-6 h-6 lg:w-8 lg:h-8 bg-black"
          />
          <div className="flex flex-col items-start">
            <span className="text-base lg:text-xl tracking-[.5px] text-black font-bold">
              Free Delivery
            </span>
            <p className="text-xs lg:text-base font-[300] tracking-[.5px]">
              Free 30 Days Delivery Returns. Details
            </p>
          </div>
        </div>

        <div className="w-full flex items-center justify-center gap-4 lg:gap-8 px-2 py-3 border-[1px] border-black">
          <img
            src="/returnIcon.png"
            alt="bdelivery Icon"
            className="w-6 h-6 lg:w-8 lg:h-8"
          />
          <div className="flex flex-col items-start">
            <span className="text-base lg:text-xl tracking-[.5px] text-black font-bold">
              return Delivery
            </span>
            <p className="text-xs lg:text-base font-[300] tracking-[.5px]">
              Free 30 Days Delivery Returns. Details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailComponent;
