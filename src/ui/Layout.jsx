import React, { useState } from "react";
import DisplayContainer from "../components/DisplayContainer";
import EventsList from "../components/EventsList";
import LeftBar from "../components/LeftBar";
import Navbar from "../components/Navbar";

const Layout = () => {
  const [selected, setSelected] = useState({});

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="w-full min-h-[90vh] flex justify-between">
        <LeftBar />
        <DisplayContainer selected={selected} />
        <EventsList selected={selected} setSelected={setSelected} />
      </div>
    </div>
  );
};

export default Layout;
