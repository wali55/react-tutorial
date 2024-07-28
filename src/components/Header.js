import React, { useEffect, useState } from "react";
import Logo from "../youtube_logo.png";
import useOnline from "../utils/useOnline";
import {Link} from "react-router-dom";

export const Title = () => {
  return (
    <a href="/">
      <div className="max-w-[50px] rounded-full">
        <img alt="logo" src={Logo} className="rounded-full" />
      </div>
    </a>
  );
};

const Header = () => {
  const [title, setTitle] = useState("Food Villa");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  useEffect(() => {
    console.log('call useEffect')
    const timer = setInterval(() => {
      console.log('react op');
    }, 1000)

    return () => {
      clearInterval(timer);
      console.log('useEffect return')
    }
  }, [])

  console.log('render');
  return (
    <div className="flex justify-between items-center bg-slate-200 p-5 shadow-lg">
      <Title />
      <div className="flex">
        <ul className="flex">
          <li className="px-4 hover:bg-slate-300 rounded-full text-center"><Link to="/">Home</Link></li>
          <li className="px-4 hover:bg-slate-300 rounded-full"><Link to="/about">About</Link></li>
          <li className="px-4 hover:bg-slate-300 rounded-full"><Link to="/contact">Contact</Link></li>
          <li className="px-4 hover:bg-slate-300 rounded-full"><Link to="/cart">Cart</Link></li>
          <li className="px-4 hover:bg-slate-300 rounded-full"><Link to="/instamart">Instamart</Link></li>
        </ul>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)} className="px-4 hover:bg-slate-300 rounded-full">Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)} className="px-4 hover:bg-slate-300 rounded-full">Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;
