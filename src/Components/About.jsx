import React from "react";
import '../App.css'
import arrow from "../assets/Images/arrow.png"

import line1 from '../assets/Images/line1.png'
import line2 from '../assets/Images/line-2.png'
function About() {

    return (
        <>

            <div className="background-img  flex justify-center  ">

                <h1 className="text-center  m-10 flex justify-center items-center lg:text-7xl text-2xl font-bold z-10 text-white">A Glimpse into the History of Harmony Care Hospital</h1>
            </div>
            <div className="mx-5">
                <div className=" text-center mt-10">
                    <p className="mb-2">Founded in the year 1970,<span className="font-bold text-[#0C1881]"> Harmony Care Hospital</span> began as a small community clinic with a strong vision—to make quality healthcare accessible and compassionate for everyone. What started with just a few dedicated doctors and basic medical facilities has grown over the decades into a full-fledged multi-specialty hospital, known for its excellence in patient care and advanced medical services.</p>
                    <p className="mb-2">During the early years, the hospital focused on general medicine and maternal care, serving local families with personal attention and warmth. As medical needs evolved and technology advanced, Harmony Care Hospital expanded its infrastructure, introduced modern diagnostic equipment, and brought in expert specialists across departments like cardiology, orthopedics, pediatrics, and emergency care.</p>
                    <p className="mb-2">Today, with over 50 years of legacy, Harmony Care Hospital stands as a symbol of trust, healing, and commitment—continuing its mission to improve lives and support the community's health with integrity and innovation.</p>
                </div>
                <div>
                    <div className="arrowcls h-10 relative -top-24 flex justify-center ">
                        {/* pp */}
                        <img src={arrow} alt="" className="h-56" />

                    </div>
                    <h2 className="my-2 text-center underline underline-offset-2 font-bold text-2xl tracking-widest flex items-center justify-center text-[#0C1881]">Vision</h2>
                    <div className="text-center">
                        <p>
                            To be a leading healthcare institution recognized for excellence in patient care, medical innovation, and compassionate service—enriching lives and setting new standards in healing and wellness.
                        </p>
                        <p>Embracing cutting-edge medical technology to improve outcomes.

                            Fostering a culture of continuous learning, innovation, and medical research.</p>
                    </div>
                    <div className="arrowcls h-10 relative -\ flex justify-center my-5">
                        {/* pp */}
                        <img src={line2} alt="" className="h-10" />

                    </div>
                    <h2 className="my-2 text-center underline underline-offset-2 font-bold text-2xl tracking-widest flex items-center justify-center text-[#0C1881]">Mission</h2>
                    <div>
                        <ul className="text-center">
                            <li>To continuously enhance medical services through advanced technologies and skilled professionals.</li>
                            <li>To provide high-quality, affordable, and ethical healthcare to every patient with dignity and respect.  </li>
                            <li>
                                To serve the community through preventive health education, outreach, and care with compassion.
                            </li>
                            <li>   To create a healing environment that promotes physical, emotional, and spiritual well-being. </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

}



export default About;