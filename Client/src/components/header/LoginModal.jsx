import { IoCloseOutline } from "react-icons/io5";
import WithModal from "../shared/HOC/modalContainer";
import LoginEmail from "./LoginEmail";
import { useState } from "react";
import { useError } from "../../customHooks/hooks";
import LoginPassword from "./LoginPassword";

const LoginModal = ({ ...props }) => {
  const { setShowLoginModal } = props;
  const [email, setEmail] = useState("");
  const [showLoginPassword, setLoginPassword] = useState(false);
  const { deleteError } = useError();

  const handleClose = () => {
    deleteError("email");
    setEmail("");
    setShowLoginModal(false);
  };

  const handleContinue = (event) => {
    event.preventDefault();
    setLoginPassword((prev) => !prev);
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
      <div className="flex-center items-stretch bg-global-grey1 bg-opacity-10">
        {/* Left Side */}
        <div className="flex-1">
          <div className="flex-col flex-center">
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
          <form className="flex-1 flex-center flex-col gap-4">
          {!showLoginPassword ? (
            <LoginEmail setEmail={setEmail} handleContinue={handleContinue} />
          ) : (
            <LoginPassword email={email} />
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

export default WithModal(LoginModal);
