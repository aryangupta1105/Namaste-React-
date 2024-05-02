import { LOGO_URL } from "../utils/Constants";
import { useState } from "react";

const Header = () => {
  const btnName = "Log In";
  const [buttonName , setBtnName] = useState(btnName);

    return (
      <div className="header">
        <div className="logo-container">
          <img
            src={LOGO_URL}
            alt="App Logo"
            className="logo"
          />
        </div>
        <div className="nav-items">
          <ul className="item-container">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>🛒Cart</li>
            <button className="login-btn" onClick={() =>{
              // We call this setBtnName to re-render the UI
              setBtnName("Log Out");
            }}>{buttonName}</button>
          </ul>
        </div>
      </div>
    );
  };


export default Header;