import React from "react";

const Card1 = (props) => {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${props.image})`,

        width: "300px", // Set the desired width
        height: "300px", // Set the desired height
      }}
    >
      <div className={props.className1}>{props.name}</div>
      <div className={props.className2}>
        <div className="line-through text-gray-500">$534.33</div>
        <div className="ml-3 font-bold text-red-500">24% off</div>
      </div>
      <div className={props.className3}>$299.43</div>
    </div>
  );
};

export default Card1;
