import React, { useState } from "react";
import Button from "../shared/Button";
import LoginModal from "./LoginModal";
import WithContainer from "../shared/HOC/Container";
import { useAuth } from "../../customHooks/hooks";
import Avatar from "../shared/Avatar";

const LoginDropDown = ({ ...props }) => {
  const [show, setShow] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState("");
  const { userData, deleteUserData } = useAuth();

  const handleClick = (type) => {
    setShow((prev) => !prev);
    setShowLoginModal(type);
  };

  const handleMouseEnter = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <Button
        classname={
          userData
            ? ""
            : "border border-brand-sea-100 rounded-lg font-medium text-sm"
        }
        text={userData ? <Avatar userData={userData} /> : "Log in"}
        handleClick={handleClick}
        onMouseEnter={handleMouseEnter}
      />

      {show && (
        <div
          className="absolute drop-down-box right-1 text-md"
          onMouseLeave={() => setShow((prev) => !prev)}
        >
          {!userData ? (
            <div className="flex-center flex-col gap-3 p-4 max-w-[250px] text-center font-bold">
              <p className="text-xs font-light leading-normal">
                Sign in or register to sync your favorite properties across
                devices
              </p>
              <Button
                text="Sign in"
                classname="bg-red-600 p-3 my-1 text-white rounded-md w-full"
                handleClick={(e, type)=>handleClick("login")}
              />
              <Button
                text="Create New Account"
                classname="text-color-blue hover:underline"
                handleClick={(e, type) => handleClick("create")}
              />
            </div>
          ) : (
            <div className="flex-col flex-center">
              <Avatar userData={userData} />
              <p className="mt-2">{userData.firstName}</p>
              <div className="w-full text-center mb-4 font-light">
                <Button text="Logout" onClick={() => deleteUserData()} />
              </div>
            </div>
          )}

          <div className="divide-y divide-y-gray-100 w-full flex-col text-[14px] gap-2 font-light">
            <div className="w-full py-3 px-4">
              <a href="#">Contacted Properties (0)</a>
              <span> &gt; </span>
            </div>

            <div className="w-full py-3 px-4">
              <a href="#">Saved Properties (0)</a>
              <span> &gt; </span>
            </div>

            <div className="w-full py-3 px-4">
              <a href="#">Saved Searches (0)</a>
              <span> &gt; </span>
            </div>
          </div>
        </div>
      )}

      {showLoginModal && (
        <LoginModal
          ContainerClassName="fixed w-full py-5 flex-center bg-opacity-60 max-h-screen px-10 md:px-0 bg-slate-900 inset-0 z-40 overflow-hidden"
          setShowLoginModal={setShowLoginModal}
          type={showLoginModal}
        />
      )}
    </>
  );
};

export default WithContainer(LoginDropDown);
