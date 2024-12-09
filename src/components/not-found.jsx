const NotFound = () => {
  return (
    <div className="w-[95%] md:w-[90%] xl:w-[85%] 2xl:w-[80%] mx-auto flex flex-col gap-6 justify-center items-center">
      <h2 className="text-2xl md:text-5xl lg:text-7xl 2xl:text-8xl">
        404 Page Not Found
      </h2>

      <p className="text-base md:text-xl 2xl:text-2xl">
        Your Visited page Not Found You may Go home page
      </p>

      <button className="text-base md:text-xl 2xl:text-2xl text-white bg-button1 hover:bg-hoverButton1 duration-300">
        Go to Home Page
      </button>
    </div>
  );
};

export default NotFound;
