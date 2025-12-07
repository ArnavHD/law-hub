// import { useState } from "react";
import { useState } from "react";
import { getStoredLawer, removeFromStoreDB } from "../../Utilities/AddToDB";
import Bookings from "../Bookings/Bookings";
import Graphs from "../Graphs/Graphs";
// import { useLoaderData } from "react-router";


const BookingContainer = () => {
    const [localArray, setLocalArray] = useState([]);

  const lawerInLocal = getStoredLawer();
//   console.log(lawerInLocal);

  const removeOne = (id) => {
    removeFromStoreDB(id);
    const restLocal = getStoredLawer();
    console.log(restLocal);
    setLocalArray([...restLocal]);
  };
  
  return (
    <div>
      <Graphs lawerInLocal={lawerInLocal}></Graphs>
      <Bookings lawerInLocal={lawerInLocal} removeOne={removeOne}></Bookings>
    </div>
  );
};

export default BookingContainer;
