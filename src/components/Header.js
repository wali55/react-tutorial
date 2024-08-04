import React, { useEffect, useState, useContext } from "react";
import Logo from "../youtube_logo.png";
import useOnline from "../utils/useOnline";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


export const Title = () => {
  return (
    <a href="/">
      <div className="sm:max-w-[50px] max-w-full mb-4 sm:mb-0">
        <img alt="logo" src={Logo} className="rounded-full" />
      </div>
    </a>
  );
};

const Header = () => {
  const [title, setTitle] = useState("Food Villa");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {user} = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  // const isOnline = useOnline();

  // useEffect(() => {

  //   const timer = setInterval(() => {
  //     console.log('react op');
  //   }, 1000)

  //   return () => {
  //     clearInterval(timer);
  //   }
  // }, [])

  return (
    <div className="sm:flex sm:justify-between block items-center bg-slate-200 p-5 shadow-lg md:bg-blue-50 sm:bg-yellow-50">
      <Title />
      <div className="flex">
        <ul className="flex">
          <li className="px-4 hover:bg-slate-300 rounded-full text-center">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:bg-slate-300 rounded-full">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 hover:bg-slate-300 rounded-full">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 hover:bg-slate-300 rounded-full">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-4 hover:bg-slate-300 rounded-full">
            <Link to="/cart">Cart {cartItems.length} Items</Link>
          </li>
        </ul>
        <p>{user.name}</p>
        {isLoggedIn ? (
          <button
            onClick={() => setIsLoggedIn(false)}
            className="px-4 hover:bg-slate-300 rounded-full"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => setIsLoggedIn(true)}
            className="px-4 hover:bg-slate-300 rounded-full"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
