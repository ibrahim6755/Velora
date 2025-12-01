import React from "react";

const Hero = () => {
  return (
    <div className="bg-[url('/images/hero.jpg')] bg-cover bg-center mx-auto h-[500px] relative flex items-center justify-center">
        <div className="bg-black/60 absolute inset-0 "/>
      {/* TEXT */}
      <div className="md:w-1/3 w-full p-4 md:p-0 text-center relative z-10">
        <h1 className="text-5xl font-bold text-white">
          Timeless Fashion for the Modern Wardrobe
        </h1>
        <h3 className="text-sm text-center my-6 text-white">
          Discover timeless fashion for Men, Women, and Kids crafted for
          comfort, designed for confidence.
        </h3>
        <button className="uppercase bg-custom-red p-3 px-5 text-xs font-bold cursor-pointer rounded-3xl">
          Explore the collection
        </button>
      </div>
    </div>
  );
};

export default Hero;
