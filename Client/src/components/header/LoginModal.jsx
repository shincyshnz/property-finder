import { IoCloseOutline } from "react-icons/io5";
import WithModal from "../shared/HOC/modalContainer";
import LoginEmail from "./LoginEmail";
import { useState } from "react";
import { useError } from "../../customHooks/hooks";

const LoginModal = ({ ...props }) => {
  const { setShowLoginModal } = props;
  const [email, setEmail] = useState('');
  const {deleteError} = useError();

  const handleClose = () => {
    deleteError('email');
    setShowLoginModal(false);
  };

  const handleContinue =(event)=>{
    event.preventDefault();

    console.log(email);
  }

 
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
      <div className="flex-center w-full bg-global-grey1 bg-opacity-10">
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
        <LoginEmail 
        setEmail={setEmail} 
        handleContinue={handleContinue}
        />
      </div>
    </div>
  );
};

export default WithModal(LoginModal);
