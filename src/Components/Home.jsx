import React, { useEffect, useRef } from "react";
import build from "../assets/Images/hospital-bulid.png";
import img1 from "../assets/Images/anime1.jpeg";
import img2 from "../assets/Images/anime2.jpg";
import img3 from "../assets/Images/anime3.jpg";
import img4 from "../assets/Images/anime4.jpg";
import img5 from "../assets/Images/anime6.jpg";
import img6 from "../assets/Images/1.jpg";
import img7 from "../assets/Images/2.jpg";
import img8 from "../assets/Images/6.jpg";
import img9 from "../assets/Images/4.jpg";
import img10 from "../assets/Images/5.jpg";
import img11 from "../assets/Images/3.jpg";
import hosbuild from '../assets/Images/hosbuild.jpg'
import { useNavigate } from "react-router-dom";
import "../App.css";

import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from "react";

function Home() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
const details=[
   { img:img9,
    title:"Orthopedics",
    description:"Orthopedics is the branch of medicine that deals with the prevention or correction of injuries or disorders of the skeletal system and associated muscles, joints, and ligaments."
   },
   { img:img10,
    title:"Pediatrics",
    description:"Pediatrics is the branch of medicine that deals with the prevention or correction of injuries or disorders of the skeletal system and associated muscles, joints, and ligaments."
   },
   { img:img8,
    title:"General Surgey",
    description:"General Surgey is the branch of medicine that deals with the prevention or correction of injuries or disorders of the skeletal system and associated muscles, joints, and ligaments."
   },
   { img:img6,
    title:"Cardiology",
    description:"General Surgey is the branch of medicine that deals with the prevention or correction of injuries or disorders of the skeletal system and associated muscles, joints, and ligaments."
   },
   { img:img7,
    title:"Dermatology",
    description:"General Surgey is the branch of medicine that deals with the prevention or correction of injuries or disorders of the skeletal system and associated muscles, joints, and ligaments."
   },
   { img:img11,
    title:"Gynoclogist",
    description:"General Surgey is the branch of medicine that deals with the prevention or correction of injuries or disorders of the skeletal system and associated muscles, joints, and ligaments."
   }
]

const navigate = useNavigate();


const navigates = () => {
  navigate('/appointment'); 
};
    useEffect(() => {
        const totalPanels = 12;
        const carousel = document.getElementById("carouselContainer");
        let angle = 0;

        const rotateCarousel = () => {
            angle += 0.5;
            carousel.style.transform = `rotateY(${angle}deg)`;
            requestAnimationFrame(rotateCarousel);
        };
        rotateCarousel();
        const radius = 500;
        for (let i = 0; i < totalPanels; i++) {
            const item = document.getElementById(`item${i + 1}`);
            const theta = (2 * Math.PI / totalPanels) * i;
            const x = radius * Math.sin(theta);
            const z = radius * Math.cos(theta);
            item.style.transform = `translateX(${x}px) translateZ(${z}px)`;
        }
    }, []);

    const images = [img1, img2, img3, img4, img5];

    return (
        <>
            <div className="flex flex-col lg:flex-row justify-center items-center mx-5 mt-5">
                <img src={build} alt="hospital" className="h-64" />
                <div>
                    <p className="text-justify text-[#0C1881] lg:w-72">
                        Welcome to Harmony Care Hospital. We’re more than a hospital – we’re a trusted partner in your health and well-being, providing care you can count on.
                    </p>
                </div>
            </div>

            <div className="mx-5 mt-5 block lg:grid lg:grid-cols-2 lg:gap-7 lg:content-center lg:items-center">
                <p className="leading-8 text-justify ">
                    <span className="text-[#0C1881] text-xl text-justify ">Harmony Care</span> Hospital, established in 1970, is a trusted and well-established healthcare institution dedicated to delivering compassionate and high-quality medical care. With over five decades of service, the hospital has built a strong reputation for clinical excellence, patient-focused care, and advanced medical practices. Backed by a team of skilled doctors, compassionate nurses, and state-of-the-art facilities, Harmony Care Hospital offers a wide range of medical services to meet the needs of individuals and families. Rooted in values of empathy, excellence, and integrity, the hospital continues to be a beacon of hope and healing in the community.
                </p>
                <img src={hosbuild} alt="" />
            </div>
<p className="text-center font-bold text-2xl my-5">Our Environment</p>
            <div id="contentContainer" className="trans3d overflow-x-hidden overflow-y-hidden">
                <section id="carouselContainer" className="trans3d">
                    {Array.from({ length: 12 }, (_, i) => (
                        <figure key={i} id={`item${i + 1}`} className="carouselItem trans3d">
                            <div className="carouselItemInner trans3d">
                                <img
                                    src={images[i % 5]} 
                                    alt={`carousel-${i + 1}`}
                                    className="lg:h-[200px] h-[150px]"
                                />
                            </div>
                        </figure>
                    ))}
                </section>
            </div>
            <div className="lg:mt-24 mt-40 mx-5">
                <h2 className="font-bold text-center text-2xl">Servcies</h2>
              
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
  {details.map((item, index) => (
    <div
      key={index}
      className="relative text-center"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <img
        src={item.img}
        alt={item.title}
        className="cursor-pointer mx-auto"
      />
      <p className="font-semibold mt-2">{item.title}</p>

   
      {hoveredIndex === index && (
        <div className="absolute top-0 left-0 w-full h-full  bg-opacity-80 flex items-center justify-center z-20 p-4">
          <div className="text-center bg-white p-4 rounded shadow-lg w-64">
            <h3 className="text-base font-bold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.description}</p>
          </div>
        </div>
      )}
    </div>
  ))}
</div>



                   
            
            </div>
            <div className="flex justify-center items-center mt-10">
                <button onClick={navigates} className="flex justify-center items-center bg-red-500 rounded-md px-5 py-4 text-white"><span className="hover:me-4">Book Appointment </span><span className="hover:ms-4 text-2xl"><IoIosArrowRoundForward /></span></button>
            </div>
        </>
    );
}

export default Home;
