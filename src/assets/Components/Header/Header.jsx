import React from "react";
import { Link } from "react-router-dom";

const navigations = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "ContactUs",
    path: "/about",
  },
];

function Header() {
  return (
    <header className="text-black body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <img src="./src/assets/Components/Footer/logo.svg" alt="Logo" />
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center md:justify-end">
          {navigations.map((navigation, index) => (
            <Link
              key={index}
              to={navigation.path}
              className="font-bold font-5xl ml-12 mr-5 hover:text-gray-600"
            >
              {navigation.name}
            </Link>
          ))}
        </nav>
        <Link
          to={"/cart"}
          className="inline-flex items-center bg-blue-400 font-bold border-0 py-2 px-4 text-white focus:outline-none hover:bg-white hover:text-black rounded text-base mt-4 md:mt-0 md:ml-6"
        >
          Go To Cart
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </header>
  );
}

export default Header;
