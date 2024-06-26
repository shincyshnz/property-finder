import React, { useEffect, useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import Button from "../shared/Button";
import { NAVBAR_LINKS } from "../../constants";
import LoginDropDown from "./LoginDropDown";
import ExploreDropDown from "./ExploreDropDown";

const Header = () => {
  const handleClickFavorites = () => {};

  return (
    <header className="mx-auto">
      <div className="flex justify-between items-center xl:p-3 md:flex-wrap md:gap-0 xl:flex-nowrap">
        {/* Logo */}
        <div className="md:order-1 xl:order-1 py-3">
          <img
          className="w-[150px] h-10 "
            src="https://www.propertyfinder.com/wp-content/themes/pf/images/logo-en.svg"
            alt="property finder logo"
          />
        </div>

        {/* Navbar */}
        <div className="text-[14px] w-full md:order-2 md:bg-global-stone-25 xl:order-1 xl:bg-transparent">
          <nav>
            <ul className="flex items-center ml-2">
              {NAVBAR_LINKS.map((link) =>
                link.text === "Explore" ? (
                  <li className="py-4 px-3" key={link.id}>
                    <ExploreDropDown ContainerClassName ='relative inline-block text-left'/>
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
        
        {/* Favorite and Login Button */}
        <div className="relative flex justify-end items-center gap-1 md:order-1 md:p-2 xl:order-1 xl:min-w-[250px]">
          <Button
            text={
              <IoIosHeartEmpty size={"24px"} className="text-brand-sea-100" />
            }
            handleClick={handleClickFavorites}
          />

          <LoginDropDown />
        </div>

      </div>
    </header>
  );
};

export default Header;
