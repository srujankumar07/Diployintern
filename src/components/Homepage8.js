import React from "react";
import { Image3, Image4 } from "../assets";


export default function Homepage8() {
  return (
    <div className="bg-[#1f2937] text-white p-6 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Card */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <div className="bg-[#111827] p-8 rounded-lg shadow-lg">
          {/* Heading and Subheading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Make Money, <br /> Risk-Free
          </h1>
          <p className="text-lg mb-6">
            You pay for fulfillment only when you make a sale
          </p>

          {/* Pricing Card */}
          <div className="bg-[#1f2937] p-6 rounded-lg mb-6">
            <div className="flex justify-between mb-2">
              <span>You sell a t-shirt</span>
              <span>$ 30</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>You pay for its production</span>
              <span>$ 12</span>
            </div>
            <div className="flex justify-between font-bold text-[#22c55e]">
              <span>Your profit</span>
              <span>$ 18</span>
            </div>
          </div>

          {/* Start Selling Button */}
          <button className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-2 px-4 rounded w-full">
            Start Selling
          </button>

          {/* Footer Text */}
          <p className="text-sm mt-4 text-gray-400 text-center">
            100% Free to use · 900+ Products · Largest print network
          </p>
        </div>
      </div>

      {/* Right Card - Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className=" p-8 rounded-lg shadow-lg">
          <img
            src={Image4}
            alt="Person watering money plant"
            className="max-w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
