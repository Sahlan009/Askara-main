import React from "react";
import Budaya from "../../Assets/Budaya.png";
import Mountain from "../../Assets/Mountain.png";
import Beach from "../../Assets/Beach.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-24 mx-auto mt-[-3rem] bg-white"
            src={Mountain}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Mountain</h2>
          <p className="py-2 text-center font-bold mx-8 mt-8">Start From</p>
          <p className="text-center text-4xl font-bold">$250</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Hotels</p>
            <p className="py-2 border-b mx-8">Eat</p>
            <p className="py-2 border-b mx-8">Documentation</p>
          </div>
          <button className="bg-[#2FA4FF] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Get
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-24 mx-auto mt-[-3rem] bg-transparent"
            src={Budaya}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Culture</h2>
          <p className="py-2 text-center font-bold mx-8 mt-8">Start From</p>
          <p className="text-center text-4xl font-bold">$250</p>
          <div className="text-center font-medium">
          <p className="py-2 border-b mx-8 mt-8">Hotels</p>
            <p className="py-2 border-b mx-8">Eat</p>
            <p className="py-2 border-b mx-8">Documentation</p>
          </div>
          <button className="bg-black text-[#2FA4FF] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Get
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-24 mx-auto mt-[-3rem] bg-white"
            src={Beach}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Beach</h2>
          <p className="py-2 text-center font-bold mx-8 mt-8">Start From</p>
          <p className="text-center text-4xl font-bold">$250</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Hotels</p>
            <p className="py-2 border-b mx-8">Eat</p>
            <p className="py-2 border-b mx-8">Documentation</p>
          </div>
          <button className="bg-[#2FA4FF] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Get
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
