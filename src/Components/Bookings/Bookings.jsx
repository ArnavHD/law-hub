// import React, { useState } from 'react';
// import { getStoredLawer, removeFromStoreDB } from '../../Utilities/AddToDB';
import Booking from '../Booking/Booking';

const Bookings = ({ lawerInLocal, removeOne }) => {
  // const [localArray, setLocalArray] = useState([])
  //   const lawerInLocal = getStoredLawer();

  //   const removeOne = (id) => {
  //     removeFromStoreDB(id);
  //     const restLocal = getStoredLawer();
  //     console.log(restLocal);
  //   };
  return (
    <div>
      <div className="text-center mb-16">
        <h1 className="font-bold text-4xl mb-4">My Today's Appointments</h1>
        <p className="text-[16px] text-[rgba(15,15,15,1)]">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience.
        </p>
      </div>
      <div>
        {lawerInLocal.map((lawerId, index) => (
          <Booking
            key={index}
            removeOne={removeOne}
            lawerId={lawerId}
            
          ></Booking>
        ))}
      </div>
    </div>
  );
};

export default Bookings;