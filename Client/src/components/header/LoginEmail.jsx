import React, { useEffect, useState } from "react";
import Button from "../shared/Button";
import Input from "../shared/Input";
import { useError } from "../../customHooks/hooks";
import ErrorMessage from "../shared/ErrorMessage";

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const LoginEmail = ({ setEmail, handleContinue }) => {
  const { customError, handleError, deleteError } = useError();
  const [isActive, setIsActive] = useState(false);

  const handleChangeEmail = (event) => {
    deleteError('email');
    const { value: email } = event.target;
    if(!email) return;

    const isValidEmail = EMAIL_REGEX.test(email);
    if (isValidEmail) {
      setEmail(prev=>prev  = email);
      setIsActive(prev=> !prev);
    }else{
      handleError("email", "Please enter a valid email");
    }
  };

  return (
    <div className="flex-1 flex-center flex-col gap-2 py-7 bg-white">
      <Button
        text="Continue with Google"
        classname="bg-blue-500 text-white font-medium rounded-md w-[90%]"
        icons={
          <img
            src="https://freesvg.org/img/1534129544.png"
            alt="login with google"
            className="w-8 h-8 rounded-full bg-white p-1"
          />
        }
      ></Button>
      <Button
        text="Continue with Google"
        classname="bg-blue-800 bg-opacity-80 text-white font-medium rounded-md w-[90%]"
        icons={
          <img
            src="https://www.svgrepo.com/download/183607/facebook.svg"
            alt="login with google"
            className="w-8 h-8 rounded-full bg-white p-1"
          />
        }
      ></Button>

      {/* --- OR --- */}
      <div className="flex-center text-gray-500 my-3 w-full gap-2">
        <span className="">
          <hr className="border border-gray-300 w-[150px]" />
        </span>
        <span className="">OR</span>
        <span className="">
          <hr className="border border-gray-300 w-[150px]" />
        </span>
      </div>

      {/* email */}
      <form className="w-full flex-center flex-col">
        <Input
          type="email"
          placeholder="Email"
          className={` p-3 w-[90%] border border-1 border-global-grey2 rounded-md focus:outline-none`}
          onChange={handleChangeEmail}
        />
        {customError.email && <ErrorMessage errorMsg={customError.email}/>}
        <Button
          text="Continue"
          classname={`${isActive ? 'bg-red-600 bg-opacity-80 text-white' : 'bg-gray-300 bg-opacity-80 text-gray-500' } py-3 mt-8 font-medium rounded-md w-[90%]`}
          onClick={handleContinue}
        ></Button>
      </form>

      <div className="flex-center px-5">
        <p className="text-[12px] text-center text-gray-500 my-5">
          By registering you accept our{" "}
          <span className="text-color-blue">Terms & Conditions</span> and{" "}
          <span className="text-color-blue">our privacy policy.</span>
        </p>
      </div>
    </div>
  );
};

export default LoginEmail;
