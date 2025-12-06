import React, { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router";
import { PiTrademarkRegistered } from "react-icons/pi";
import { BiError } from "react-icons/bi";

const LawerDetails = () => {
  const params = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    //
  }, []);
  // console.log(params.lawId);
  const lawers = useLoaderData();
  const lawerInfo = lawers.find((lawer) => lawer.id == params.lawId);
  console.log("Lawer info is:", lawerInfo);
  const {
    image,
    name,
    experience,
    speciality,
    licenseNumber,
    availability,
    fee,
  } = lawerInfo;

  return (
    <div>
      <div className="p-20 text-center bg-[rgba(15,15,15,0.05)] rounded-2xl mt-8">
        <h1 className=" text-4xl mb-4 font-bold">Lawyer’s Profile Details</h1>
        <p className="text-[18px]">{lawerInfo.lawerDetails}</p>
      </div>

      <div className="flex justify-between p-8  rounded-2xl border-2 my-8">
        <div className="w-3/12">
          <img
            className="w-56 h-56 object-cover rounded-xl"
            src={image}
            alt=""
          />
        </div>
        <div className="w-9/12">
          <h5 className=" text-[rgba(23,106,229,1)] bg-[#c4d8f5] rounded-xl px-3 w-44 mb-6">
            {experience}
          </h5>
          <h1 className=" text-3xl font-bold mb-4">{name}</h1>
          <div className="flex gap-10 text-[16px] mb-4">
            <p>{speciality}</p>
            <div className="flex gap-2 justify-center items-center">
              <PiTrademarkRegistered size={19} />
              <p>{licenseNumber}</p>
            </div>
          </div>
          <h3 className="flex gap-4 text-[16px] mb-4">
            <div className="flex justify-center items-center gap-4">
              <span className="font-bold">Availability:</span>
              <ul className="flex gap-4">
                {availability.map((day) => (
                  <li className="bg-[rgba(255,160,0,0.1)] px-2.5 py-1 rounded-full text-[rgba(255,160,0,1)]">
                    {day}
                  </li>
                ))}
              </ul>
            </div>
          </h3>
          <h3 className="text-[16px] font-semibold">
            Consultation Fee:
            <span className="text-[rgba(14,161,6,1)] ml-4">${fee}</span>
          </h3>
        </div>
      </div>

      <div className="border p-8 rounded-2xl mb-24">
        <h1 className=" text-2xl font-bold text-center mb-4">
          Book an Appointment
        </h1>
        <div className="border border-dashed"></div>
        <div className="flex justify-between items-center mt-5">
          <h3>Availability</h3>
          <p className="bg-[rgba(9,152,47,0.1)] px-3.5 py-2 text-sm rounded-4xl text-[rgba(9,152,47,1)]">
            Lawyer Available Today
          </p>
        </div>
        <div className="divider"></div>
        <div className="bg-[rgba(255,160,0,0.1)] px-4 py-2 rounded-3xl">
          <p className="flex items-center text-[16px] text-[rgba(255,160,0,1)]  ]">
            <BiError />
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.
          </p>
        </div>
        <NavLink to="/my-booking">
          <button className="btn w-full text-xl text-white my-6 bg-[rgba(14,161,6,1)] rounded-4xl">
            Book Appointment Now
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default LawerDetails;
