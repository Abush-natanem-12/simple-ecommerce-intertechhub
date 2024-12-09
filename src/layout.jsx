// NOTE: THIS COMPONENT KEEPS ALL THE COMPONENTS THAT APPEAR IN ALL PAGES LIKE HEADER FOOTER AND SO ON

import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import PriceOff from "./components/price-off";

const Layout = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <PriceOff />
      <Header />
      <main className="w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
