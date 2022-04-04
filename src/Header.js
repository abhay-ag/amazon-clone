import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://jitsvinger.co.za/wp-content/uploads/2018/04/Amazon-Logo-1024x373.png"
        alt="Amazon Logo"
      />

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        {/* Logo */}
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
