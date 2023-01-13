import React, { useEffect, useState } from "react";
import filterIcon from "../assets/images/filterIcon.png";
import useFetchData from "../hooks/useFetchData";
import Loader from "../ui/Loader";
import EventItem from "./EventItem";
import FilterContainer from "./FilterContainer";

const EventsList = ({ selected, setSelected }) => {
  // modal for filtering container
  const [modal, setModal] = useState(false);

  // filtered data initialization
  const [filteredData, setFilteredData] = useState({
    location: "",
    gender: "",
    date: "",
  });

  // conditional filter chaining
  const filterParams = {};
  if (filteredData.location && filteredData.location !== "All")
    filterParams.location = filteredData.location;
  if (filteredData.gender && filteredData.gender !== "Both")
    filterParams.gender = filteredData.gender;
  if (filteredData.date) filterParams.date = filteredData.date;

  // useFetchData hook for fetching data with/without filter
  const [data, isLoading] = useFetchData({ ...filterParams });

  useEffect(() => {
    // for selecting first element from the list and make the first item visible in middle section
    if (data?.length > 0) {
      setSelected(data[0]);
    }
    // if there is no data then nullify the selected element
    if (!data?.length) {
      setSelected(null);
    }
  }, [data, setSelected]);

  // content variable is used for conditionally rendering loader, no data handling and data fetching
  let content;
  if (isLoading) content = <Loader />;
  else if (!isLoading && !data?.length)
    content = (
      <div className="min-w-[25em] border-8 h-[90vh] flex flex-col p-2 gap-4">
        <div className="w-full flex items-center justify-between relative p-2">
          <h1 className="text-3xl font-semibold">Events</h1>
          <img
            src={filterIcon}
            alt="filter icon"
            className="w-[2em] cursor-pointer"
            onClick={() => setModal(true)}
          />
          {modal && (
            <FilterContainer
              setModal={setModal}
              filteredData={filteredData}
              setFilteredData={setFilteredData}
            />
          )}
        </div>
        <div className="flex flex-col w-full h-[80vh]  overflow-auto gap-2 p-2">
          <p className="text-xl font-semibold text-red-500">No Data Found!!</p>
        </div>
      </div>
    );
  else if (!isLoading && data?.length)
    content = (
      <div className="min-w-[25em] border-8 h-[90vh] flex flex-col p-2 gap-4">
        <div className="w-full flex items-center justify-between relative p-2">
          <h1 className="text-3xl font-semibold">Events</h1>
          <img
            src={filterIcon}
            alt="filter icon"
            className="w-[2em] cursor-pointer"
            onClick={() => setModal(true)}
          />
          {modal && (
            <FilterContainer
              setModal={setModal}
              filteredData={filteredData}
              setFilteredData={setFilteredData}
            />
          )}
        </div>
        <div className="flex flex-col w-full h-[80vh]  overflow-auto gap-2 p-2">
          {data?.map((item, index) => (
            <EventItem
              data={item}
              selected={selected}
              index={index}
              setSelected={setSelected}
            />
          ))}
        </div>
      </div>
    );

  return content;
};

export default EventsList;
