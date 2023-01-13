import React from "react";
import useFetchImage from "../hooks/useFetchImage";
import Loader from "../ui/Loader";

const DisplayContainer = ({ selected }) => {
  const { ID, Location, Date, Time, Gender, Name } = selected || {};
  const [isLoading, source] = useFetchImage(Name);

  let content;
  if (isLoading) content = <Loader />;
  else if (!isLoading && selected)
    content = (
      <div className="w-full flex flex-col p-2 items-center gap-5 min-h-[90vh]">
        <h1 className="text-3xl font-bold">{Gender}</h1>
        <div className="w-full flex  min-h-[80vh] items-center justify-center">
          <div className="w-1/2 flex flex-col gap-10 p-5">
            <div className="font-semibold">
              <h1 className="text-3xl">{ID}</h1>
              <h2 className="text-xl">Person Detected</h2>
            </div>

            <div className="flex flex-col gap-1 text-xl">
              <p>Name: {Name}</p>
              <p>Location: {Location}</p>
              <p>Date: {Date}</p>
              <p>Time: {Time}</p>
            </div>

            <p className="text-xl w-[90%]">
              Description: <br />
              {Name} detected at {Location} on {Date}
            </p>
          </div>
          <div className="w-1/2 p-5 flex items-center justify-start">
            <img src={source} className="w-full h-[75vh]" alt="" />
          </div>
        </div>
      </div>
    );
  else if (!isLoading && !selected) {
    content = (
      <div className="w-full flex flex-col p-2 items-center gap-5 min-h-[90vh]">
        <p className="text-xl font-semibold text-red-500 m-auto">
          No data found!!!!
        </p>
      </div>
    );
  }

  return content;
};

export default DisplayContainer;
