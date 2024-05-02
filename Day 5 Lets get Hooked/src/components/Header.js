import { LOGO_URL } from "../utils/Constants";
<<<<<<< HEAD


const Header = () => {
=======
import { useState } from "react";

const Header = () => {
  const btnName = "Log In";
  const [buttonName , setBtnName] = useState(btnName);

>>>>>>> new
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
<<<<<<< HEAD
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
=======
          <ul className="item-container">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>🛒Cart</li>
            <button className="login-btn" onClick={() =>{
              // We call this setBtnName to re-render the UI
              buttonName === "Log In"?setBtnName("Log Out") : setBtnName("Log In");
            }}>{buttonName}</button>
>>>>>>> new
          </ul>
        </div>
      </div>
    );
  };


export default Header;