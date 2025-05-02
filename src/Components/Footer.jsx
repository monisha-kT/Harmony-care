import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/hospital-logo.png";
import { IoLocationSharp } from "react-icons/io5";

function Footer() {
    const date = new Date().getFullYear();
    const menuRef = useRef();

    return (
        <div className="bg-[#0C1881] text-white py-8 mt-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-4">
                <Link to='/'>
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="Hospital Logo" className="h-16" />
                        <p className="font-semibold text-xl">Harmony Care Hospital</p>
                    </div>
                </Link>

                <div className="w-full md:w-auto flex justify-center">
                    <div className="w-full flex justify-center">
                        <ul
                            ref={menuRef}
                            className="flex flex-col md:flex-row items-center gap-4 text-center text-white text-base cursor-pointer"
                        >
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/service">Service</Link></li>
                            <li><Link to="/doctor">Doctors</Link></li>
                            <li><Link to="/appointment">Appointment</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                </div>


                <div>
                    <p className="font-bold flex items-center gap-2 text-lg">
                        <IoLocationSharp className="text-white" />
                        Address
                    </p>
                    <div className="ml-7 text-sm leading-6">
                        <p>Harmony Care Hospital</p>
                        <p>123 Wellness Avenue,</p>
                        <p>Greenfield District,</p>
                        <p>Chennai, Tamil Nadu – 600045,</p>
                        <p>India</p>
                    </div>
                </div>
            </div>


            <div className="text-center mt-8 text-sm px-4">
                <p>&copy; {date} Harmony Care Hospital. All Rights Reserved.</p>
                <p>
                    Created By - <span className="text-gray-300">Monisha Krishan</span>
                </p>
            </div>
        </div>
    );
}

export default Footer;
