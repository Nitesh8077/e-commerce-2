import React from "react";
import Card1 from "./Card1";

const CardContainer = () => {
  const imageUrl = "./src/assets/Components/HeroCard/bag.svg";
  const imageUrl2 = "./src/assets/Components/HeroCard/shoe1.svg";
  const imageUrl3 = "./src/assets/Components/HeroCard/shoe2.svg";

  return (
    <div className="relative mt-10 flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-8 mb-20">
      <Card1
        className1="pl-10 pt-7 pr-20 font-bold"
        className2="mt-[50%] ml-10 flex"
        className3="text-blue-400 font-bold pl-[70%] pt-2 text-lg"
        image={imageUrl}
        name="FS-QUILTED MAXI CROSS BAG"
      />
      <Card1
        className1="pl-10 pt-7 pr-20 font-bold"
        className2="mt-[60%] justify-center flex"
        className3="text-blue-400 font-bold pl-[70%] -mt-60 text-lg"
        image={imageUrl2}
        name="FS-Nike Air Max 270 React..."
      />
      <Card1
        className1="pl-10 pt-7 pr-20 font-bold"
        className2="mt-[2%] ml-10 flex"
        className3="text-blue-400 font-bold pl-[70%] mt-40 text-lg"
        image={imageUrl3}
        name="FS-Nike Air Max 270 React..."
      />
    </div>
  );
};

export default CardContainer;
