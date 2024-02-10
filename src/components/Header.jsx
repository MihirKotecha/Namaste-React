import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [login, setLogin] = useState("Log In");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="links">
        <ul className="links-list">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
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
