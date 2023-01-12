import React from "react";
import logo from "../assets/images/logo.webp";

const Navbar = () => {
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
          25
        </p>
        <p className="py-2 rounded text-white  font-semibold w-[4em] flex items-center justify-center bg-[#ff0000]">
          25
        </p>
      </div>
    </div>
  );
};

export default Navbar;
