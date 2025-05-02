import React, { useState, useEffect } from 'react';

import '../App.css';
import appointlogo from '../assets/Images/app.png';
import { useForm, ValidationError } from '@formspree/react';
import Swal from 'sweetalert2';

function Appointment() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    date:"",
    time:"",
    phone: "",
    department: "",
  });

  const [state, handleSubmit] = useForm("manoenko");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (state.succeeded) {
      Swal.fire({
        title: 'Appointment Booked!',
        text: 'Your appointment has been successfully submitted.',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
      // setFormData({
      //   email: "",
      //   firstName: "",
      //   lastName: "",
      //   phone: "",
      //   department: "",
      // });


    }

  }, [state.succeeded]);
  return (
    <div>
      <div className='appoint text-center'>
        <p className='font-bold lg:text-7xl text-5xl text-white z-10'>Appointment</p>
      </div>
      <p className='text-center text-5xl mt-10 font-bold text-[#0C1881]'>BOOK NOW!</p>
      <div className='mx-5 flex lg:flex-row flex-col justify-center items-center'>
        <img src={appointlogo} alt="form" className='lg:w-1/2 w-full lg:h-[500px] h-72' />

        <form onSubmit={(e) => {
          handleSubmit(e);
          sessionStorage.setItem("appointmentData", JSON.stringify(formData));
        }} className="max-w-md mx-auto lg:w-1/2 w-full">

     
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              id="email"
              required
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
              Email address
            </label>
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          {/* Name Fields */}
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                id="firstName"
                required
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label htmlFor="firstName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                id="lastName"
                required
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label htmlFor="lastName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Last name
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                id="date"
                required
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label htmlFor="date" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
               Date
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                id="time"
                required
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label htmlFor="time" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Time
              </label>
            </div>
          </div>
       
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                id="phone"
                required
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Phone number (123-456-7890)
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                id="department"
                required
                className="peer block appearance-none w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600  dark:border-gray-600 dark:focus:border-blue-500"
              >
                <option value="" disabled hidden>Select department</option>
                <option value="orthopedics">Orthopedics</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="cardiology">Cardiology</option>
                <option value="general-surgery">General Surgery</option>
                <option value="dermatology">Dermatology</option>
                <option value="gynecologist">Gynecologist</option>
              </select>
              <label htmlFor="department" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform scale-75 -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Department Selection
              </label>
            </div>
          </div>

       
          <button
            type="submit"
            disabled={state.submitting}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Appointment;
