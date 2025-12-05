import React from 'react';
import { PiTrademarkRegistered } from "react-icons/pi";

const Lawer = ({ lawer }) => {
    const { licenseNumber, speciality, availabilityStatus, name, experience, image } =
      lawer;;
  return (
    <div>
      <div>
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <div>
            <p className=" text-[#09982F] bg-[#bef9ce]">{availabilityStatus}</p>
            <p className=" text-[rgba(23,106,229,1)] bg-[#c4d8f5]">
              {experience}
            </p>
          </div>
          <div>
            <h1>{name}</h1>
            <h3>{speciality}</h3>
            <h4 className='flex'>
              <PiTrademarkRegistered />
              License No: {licenseNumber}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lawer;