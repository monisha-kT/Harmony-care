import React, { useRef } from "react";
import logo from "../assets/Images/hospital-logo.png";
import { MdMenu } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    if (menuRef.current.classList.contains("hidden")) {
      menuRef.current.classList.remove("hidden");
      menuRef.current.classList.add("block");
    } else {
      menuRef.current.classList.add("hidden");
      menuRef.current.classList.remove("block");
    }
  };

  const navigates = () => {
    navigate('/appointment');
  };

  return (
    <>
      <div className="w-full px-4 bg-[#0C1881] flex justify-between items-center py-3 flex-wrap">
       
        <Link to='/'>
        <div className="flex items-center gap-2">
          <img src={logo} alt="hospital-logo" className="h-16" />
          <p className="text-white text-xl font-semibold">Harmony Care</p>
        </div>
        </Link>

        
        <button onClick={toggleMenu} className="block lg:hidden text-white text-3xl">
          <MdMenu />
        </button>


        <ul className="hidden lg:flex justify-end gap-5 items-center text-white text-lg cursor-pointer">
          <li className="hover:bg-white hover:text-[#0C1881] px-5"><Link to="/">Home</Link></li>
          <li className="hover:bg-white hover:text-[#0C1881] px-5"><Link to="/about">About Us</Link></li>
          <li className="hover:bg-white hover:text-[#0C1881] px-5"><Link to="/service">Service</Link></li>
          <li className="hover:bg-white hover:text-[#0C1881] px-5"><Link to="/doctor">Doctors</Link></li>
         
          <li className="hover:bg-white hover:text-[#0C1881] px-5"><Link to="/contact">Contact Us</Link></li>
        </ul>

        <div className="w-full hidden lg:w-auto lg:flex lg:justify-center lg:items-center mt-4 lg:mt-0">
          <button
            onClick={navigates}
            className="flex items-center bg-red-500 rounded-md px-5 py-3 text-white hover:bg-red-600 transition-all"
          >
            <span className="me-2">Book Appointment</span>
            <IoIosArrowRoundForward className="text-2xl" />
          </button>
        </div>
      </div>

     
      <ul
        ref={menuRef}
        className="hidden lg:hidden flex-col lg:gap-4 bg-[#0C1881] px-6  text-center text-white text-lg cursor-pointer"
      >
        <li className="py-2 hover:bg-white hover:text-[#0C1881] "><Link to="/">Home</Link></li>
        <li className="py-2 hover:bg-white hover:text-[#0C1881] "><Link to="/about">About Us</Link></li>
        <li className="py-2 hover:bg-white hover:text-[#0C1881] "><Link to="/service">Service</Link></li>
        <li className="py-2 hover:bg-white hover:text-[#0C1881] "><Link to="/doctor">Doctors</Link></li>
        <li className="py-2 hover:bg-white hover:text-[#0C1881] "><Link to="/appointment">Appointment</Link></li>
        <li className="py-2 hover:bg-white hover:text-[#0C1881] "><Link to="/contact">Contact Us</Link></li>
      </ul>
    </>
  );
}

export default Nav;
