import React, { useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Input from "../shared/Input";
import Button from "../shared/Button";

const LoginPassword = ({ email }) => {
  return (
    <>
      <div className="self-start text-color-blue flex items-center gap-2 ml-3 p-2">
        <FaArrowLeftLong />
        <span>Back</span>
      </div>
      <div className="text-center p-3 mx-3">
        <p>
          Create an account to explore special features only for members
        </p>
      </div>

      <div
        className={`p-4 w-[90%] border border-1 border-global-grey2 rounded-md focus:outline-none bg-gray-100`}
      >
        <span className="text-gray-500">{email}</span>
      </div>
      <Input
        type="password"
        placeholder="Password"
        className={`p-3 w-[90%] border border-1 border-global-grey2 rounded-md focus:outline-none`}
      />
      <Button
        text="Create Account"
        classname={`bg-red-600 py-3 mt-8 text-white rounded-md w-[90%]`}
      ></Button>
      </>
  );
};

export default LoginPassword;
