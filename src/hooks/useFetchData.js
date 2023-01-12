import { useEffect, useState } from "react";
import fetchData from "../firebase/fetchData";

const useFetchData = ({ gender, location, date }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchData({ gender, location, date });
      setIsLoading(false);
      setData(response);
      return response;
    };

    getData();
  }, [date, gender, location]);
  return [data, isLoading];
};

export default useFetchData;
