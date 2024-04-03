import React from "react";

const Hero = () => {
  return (
        <div className="w-screen max-h-[53vh] overflow-y-clip">
          <video autoPlay muted controls="" loop className="object-fill w-full h-full max-h-[80vh] -z-10">
        <source
          src="https://www.propertyfinder.ae/static/videos/home-ae.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
        </div>
  );
};

export default Hero;
