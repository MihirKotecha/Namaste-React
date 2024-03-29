import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState("Log In");

  return (
    <div className="flex justify-between bg-slate-200 shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-16 h-16 p-2" src={LOGO_URL} />
      </div>
      <div className="flec items-center">
        <ul className="flex px-2 m-4">
          <li className="px-2"><Link to="/">Home</Link></li>
          <li className="px-2"><Link to="/about">About Us</Link></li>
          <li className="px-2"><Link to="/contact">Contact Us</Link></li>
          <li className="px-2">Cart</li>
          <button
            className="px-2"
            onClick={() => {
              login === "Log In" ? setLogin("Log Out") : setLogin("Log In");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
