import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";

function Contact() {
    return (
        <div>
            <div className='contact-img'>
                <p className='font-bold lg:text-7xl text-5xl z-10 text-white'>Contact Us</p>
            </div>
            <div className='mx-5 mt-10'>
                <div>
                    <p className='text-[#0C1881] text-4xl font-bold text-center'>Our Health, Out Priority</p>
                </div>
                <div className='flex justify-center items-center mt-10'>

                    <div className='text-justify  w-full'>
                        <p className='font-bold flex items-center  gap-1 text-lg'><span className='text-xl text-[#0C1881]'><IoLocationSharp /></span>Address</p>
                        <div className='ml-10 text-lg'>
                            <p>Harmony Care Hospital</p>
                            <p>123 Wellness Avenue,</p>
                            <p>Greenfield District,</p>
                            <p>Chennai, Tamil Nadu – 600045,</p>
                            <p>India</p>
                        </div>

                        <div className='mt-5 flex  itms-center'>
                            <p className='font-bold flex items-center  gap-1 text-lg    '><span className='text-xl text-[#0C1881]'><FaPhone /></span>Phone number: </p>
                            <a href="tel:919999999999" className='text-lg ml-1'>9999999999</a>
                        </div>
                        <div className='mt-5 flex  itms-center'>
                            <p className='font-bold flex items-center  gap-1 text-lg    '><span className='text-xl text-[#0C1881]'><IoMdMail /></span>Mail: </p>
                            <a href="mail:harmonycare@gmail.com" className='text-lg ml-1'>haremonycare@gmail.com</a>
                        </div>
                        <div className='mt-4'>
                        <p className='font-bold flex items-center  gap-1 text-lg    '><span className='text-xl text-[#0C1881]'><FaMapLocationDot /></span>Google Map </p>

                            <div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.098426892588!2d76.96295857045459!3d11.031241730451159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8586c00000039%3A0x1ab03c2cb32ea857!2sNvron%20Life%20Science%20Ltd!5e0!3m2!1sen!2sin!4v1746177622286!5m2!1sen!2sin"
                                    
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Nvron Life Science Location"
                                    className='google-map'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
