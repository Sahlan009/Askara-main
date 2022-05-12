import React from "react";
import TypeAnimation from "react-type-animation";

export default function Hero() {
  return (
   
      <div className="text-[#2FA4FF] max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="font-bold text-2xl pt-10 text-white">ASKARA OUTDOOR</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Your Partner Adventure.
        </h1>
        <div>
          <p className="flex justify-center md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Enjoy your adventure to
            <TypeAnimation
              className="pl-2 md:text-5xl sm:text-4xl text-xl font-bold text-[#99FEFF]"
              cursor={false}
              sequence={["Mountain", 2000, "Curture", 2000, "Beach", 2000]}
              repeat={Infinity}
            />
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold pt-4">Enjoy your adventure to everywhere with us.</p>
      <button className="bg-[#99FEFF] w-[200px] rounded-full font-medium my-4 py-4 mx-auto">Get Started</button>
      </div>
  );
}
