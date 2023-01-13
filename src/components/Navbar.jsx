import React, { useContext } from "react";
import logo from "../assets/images/logo.webp";
import { GenderContext } from "../context/GenderContext";

const Navbar = () => {
  //fetching latest number of male and female from gender context
  const { genderData } = useContext(GenderContext) || {};
  const { male, female } = genderData || {};

  return (
    <div className="w-full p-5 min-h-[10vh] flex item-center justify-between border">
      <img src={logo} className="w-fit block" alt="logo" />
      <div className="flex items-center justify-center gap-6">
        <input
          type="text"
          placeholder="&#xf002; Search"
          className="fontAwesome p-2 rounded outline-none focus:ring focus:ring-green-400"
        />
        <p className="py-2 rounded text-black bg-[#92d050] font-semibold w-[4em] flex items-center justify-center ">
          {male}
        </p>
        <p className="py-2 rounded text-white  font-semibold w-[4em] flex items-center justify-center bg-[#ff0000]">
          {female}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
