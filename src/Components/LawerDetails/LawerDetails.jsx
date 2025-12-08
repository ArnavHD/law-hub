// import React, { useEffect, useState } from "react";
import { NavLink, useLoaderData, useNavigate } from "react-router";
import { PiTrademarkRegistered } from "react-icons/pi";
import { BiError } from "react-icons/bi";
import { addToStoreDB, getStoredLawer } from "../../Utilities/AddToDB";
import { FiPlusCircle } from "react-icons/fi";
import { Bounce, ToastContainer, toast } from "react-toastify";

// import { useState } from "react";

const LawerDetails = () => {
  

  let navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };
  
   const notify = () => toast("Wow so easy !");

  // console.log(params.lawId);
  const lawer = useLoaderData();
  console.log(lawer.id);

  if (lawer.id === undefined) {
    return (
      <div className="text-center mt-20 mb-24 bg-gray-300 p-10 rounded-xl">
        <h1 className="text-4xl font-bold mb-4">Lawyer Not Found</h1>
        <p className="text-xl mt-4 mb-3">No lawyer found with the id-</p>
        <p className="flex justify-center items-center gap-2 mb-4">
          <FiPlusCircle />
          {lawer}
        </p>
        <button
          onClick={handleHome}
          className="btn border-none text-white bg-[rgb(14,161,6)]"
        >
          View All Lawyers
        </button>
      </div>
    );
  }
  
  const {
    id,
    image,
    name,
    experience,
    speciality,
    licenseNumber,
    availability,
    fee,
  } = lawer;

  
  console.log(id);
  const hendleAddAppointment = (id) => {
    const lawerInLocal = getStoredLawer();
    if(lawerInLocal.includes(id)){
        toast.error("Appointment Already Scheduled for today", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return "Duplicate";
        // console.log("Duplicated..");
    }
    else{
        toast.success("Item Added");
    }
    
    // lawerInLocal.filter((id) => id === id && console.log("Not allowed"));
    addToStoreDB(id);
    console.log(lawerInLocal);
    
    
  };

  return (
    <div>
      <div className="p-20 text-center bg-[rgba(15,15,15,0.05)] rounded-2xl mt-8">
        <h1 className=" text-4xl mb-4 font-bold">Lawyer’s Profile Details</h1>
        <p className="text-[18px]">{lawer.lawerDetails}</p>
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
                {availability.map((day, index) => (
                  <li
                    key={index}
                    className="bg-[rgba(255,160,0,0.1)] px-2.5 py-1 rounded-full text-[rgba(255,160,0,1)]"
                  >
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

        <button
          onClick={() => {
            let result = hendleAddAppointment(id);
            if (result !== "Duplicate") {
              navigate("/my-booking");
            } else {
              notify;
            }
          }}
          className="btn w-full text-xl text-white my-6 bg-[rgb(14,161,6)] rounded-4xl"
        >
          Book Appointment Now
        </button>

        {/* <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        /> */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default LawerDetails;
