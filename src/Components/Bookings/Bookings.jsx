// import React, { useState } from 'react';
// import { getStoredLawer, removeFromStoreDB } from '../../Utilities/AddToDB';
import { useNavigate } from 'react-router';
import Booking from '../Booking/Booking';



const Bookings = ({ lawerInLocal, removeOne, yesNo }) => {
  // const [localArray, setLocalArray] = useState([])
  //   const lawerInLocal = getStoredLawer();

  //   const removeOne = (id) => {
  //     removeFromStoreDB(id);
  //     const restLocal = getStoredLawer();
  //     console.log(restLocal);
  //   };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div>
      <div className={`${yesNo ? "hidden" : "block"} text-center mb-16`}>
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
      <div
        className={`${
          yesNo ? "block" : "hidden"
        } text-center mb-16 bg-gray-300 p-12 rounded-xl`}
      >
        <h1 className="font-bold text-4xl mb-4">
          You have not booked any appointment yet
        </h1>
        <p className="text-[16px] text-[rgba(15,15,15,1)] mb-10">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience.
        </p>
        <button
          onClick={handleNavigate}
          className="btn bg-[rgb(14,161,6)] text-white border-none"
        >
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default Bookings;