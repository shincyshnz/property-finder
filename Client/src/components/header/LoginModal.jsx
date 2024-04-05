import { IoCloseOutline } from "react-icons/io5";
import LoginEmail from "./LoginEmail";
import { useState } from "react";
import { useAuth, useError } from "../../customHooks/hooks";
import LoginPassword from "./LoginPassword";
import WithContainer from "../shared/HOC/Container";
import axios from "axios";

const LoginModal = ({ ...props }) => {
  const { setShowLoginModal } = props;
  const [formData, setFormData] = useState({});
  const [showLoginPassword, setLoginPassword] = useState(false);
  const { deleteError, handleError } = useError();
  const { handleUserData } = useAuth();

  const handleClose = () => {
    deleteError("email");
    setFormData({});
    setShowLoginModal("");
  };

  const handleContinue = (event) => {
    event.preventDefault();
    setLoginPassword((prev) => !prev);
  };

  const Login = async(formdata)=>{
     ///// Login
     const response = await axios(`${import.meta.env.VITE_AUTH_URL}/login`, {
      method: "POST",
      withCredentials: true,
      data: formData,
    });

    // Store Access Token in localstorage and set userdata in Auth context
    if (response?.status === 200) {
      localStorage.setItem("accessToken", response.data.token);
      handleUserData(response.data.userData);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send Login credentials to DB
    try {
      if (setShowLoginModal === "login") {
        Login(formData);
      } else {
        ///// Register
        const response = await axios(`${import.meta.env.VITE_AUTH_URL}/register`, {
          method: "POST",
          data: formData,
        });

        // 
        if (response?.status === 200) {
          Login(formData);
        }
      }

      // close Login modal
      handleClose();
    } catch (error) {
      handleError("password", error.response.data.message || error.message);
    }
  };

  return (
    <div className="bg-white max-w-[960px] rounded-md">
      {/* Header */}
      <div className="flex justify-between items-center p-3">
        {/* Header */}
        <h1 className="font-medium">Welcome to Property Finder</h1>
        <IoCloseOutline
          className="cursor-pointer"
          size={"20px"}
          onClick={handleClose}
        />
      </div>

      <hr />

      {/* Body */}
      <div className="flex justify-center items-stretch content-center bg-global-grey1 bg-opacity-10">
        {/* Left Side */}
        <div className="flex-1">
          <div className="flex-col flex-center my-auto h-full">
            <img
              className="w-40"
              src="https://www.propertyfinder.ae/static/icons/account-benefits.svg"
              alt="property finder svg"
            />
            <div className="text-content flex-col flex-center my-5">
              <h1>View Saved Properties</h1>
              <h1>Keep search history across devices</h1>
              <h1>See which properties you have contacted</h1>
            </div>
          </div>
          <div className="flex-1"></div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex-center flex-col gap-2 py-7 bg-white">
          <form
            className="flex-1 flex-center flex-col gap-4"
            onSubmit={handleSubmit}
          >
            {!showLoginPassword ? (
              <LoginEmail
                formData={formData}
                setFormData={setFormData}
                handleContinue={handleContinue}
              />
            ) : (
              <LoginPassword formData={formData} setFormData={setFormData} />
            )}
          </form>
          {/* Footer */}
          <div className="flex-center px-5">
            <p className="text-[12px] text-center text-gray-500 my-5">
              By registering you accept our{" "}
              <span className="text-color-blue">Terms & Conditions</span> and{" "}
              <span className="text-color-blue">our privacy policy.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithContainer(LoginModal);
