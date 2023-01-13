import { useContext, useEffect, useState } from "react";
import { GenderContext } from "../context/GenderContext";
import fetchData from "../firebase/fetchData";

const useFetchData = ({ gender, location, date }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { setGenderData } = useContext(GenderContext) || {};

  const months = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  // 2023 - 01 - 10

  useEffect(() => {
    const getData = async () => {
      let newDate = date;
      if (date) {
        let formattedDate = date.split("-");
        console.log(formattedDate);
        newDate = `${formattedDate[2] * 1}-${
          months[formattedDate[1] * 1]
        }-${formattedDate[0].substr(-2)}`;
      }

      const response = await fetchData({
        location,
        gender,
        date: newDate,
      });

      const genderData = {
        male: 0,
        female: 0,
      };

      response?.map((item) => {
        if (item.Gender === "Male") genderData.male++;
        else if (item.Gender === "Female") genderData.female++;

        return item;
      });

      setGenderData(genderData);
      setIsLoading(false);
      setData(response);
      return response;
    };

    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, gender, location]);
  return [data, isLoading];
};

export default useFetchData;
