import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Left side */}
      <img src="https://media.istockphoto.com/id/1344585125/photo/unshaved-funny-man-with-moustache-and-beard-holding-arms-in-the-air.jpg?s=612x612&w=0&k=20&c=Gfs3UiyjeP5GZUL-E5xC1mK0KakoprM6_SVJdwvl3-k=" alt="model photo" className="w-full sm:w-1/2" />
      {/* Right side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-0.5 bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-0.5 bg-[#414141]"></p>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default Hero;
