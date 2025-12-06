import React from 'react';
import { PiTrademarkRegistered } from "react-icons/pi";
import { Link } from 'react-router';

const Lawer = ({ lawer }) => {
    const { licenseNumber, speciality, availabilityStatus, name, experience, image, id } =
      lawer;
      // console.log(lawer);
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
              <PiTrademarkRegistered size={19} />
              License No: {licenseNumber}
            </h4>
            <Link to={`/lawer-detail/${id}`}>
              <button className="btn py-2 mt-4 border border-[rgba(23,106,229,1)] bg-white text-[rgba(23,106,229,1)] w-full rounded-4xl">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lawer;