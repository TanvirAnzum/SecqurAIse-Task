import React from "react";

const EventItem = ({ data, selected, setSelected }) => {
  const { ID, Location, Date, Time } = data || {};

  return (
    <div
      className={
        selected?.ID === ID
          ? "bg-[#d9d9d9] w-full min-h-[5em] p-2 flex flex-col items-start justify-between active cursor-pointer"
          : "bg-[#d9d9d9] w-full min-h-[5em] p-2 flex flex-col items-start justify-between cursor-pointer"
      }
      onClick={() => setSelected(data)}
    >
      <div className="w-full flex items-center justify-between">
        <p className="text-xl">
          {ID}: {Location}
        </p>
        <div className="flex items-center justify-center gap-2 text-md">
          <p>{Date}</p>
          <p>{Time}</p>
        </div>
      </div>
      <p className="text-xl">Person Detected.</p>
    </div>
  );
};

export default EventItem;
