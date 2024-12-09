import { useEffect, useState } from "react";
import Hero from "../components/hero";
import { getAllProducts } from "../hooks/requests";
import NewArrival from "../components/new-arrival";
import TodaysProducts from "../components/todays-products";
import Categories from "../components/categories";
import AllProducts from "../components/all-products";
import Strength from "../components/strength";
import CategoryProducts from "../components/category-products";
import EnhancedMusic from "../components/enhance-music";

const Home = function () {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products when the component mounts
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full flex flex-col">
      <Hero />
      {/* {products.map(function (el, index) {
        return (
          <div key={index}>
            <h2>{el.name}</h2>
            <p>{el.price}</p>
            <img src={el.image} className="w-[10%]" />
          </div>
        );
      })} */}

      <TodaysProducts />
      <Categories />
      <CategoryProducts />
      <EnhancedMusic />
      <AllProducts />

      <NewArrival />

      <Strength />
    </div>
  );
};

export default Home;
