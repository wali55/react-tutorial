import React, { useEffect, useState } from "react";
import Logo from "../youtube_logo.png";
import useOnline from "../utils/useOnline";
import {Link} from "react-router-dom";

export const Title = () => {
  return (
    <a href="/">
      <div className="logo">
        <img alt="logo" src={Logo} />
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
    <div className="header">
      <Title />
      <h1>{title}</h1>
      <button onClick={() => setTitle("Good Food")}>Change Title</button>
      <div className="list-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/instamart">Instamart</Link></li>
        </ul>
        {isOnline ? 'green' : 'red'}
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;
