import { IoCloseOutline } from "react-icons/io5";
import Button from "../shared/Button";
import WithModal from "../shared/HOC/modalContainer";

const LoginModal = ({ ...props }) => {
  const { setShowLoginModal } = props;

  const handleClose = () => {
    setShowLoginModal(false);
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
            <span className=""><hr className="border border-gray-300 w-[150px]"/></span>
            <span className="">OR</span>
            <span className=""><hr className="border border-gray-300 w-[150px]"/></span>
          </div>

          {/* email */}
          <form className="w-full flex-center flex-col">
            <input
              type="email"
              placeholder="Email"
              className="p-3 w-[90%] border border-1 border-global-grey2 rounded-md"
            />
            <Button
              text="Continue"
              classname="bg-gray-500 bg-opacity-80 text-white py-3 mt-8 font-medium rounded-md w-[90%]"
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
      </div>
    </div>
  );
};

export default WithModal(LoginModal);
