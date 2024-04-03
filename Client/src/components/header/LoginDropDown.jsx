import React, { useState } from "react";
import WithDropDown from "../shared/HOC/DropDownContainer";
import Button from "../shared/Button";
import LoginModal from "./LoginModal";

const LoginDropDown = ({ ...props }) => {
  const [show, setShow] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  

  const handleClick = () => {
    setShow(false);
    setShowLoginModal(true);
  };
  
  const handleMouseEnter = () => {
    setShow(true);
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
        <div
          className="drop-down-box"
          onMouseLeave={() => setShow(false)}
        >
          <div className="flex-center flex-col gap-3 p-4">
            <p className="text-xs font-light leading-6">Sign in or register to sync your favorite properties across devices</p>
          </div>
        </div>
      )}

      {showLoginModal && <LoginModal setShowLoginModal={setShowLoginModal} /> }
    </>
  );
};

export default WithDropDown(LoginDropDown);
