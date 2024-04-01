import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex p-3">
        <div className="w-[110px] h-10">
          <img
            src="https://www.propertyfinder.com/wp-content/themes/pf/images/logo-en.svg"
            alt="property finder logo"
          />
        </div>
        <div className="login">
        </div>
      </div>
    </header>
  );
};

export default Header;
