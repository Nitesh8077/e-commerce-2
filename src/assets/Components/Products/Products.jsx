import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products({ products = [] }) {
  const [data, setData] = useState(products);

  const filterItem = (cat) => {
    if (cat === "category") {
      setData(products);
    } else {
      const updatedList = products.filter((item) => {
        return item.category === cat;
      });
      setData(updatedList);
    }
  };

  const sortItems = (cart) => {
    if (cart === 100) {
      const updatedL = products.filter((item) => {
        console.log(item.price);
        return item.price <= cart;
      });
      setData(updatedL);
    } else if (cart === 101) {
      const updatedL = products.filter((item) => {
        console.log(item.price);
        return item.price > cart;
      });
      setData(updatedL);
    }
  };

  /*const [data, setData] = useState(products);
  
    const filterItem = (cat) => {
      if (cat === 'category') {
        // If 'All' is clicked, reset to the original data
        setData(products);
      } else {
        // Filter the data based on the category
        const updatedList = products.filter((item) => {
          return item.category === cat;
        });
        setData(updatedList);
      }
    }; 
/*
  const [data, setData] = useState(products);
  console.log(data, 'filter')
  




  const filterItem = (cat) => {
    const updatedList = data.filter((item) =>{
      return item.category === cat;
    });
    setData(updatedList);
  }*/
  /* const sortItems = (sortType) => {
    let updatedList = [...data]; // Create a copy of the data
  
    if (sortType === 'lowToHigh') {
      updatedList.sort((a, b) => {
        // Remove the currency symbol and convert to a floating-point number
        const priceA = parseFloat(a.price.replace('$', ''));
        const priceB = parseFloat(b.price.replace('$', ''));
        return priceA - priceB;
      });
    } else if (sortType === 'highToLow') {
      updatedList.sort((a, b) => {
        // Remove the currency symbol and convert to a floating-point number
        const priceA = parseFloat(a.price.replace('$', ''));
        const priceB = parseFloat(b.price.replace('$', ''));
        return priceB - priceA;
      });
    }
  
    setData(updatedList);
  };*/

  return (
    <>
      <div className="buttons text-center py-5">
        <button
          className="btn btn-outline-dark btn-sm m-2 p-2 font-bold underline text-blue-500 hover:text-blue-400"
          onClick={() => setData(products)}
        >
          All
        </button>
        <button
          className="btn btn-outline-dark btn-sm m-2 p-2 font-bold hover:text-blue-400"
          onClick={() => filterItem("men's clothing")}
        >
          Men's Clothing
        </button>
        <button
          className="btn btn-outline-dark btn-sm m-2 p-2 font-bold hover:text-blue-400"
          onClick={() => filterItem("women's clothing")}
        >
          Women's Clothing
        </button>
        <button
          className="btn btn-outline-dark btn-sm m-2 font-bold hover:text-blue-400"
          onClick={() => filterItem("jewelery")}
        >
          Jewelery
        </button>
        <button
          className="btn btn-outline-dark btn-sm m-2 font-bold hover:text-blue-400"
          onClick={() => filterItem("electronics")}
        >
          Electronics
        </button>
      </div>

      <div>
        <div className="flex flex-wrap">
          {data.map((product) => {
            console.log(product, "product");
            const { id, title, price, description, category, image } = product;
            return (
              <Link
                to={`/products/${id}`}
                className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer mb-4 "
              >
                <div className="flex flex-col items-center justify-center">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt={title}
                      className="object-contain object-center w-full h-full block"
                      src={image}
                    />
                  </a>
                  <div className="mt-4 text-center">
                    {" "}
                    {/* Adjusted to center align text */}
                    {/* Star print */}
                    <h2 className="text-gray-900 title-font text-lg font-medium max-h-10">
                      {title.split(" ").slice(0, 4).join(" ")}
                    </h2>
                    <div className="flex mt-2 space-x-1 justify-center">
                      {" "}
                      {/* Removed 'r' from 'space-x-1r' */}
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < 4 ? "text-yellow-300" : "text-gray-300"
                          }`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      ))}
                    </div>
                    <div className="flex mt-2 justify-center">
                      <p className="font-bold text-blue-400">${price}</p>
                      <p className="line-through text-gray-400">534.33</p>

                      <p className="text-red-500 font-bold">24% OFF</p>
                    </div>
                    <button
                      className="ml-auto mt-2 text-white bg-black border-0 py-1 px-1 focus:outline-none hover:bg-white hover:text-black rounded hidden"
                      onClick={() => handleCart(product)}
                    ></button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
