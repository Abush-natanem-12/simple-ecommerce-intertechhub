import { useEffect, useState } from "react";
import { getCategories } from "../hooks/requests";
import { useDispatch } from "react-redux";
import { changeCategory } from "../features/category/categorySlice";
import { useSelector } from "react-redux";
function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const category = useSelector((state) => state.category.category);

  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(changeCategory(category));
  };

  useEffect(function () {
    const fetchCategories = async function () {
      try {
        setLoading(true);
        const fetchedCategories = await getCategories();
        setCategories(fetchedCategories);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);
  return (
    <div className="w-[95%] md:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto flex flex-col gap-8  mb-14 lg:mb-24">
      <div className="w-full flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <span className="py-4 px-2 bg-button1"></span>
          <h4 className="text-xs lg:text-base text-button1">CATEGORIES</h4>
        </div>

        <div className="w-full flex gap-10 items-end">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl tracking-[1px] font-[500]">
            Browse By Category
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
      </div>

      <div className="w-full flex flex-wrap justify-around">
        {categories.map(function (el) {
          return (
            <div
              onClick={() => handleCategoryClick(el)}
              key={el}
              className={`w-[80%] md:w-[45%] 2xl:w-[24%] flex flex-col items-center py-8 border-[1px] border-[rgba(0,0,0,.7)] cursor-pointer hover:bg-hoverButton1 duration-500 text-xl md:text-2xl 2xl:text-2xl font-bold tracking-[.5px] ${
                category === el && "bg-button1 text-white"
              }`}
            >
              {el}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
