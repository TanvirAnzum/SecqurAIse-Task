import React, { useEffect } from "react";
import filterIcon from "../assets/images/filterIcon.png";
import useFetchData from "../hooks/useFetchData";
import EventItem from "./EventItem";

const EventsList = ({ selected, setSelected }) => {
  const [data, isLoading] = useFetchData({});

  useEffect(() => {
    if (data?.length >= 0) {
      setSelected(data[0]);
    }
  }, [data, setSelected]);

  return (
    <div className="min-w-[25vw] border-8 h-[90vh] flex flex-col p-2 gap-4 overflow-auto">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Events</h1>
        <img
          src={filterIcon}
          alt="filter icon"
          className="w-[2em] cursor-pointer"
        />
      </div>
      {data?.map((item, index) => (
        <EventItem
          data={item}
          selected={selected}
          index={index}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
};

export default EventsList;
