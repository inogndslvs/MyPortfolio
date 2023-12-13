// eslint-disable-next-line no-unused-vars
import React from "react";

import profileImg from "../../../assets/profile.png";

const Welcome = () => {
  return (
    <div className="grid grid-cols-3 max-h-fit  px-5 pt-5 max-sm:grid-cols-1">
      <div className="col-span-2 text-black text-8xl font-extrabold p-5 py-20 bg-white grow justify-center w-full rounded-3xl items-center max-md:max-w-full max-md:text-4xl max-md:leading-10 max-md:mt-5 max-md:pr-5 max-md:py-10 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        Welcome
        <br />
        to my <br />
        profile
      </div>
      <div className=" relative flex flex-col items-stretch max-w-full ml-5 rounded-3xl max-md:w-full max-md:ml-0 overflow-hidden">
        <img
          loading="lazy"
          srcSet={profileImg}
          alt="Profile"
          className="w-full h-[320px] grow rounded-3xl max-md:max-w-full max-md:mt-5 transition-all duration-300 hover:scale-105"
        />
        <div className="absolute top-[400px] left-3 right-0 bottom-0 max-sm:top-[300px]">
          <h2 className="font-sans text-3xl font-extrabold text-white">Inosenius G. Atok</h2>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
