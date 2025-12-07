import React from "react";
import { NavLink } from "react-router";
import './navbar.css'

const Navbar = () => {
  return (
    <div className="rounded-2xl">
      <div className="navbar bg-base-100 shadow-sm px-40 mb-8">
        <div className="navbar-start cursor-pointer">
          <img
            className=" w-14 h-14"
            src="https://i.ibb.co/vvC9fQ96/Screenshot-2025-12-04-181501.png"
            alt=""
          />
          <a className="text-4xl">Law.CA</a>
        </div>
        <div className="nav navbar-center hidden lg:flex gap-12">
          <NavLink to="/" className=" text-xl">
            Home
          </NavLink>
          <NavLink to="/my-booking" className=" text-xl">
            My-Bookings
          </NavLink>
          <NavLink to="/Blogs" className=" text-xl">
            Blogs
          </NavLink>
          <NavLink to="/contact-us" className="text-xl">
            Contact Us
          </NavLink>
        </div>
        <div className="navbar-end">
          <button className="btn btn-success text-sm rounded-4xl text-white bg-[#0EA106] px-8 py-4">
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
