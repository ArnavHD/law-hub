import React from 'react';
import { PiTrademarkRegistered } from "react-icons/pi";

const Lawer = ({ lawer }) => {
    const { licenseNumber, speciality, availabilityStatus, name, experience, image } =
      lawer;;
  return (
    <div>
      <div className="flex  justify-between items-center gap-16 p-7 border-2 border-black rounded-2xl">
        <div className="w-1/3">
          <img
            className="w-40 h-40 object-cover rounded-xl"
            src={image}
            alt=""
          />
        </div>
        <div className="w-2/3">
          <div className=" flex gap-2">
            <p className=" text-[#09982F] bg-[#bef9ce] rounded-xl px-3">
              {availabilityStatus}
            </p>
            <p className=" text-[rgba(23,106,229,1)] bg-[#c4d8f5] rounded-xl px-3">
              {experience}
            </p>
          </div>
          <div>
            <h1 className="mt-0.5 text-2xl font-bold">{name}</h1>
            <h3 className="mt-0.5 text-[18px]">{speciality}</h3>
            <h4 className="mt-0.5 flex justify-start items-center gap-2">
              <PiTrademarkRegistered />
              License No: {licenseNumber}
            </h4>
            <button className="btn py-2 mt-4 text-[rgba(23,106,229,1)] w-full rounded-4xl">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lawer;