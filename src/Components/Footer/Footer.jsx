import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { NavLink } from "react-router";
import './Footer.css'

const Footer = () => {
  return (
    <div className="p-28 bg-black flex flex-col justify-center items-center">
      <div className="flex gap-3 cursor-pointer mb-11">
        <img
          className=" w-14 h-14"
          src="https://i.ibb.co/hk4Jb0b/logo-footer-1.png"
          alt=""
        />
        <a className="text-4xl text-white">Law.CA</a>
      </div>
      <div className="foot navbar-center lg:flex gap-12 text-white mb-8">
        <NavLink to="/" className="text-xl">
          Home
        </NavLink>
        <NavLink to="/my-booking" className="text-xl">
          My-Bookings
        </NavLink>
        <NavLink to="/Blogs" className="text-xl">
          Blogs
        </NavLink>
        <NavLink to="/contact-us" className="text-xl">
          Contact Us
        </NavLink>
      </div>
      <div className="border border-[rgba(255,255,255,0.2)] border-dashed w-full mb-8"></div>
      <div className="flex gap-6">
        <a href="https://www.facebook.com/" target=" blank">
          <FaFacebook size={30} color="#1877F2" />
        </a>
        <a href="https://x.com/" target=" blank">
          <BsTwitterX size={30} color="white" />
        </a>
        <a href="https://github.com/ArnavHD/law-hub" target=" blank">
          <FaGithub size={30} color="white" />
        </a>
        <a href="https://ca.linkedin.com/" target=" blank">
          <TbBrandLinkedinFilled size={30} color="white" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
