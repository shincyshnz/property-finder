import React, { useState } from "react";
import WithDropDown from "../shared/HOC/DropDownContainer";
import Button from "../shared/Button";
import LoginModal from "./LoginModal";

const LoginDropDown = ({ ...props }) => {
  const [show, setShow] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleClick = () => {
    setShow((prev) => !prev);
    setShowLoginModal((prev) => !prev);
  };

  const handleMouseEnter = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <Button
        classname="border border-brand-sea-100 rounded-lg font-medium text-sm"
        text="Log in"
        handleClick={handleClick}
        onMouseEnter={handleMouseEnter}
      />

      {show && (
        <div className="drop-down-box text-md">
          <div className="flex-center flex-col gap-3 p-4 max-w-[250px] text-center font-bold">
            <p className="text-xs font-light leading-normal">
              Sign in or register to sync your favorite properties across
              devices
            </p>
            <Button
              text="Sign in"
              classname="bg-red-600 p-3 my-1 text-white rounded-md w-full"
              handleClick={handleClick}
            />
            <a className="text-color-blue hover:underline" href="#">
              Create New Account
            </a>
          </div>

          <div className="divide-y divide-y-gray-100 w-full flex-col ml-2 text-[14px] gap-2 font-light">
              <div className="w-full p-3">
              <a href="#">Contacted Properties (0)</a>
              <span> &gt; </span>
              </div>
            
              <div className="w-full p-3">
              <a href="#">Saved Properties (0)</a>
              <span> &gt; </span>
            </div>
           
              <div className="w-full p-3">
              <a href="#">Saved Searches (0)</a>
              <span> &gt; </span>
            </div>
          </div>
        </div>
      )}

      {showLoginModal && <LoginModal setShowLoginModal={setShowLoginModal} />}
    </>
  );
};

export default WithDropDown(LoginDropDown);
