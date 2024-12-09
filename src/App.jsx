// INFO: IMPORTING THIRD PARTY LIBRARIES
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

// INFO: ALL PAGE WRAPPER
import Layout from "./layout";

// INFO: IMPORTING DIFFERENT PAGES FOR ROUT
import Home from "./pages/home";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import About from "./pages/about";
import WishList from "./pages/wishlist";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Account from "./pages/account";
import Contact from "./pages/contact";

// NOTE: IMPORT STORE THE REDUX TOOLKIT
import store from "./store";
import Details from "./pages/details";

const App = function () {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index path="/" element={<Home />} />
              <Route path="login" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="/about" element={<About />} />
              <Route path="/wishlist" element={<WishList />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/account" element={<Account />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product/:id" element={<Details />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
