/* eslint-disable no-unused-vars */
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConfig";

// this function is for fetching data with queries from firestore db
async function fetchData({ location, gender, date }) {
  const response = [];
  const dataRef = collection(db, "data");

  // query chaining
  const queryConstraints = [];
  if (location) queryConstraints.push(where("Location", "==", location));
  if (gender) queryConstraints.push(where("Gender", "==", gender));
  if (date) queryConstraints.push(where("Date", "==", date));

  const q = query(dataRef, ...queryConstraints);
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    response.push(doc.data());
  });

  return response;
}

export default fetchData;
