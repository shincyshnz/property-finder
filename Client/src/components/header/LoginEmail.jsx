import React, { useEffect, useState } from "react";
import Button from "../shared/Button";
import Input from "../shared/Input";
import { useError } from "../../customHooks/hooks";
import ErrorMessage from "../shared/ErrorMessage";

const LoginEmail = ({ setFormData, formData, handleContinue }) => {
  const { customError, handleError, deleteError } = useError();
  const [isActive, setIsActive] = useState(false);

  const validateEmail = (inputEmail) => {
    // Basic email validation using a regular expression
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(inputEmail);
  };

  const handleChangeEmail = (event) => {
    deleteError("email");
    setIsActive(false);
    const { value: email } = event.target;
    if (!email) return;

    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      handleError("email", "Please enter a valid email");
    } else {
      setFormData(prev => ({
        ...prev,
        email,
        }));
      setIsActive(true);
    }
  };

  return (
    <>
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
      <div className="w-full flex-center flex-col">
        <Input
          type="email"
          placeholder="Email"
          className={` p-3 w-[90%] border border-1 border-global-grey2 rounded-md focus:outline-none`}
          onChange={handleChangeEmail}
        />
        {customError?.email && <ErrorMessage errorMsg={customError.email} />}
        <Button
          text="Continue"
          classname={`${
            isActive
              ? "bg-red-600 bg-opacity-80 text-white"
              : "bg-gray-300 bg-opacity-80 text-gray-500"
          } py-3 mt-8 font-medium rounded-md w-[90%]`}
          onClick={handleContinue}
          disabled={!isActive}
        ></Button>
      </div>
    </>
  );
};

export default LoginEmail;
