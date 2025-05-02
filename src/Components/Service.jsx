import React from 'react'
// import banner3 from '../assets/Images/banner3.jpg';
import '../App.css'
import { RiHeartPulseFill } from "react-icons/ri";
import { FaBrain } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { FaHandSparkles } from "react-icons/fa6";
import { MdChildCare } from "react-icons/md";


function Service() {
  const parts = [
    {
      icon: <RiHeartPulseFill />,
      title: "Cardiology",
      description: "Comprehensive care for heart conditions, from preventative measures to advanced treatments.",
      para1: "Cardiac Imaging",
      para2: "Heart Disease Management",
      para3: "Preventative Care",
      para4: "Rehabilitation",
    },
    {
      icon: <FaBrain />,
      title: "Neurology",
      description: "Comprehensive care for heart conditions, from preventative measures to advanced treatments.",
      para1: "Cardiac Imaging",
      para2: "Heart Disease Management",
      para3: "Preventative Care",
      para4: "Rehabilitation",
    },
    {
      icon: <FaUserDoctor />,
      title: "General Suergy",
      description: "Comprehensive care for heart conditions, from preventative measures to advanced treatments.",
      para1: "Cardiac Imaging",
      para2: "Heart Disease Management",
      para3: "Preventative Care",
      para4: "Rehabilitation",
    },
    {
      icon: <FaHandsHoldingChild />,
      title: "Pediatrics",
      description: "Comprehensive care for heart conditions, from preventative measures to advanced treatments.",
      para1: "Cardiac Imaging",
      para2: "Heart Disease Management",
      para3: "Preventative Care",
      para4: "Rehabilitation",
    },
    {
      icon: <FaHandSparkles />,
      title: "Dermatology ",
      description: "Comprehensive care for heart conditions, from preventative measures to advanced treatments.",
      para1: "Cardiac Imaging",
      para2: "Heart Disease Management",
      para3: "Preventative Care",
      para4: "Rehabilitation",
    },
    {
      icon: <MdChildCare />,
      title: "Gynoclogist ",
      description: "Comprehensive care for heart conditions, from preventative measures to advanced treatments.",
      para1: "Cardiac Imaging",
      para2: "Heart Disease Management",
      para3: "Preventative Care",
      para4: "Rehabilitation",
    },
  ]

  return (
    <div>
      <div className='service-back text-center'>
        <p className='font-bold lg:text-7xl text-5xl z-10  text-white'>Our Services</p>
      </div>
      <div className='text-center mx-5 mt-10'>
        <p>At MedVibe, we offer a comprehensive range of medical services designed to meet all your healthcare needs. Our team of specialists is committed to providing exceptional care using the latest medical advancements.</p>
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 mx-5'>
        {parts.map((item, index) => (
          <div key={index} className='p-10 hovercls hover:shadow-lg hover:shadow-neutral-400'>
            <p className='flex flex-col justify-center'>
              <span className='text-3xl text-[#0C1881] hoverspan'>{item.icon}</span>
              <span className='text-[#1D87CB] text-xl'>{item.title}</span>
            </p>
            <p className='text-justify'>{item.description}</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              {Object.entries(item)
                .filter(([key]) => key.startsWith("para"))
                .map(([key, value]) => (
                  <li key={key}>{value}</li>
                ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Service
