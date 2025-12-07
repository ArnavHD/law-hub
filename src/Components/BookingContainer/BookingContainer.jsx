// import { useState } from "react";
import { useState } from "react";
import { getStoredLawer, removeFromStoreDB } from "../../Utilities/AddToDB";
import Bookings from "../Bookings/Bookings";
import Graphs from "../Graphs/Graphs";
// import { useLoaderData } from "react-router";


const BookingContainer = () => {
    const [localArray, setLocalArray] = useState(getStoredLawer());
    // const [yesNo, setYesNo] = useState(0)

  const lawerInLocal = localArray;
//   console.log(lawerInLocal);

  const removeOne = (id) => {
    removeFromStoreDB(id);
    const restLocal = getStoredLawer();
    console.log(restLocal);
    setLocalArray([...restLocal]);
  };
  let yesNo;
  if(localArray.length === 0){
    yesNo = 1;
    console.log(yesNo);
  }
  else{
    yesNo = 0;
    console.log(yesNo);
  }
  
  return (
    <div>
      <Graphs lawerInLocal={lawerInLocal} yesNo={yesNo}></Graphs>
      <Bookings yesNo={yesNo} lawerInLocal={lawerInLocal} removeOne={removeOne}></Bookings>
    </div>
  );
};

export default BookingContainer;
