import React from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router";

const Error = () => {

    const navigate = useNavigate();

    const handleNavigate = ()=>{
        navigate("/");
    }
  return (
    <div className="bg-[rgb(248,249,238)] h-screen">
      <Navbar></Navbar>

      <div className=" flex flex-col justify-center items-center gap-8">
        <img
          className="mx-auto w-[500px] rounded-xl"
          src="https://i.ibb.co/G4cWt9Dx/istockphoto-1404059706-612x612.jpg"
          alt=""
        />
        <div className="text-center space-y-5">
          <h1 className="text-red-600 font-bold text-4xl">
            404 - Page Not Found
          </h1>
          <p className="text-xl">
            Opps!! The page you are looking for doesn't exist.
          </p>
          <button
            onClick={handleNavigate}
            className="btn  bg-[rgb(14,161,6)] text-white"
          >
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
