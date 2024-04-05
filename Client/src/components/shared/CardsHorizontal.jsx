import React from "react";

const CardsHorizontal = ({ ...props }) => {
    const {title, subText, linkText, link, imgUrl, bgColor} = props;

  return (
    <div className="relative flex flex-row w-full bg-clip-border rounded-xl bg-white shadow-global-grey2 shadow-lg mb-7">
      <div className={`${bgColor} relative w-2/6 m-0 overflow-hidden bg-opacity-55 rounded-r-none bg-clip-border rounded-xl shrink-0`}>
        <img
          src={imgUrl}
          alt="card-image"
          className="object-contain mx-auto my-8 lg:p-3"
        />
      </div>
      <div className="py-2 px-5">
        <h4 className="block mb-3 text-lg antialiased font-semibold tracking-wide">
        {title}
         
        </h4>
        <p className="block mb-7 font-sans text-sm sub-gray-text">
       {subText}
        </p>
        <a href={link} className="inline-block">
          <button
            className="flex items-center gap-2 py-3 underline text-center text-lg text-color-blue align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
            type="button"
          >
            {linkText}
          </button>
        </a>
      </div>
    </div>
  );
};

export default CardsHorizontal;
