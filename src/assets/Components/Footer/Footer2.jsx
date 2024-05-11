import React from "react";
import Search from "./Search";

const Footer2 = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-16 mt-10">
        <div className="flex flex-col justify-center items-center lg:w-1/3">
          <img
            src="./src/assets/Components/Footer/shoping.svg"
            alt="Arrow"
            className="ml-1 mb-4 lg:mb-0"
          ></img>
          <div className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:w-1/3">
          <img
            src="./src/assets/Components/Footer/refund.svg"
            alt="Arrow"
            className="ml-1 mb-4 lg:mb-0"
          ></img>
          <div className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:w-1/3">
          <img
            src="./src/assets/Components/Footer/support.png"
            alt="Arrow"
            className="ml-1 mb-4 lg:mb-0"
          ></img>
          <div className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 lg:mt-10">
        <div className="font-bold text-3xl">LATEST NEWS</div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-16 mt-10 ">
        <div className="flex flex-col justify-center items-center lg:w-1/3">
          <img
            src="./src/assets/Components/Footer/nike.svg"
            alt="Arrow"
            className="ml-1 mb-4 lg:mb-0"
          ></img>
          <div className="text-center">
            <div className="font-bold text-xl">Fashion Industry</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:w-1/3">
          <img
            src="./src/assets/Components/Footer/figma.svg"
            alt="Arrow"
            className="ml-1 mb-4 lg:mb-0"
          ></img>
          <div className="text-center">
            <div className="font-bold text-xl">Best Design Tool</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:w-1/3">
          <img
            src="./src/assets/Components/Footer/kronos.svg"
            alt="Arrow"
            className="ml-1 mb-4 lg:mb-0"
          ></img>
          <div className="text-center">
            <div className="font-bold text-xl">HR Community</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="font-bold text-3xl">FEATURED PRODUCTS</div>
      </div>
    </>
  );
};

export default Footer2;
