import React from "react";
import FooterShoe from "./FooterShoe";
import Footer2 from "./Footer2";
import Search from "./Search";
import Footer3 from "./Footer3";

const Footer = () => {
  return (
    <div>
      <FooterShoe />
      <Footer2 />
      <div className="mt-10">
        <Search />
      </div>
      <Footer3 />
    </div>
  );
};

export default Footer;
