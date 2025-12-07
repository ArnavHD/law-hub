import React from 'react';
import { useLoaderData } from 'react-router';
// import { getStoredLawer, removeFromStoreDB } from '../../Utilities/AddToDB';
// import { DataContext } from '../BookingContainer/BookingContainer';
// import { useLoaderData } from 'react-router';

// const removeOne = (id)=>{
//     removeFromStoreDB(id);
//     const restLocal = getStoredLawer();
//     console.log(restLocal);
// }


const Booking = ({ lawerId, removeOne }) => {
  console.log(lawerId);
//   console.log("LocalArray",localArray);

  const data = useLoaderData();
  console.log(data);
  const lawer = data.find((person) => person.id === lawerId);
  const { name, speciality, fee, id } = lawer;

  return (
    <div className="border mb-16 p-8 rounded-2xl">
      <div className="flex justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <h3>{speciality}</h3>
        </div>
        <div>
          <h4>Appointment Fee: ${fee}</h4>
        </div>
      </div>
      <div className="border border-dashed"></div>
      <button
        onClick={() => removeOne(id)}
        className="btn mt-4 w-full text-[rgba(255,0,0,1)] border-[rgba(255,0,0,1)] rounded-4xl"
      >
        Cancel Appointment
      </button>
    </div>
  );
};

export default Booking;