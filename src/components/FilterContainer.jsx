import React, { useEffect, useRef } from "react";

const FilterContainer = ({ setModal, setFilteredData, filteredData }) => {
  const locationRef = useRef("");
  const genderRef = useRef("");
  const dateRef = useRef("");

  const resetHandler = () => {
    setFilteredData({
      location: "",
      gender: "",
      date: "",
    });
    locationRef.current.value = "All";
    genderRef.current.value = "Both";
    dateRef.current.value = "";
  };

  const submitHandler = () => {
    setFilteredData({
      location: locationRef.current.value,
      gender: genderRef.current.value,
      date: dateRef.current.value,
    });
    setModal(false);
  };

  useEffect(() => {
    const { location, gender, date } = filteredData;
    locationRef.current.value = location ? location : "All";
    genderRef.current.value = gender ? gender : "Both";
    dateRef.current.value = date;
  }, [filteredData]);

  return (
    <div className="flex flex-col items-start text-md justify-start absolute top-0 right-0 rounded bg-slate-400 p-5 gap-4">
      <div className="flex items-center justify-center gap-4 ">
        <label for="location" className="font-semibold w-[4em]">
          Location:
        </label>
        <select
          name="location"
          id="location"
          className="rounded p-1 cursor-pointer w-[9.1em]"
          ref={locationRef}
        >
          <option value="All">All</option>
          <option value="Chennai">Chennai</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Bangalore">Bangalore</option>
        </select>
      </div>
      <div className="flex items-center justify-center gap-4 ">
        <label for="gender" className="font-semibold w-[4em]">
          Gender:
        </label>
        <select
          name="gender"
          id="gender"
          className="rounded p-1 cursor-pointer w-[9.1em]"
          ref={genderRef}
        >
          <option value="Both">Both</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="flex items-center justify-center gap-4">
        <label for="date" className="font-semibold w-[4em]">
          Date:
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="rounded p-1 cursor-pointer w-[9.1em]"
          ref={dateRef}
        />
      </div>

      <div className="w-full flex items-center justify-center gap-4 mt-5">
        <button
          className="p-2  w-[5em] rounded bg-green-400 font-semibold cursor-pointer hover:animate-pulse"
          onClick={submitHandler}
        >
          Submit
        </button>
        <button
          className="p-2  w-[5em] rounded bg-yellow-400 font-semibold cursor-pointer hover:animate-pulse"
          onClick={resetHandler}
        >
          Reset
        </button>
        <button
          className="p-2  w-[5em] rounded bg-red-400 font-semibold cursor-pointer hover:animate-pulse"
          onClick={() => setModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FilterContainer;
