import React from "react";
import DisplayContainer from "../components/DisplayContainer";
import EventsList from "../components/EventsList";
import LeftBar from "../components/LeftBar";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

const Layout = () => {
  return (
    <div className="w-full min-h-screen bg-red-100">
      <Navbar />
      <SearchBar />
      <div className="w-full flex justify-between">
        <LeftBar />
        <DisplayContainer />
        <EventsList />
      </div>
    </div>
  );
};

export default Layout;
