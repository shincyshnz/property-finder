import React from "react";

const Hero = () => {
  return (
        <div className="w-screen max-h-[85vh] overflow-y-clip">
          <video autoPlay muted controls="" loop className="object-cover w-full h-full max-h-[80vh] -z-10">
        <source
          src="https://static-assets.propertyfinder.com/videos/home-ae.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
        </div>
  );
};

export default Hero;
