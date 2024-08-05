import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import CartContext from "./utils/CartContext";
import { Provider } from "react-redux";
import store from "./utils/store";

export default function App() {
  const [user, setUser] = useState({
    name: "wali",
    email: "wali@gmail.com",
  });
  const [cart, setCart] = useState({
    quantity: 5,
    price: 500,
  });
  return (
    <Provider store={store}>
      <CartContext.Provider value={{ cart: cart }}>
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </CartContext.Provider>
    </Provider>
  );
}
