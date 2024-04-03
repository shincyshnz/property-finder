import React, { useState } from "react";
import WithDropDown from "../shared/HOC/DropDownContainer";

const ExploreDropDown = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };
  return (
    <>
      <button
        type="button"
        className="inline-flex justify-center items-center w-full"
        onClick={handleClick}
        onMouseEnter={handleClick}
      >
        Explore
        {/* <!-- Dropdown arrow --> */}
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
        </svg>
      </button>

      {/* <!-- Dropdown menu --> */}
      {show && (
        <div
          className="drop-down-box left-0"
          onMouseLeave={() => setShow(prev=> !prev)}
        >
          <div className="py-1">
            <a
              href="#"
              className="block p-2 text-sm hover:text-brand-sand-dark hover:bg-gray-100"
            >
              Explore With Data Guru
            </a>
            <a
              href="#"
              className="block p-2 text-sm hover:text-brand-sand-dark hover:bg-gray-100"
            >
              Property Blog
            </a>
            <a
              href="#"
              className="block p-2 text-sm hover:text-brand-sand-dark hover:bg-gray-100"
            >
              Mo'asher: Dubai Price Index
            </a>
            <a
              href="#"
              className="block p-2 text-sm hover:text-brand-sand-dark hover:bg-gray-100"
            >
              Know Your Rights
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default WithDropDown(ExploreDropDown);
