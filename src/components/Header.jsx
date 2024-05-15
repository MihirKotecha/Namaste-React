import UserContext from "../utils/UserContext";
import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  
  const user = useContext(UserContext);

  return (
    <div className="flex justify-between bg-white shadow-xl mb-2">
      <div className="logo-container">
        <Link to="/" className="w-16 h-16"><img className="w-16 h-16 p-2" src={LOGO_URL} /></Link>
      </div>
      <div className="flex items-center">
        <ul className="flex px-2 m-4">
          <li className="px-2"><Link to="/">Home</Link></li>
          <li className="px-2"><Link to="/about">About Us</Link></li>
          <li className="px-2"><Link to="/contact">Contact Us</Link></li>
          <li className="px-2">Cart</li>
          <li className="px-2"><Link to="/login">Login</Link></li>
          <li className="px-2 font-bold">{user.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
