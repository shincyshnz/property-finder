import React, { useRef, useState } from "react";

const DropDown = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  return (
    <>
      <div className="relative inline-block text-left">
        <div className="group">
          <button
            type="button"
            className="inline-flex justify-center items-center w-full"
            onClick={handleClick}
            onMouseEnter={handleClick}
          >
            Open Menu
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
              // className="absolute left-0 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
              className="absolute left-0 w-60 mt-4 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg transition duration-300"
              onMouseLeave={() => setShow(false)}
            >
              <div className="py-1">
                <a href="#" className="block p-2 text-sm hover:text-brand-sand-dark hover:bg-gray-100">
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
        </div>
      </div>
    </>
  );
};

export default DropDown;
