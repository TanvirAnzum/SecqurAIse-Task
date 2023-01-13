/* eslint-disable no-unused-vars */
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConfig";

async function fetchData({ location, gender, date }) {
  const response = [];
  const dataRef = collection(db, "data");
  const queryConstraints = [];
  if (location) queryConstraints.push(where("Location", "==", location));
  if (gender) queryConstraints.push(where("Gender", "==", gender));
  if (date) queryConstraints.push(where("Date", "==", date));

  const q = query(dataRef, ...queryConstraints);
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    response.push(doc.data());
  });
  console.log(response);
  return response;
}

export default fetchData;
