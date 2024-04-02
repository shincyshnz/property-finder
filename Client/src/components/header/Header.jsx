import React, { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import Button from "../shared/Button";
import { NAVBAR_LINKS } from "../../constants";
import DropDown from "./DropDown";
import LoginModal from "./LoginModal";

const Header = () => {
  const [showLoginDropDown, setShowLoginDropDown] = useState(false);
  const handleClickLogin = () => {
    setShowLoginDropDown(prev=> !prev);
  };
  const handleClickFavorites = () => {};

  return (
    <header>
      <div className="flex justify-between items-center md:flex-wrap xl:flex-nowrap gap-4">
        {/* Logo */}
        <div className="w-[110px] h-10 md:order-1 md:ml-2 xl:order-1">
          <img
            src="https://www.propertyfinder.com/wp-content/themes/pf/images/logo-en.svg"
            alt="property finder logo"
          />
        </div>

        {/* Navbar */}
        <div className="text-[14px] w-full pt-1 md:order-2 md:bg-global-stone-25 xl:order-1 xl:bg-transparent">
          <nav>
            <ul className="flex items-center ml-2">
              {NAVBAR_LINKS.map((link) =>
                link.text === "Explore" ? (
                  <li className="py-4 px-3" key={link.id}>
                    <DropDown />
                  </li>
                ) : (
                  <li
                    className="py-4 px-3 border-t-2 border-transparent hover:border-primary-clay-dark"
                    key={link.id}
                  >
                    <a
                      className="hover:text-primary-clay-dark"
                      href={link.link}
                    >
                      {link.text}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
        
        {/* Login and Favorite Button */}
        <div className="flex-center gap-1 md:order-1 md:p-2 xl:order-1 xl:min-w-[250px]">
          <Button
            text={
              <IoIosHeartEmpty size={"24px"} className="text-brand-sea-100" />
            }
            handleClick={handleClickFavorites}
          />
          <Button
            classname="border border-brand-sea-100 rounded-lg font-medium text-sm"
            text="Log in"
            handleClick={handleClickLogin}
          />
        </div>

        {showLoginDropDown && <LoginModal setShowLoginDropDown={setShowLoginDropDown} />}
      </div>
    </header>
  );
};

export default Header;
