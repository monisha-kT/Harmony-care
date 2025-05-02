import React from 'react'
import doc1 from '../assets/Images/doc/image1.jpg'
import doc2 from '../assets/Images/doc/image2.jpg'
import doc3 from '../assets/Images/doc/image3.jpg'
import doc4 from '../assets/Images/doc/image4.jpg'
import doc5 from '../assets/Images/doc/image5.jpg'
import doc6 from '../assets/Images/doc/image6.jpg'
function Doctor() {
    const doctors = [
        {
            img: doc1,
            name: "Dr. Arjun Mehta",
            special: "Orthopedic Surgeon",
            bio: "With over 15 years of experience, Dr. Mehta specializes in joint replacements and complex fracture treatments. He is known for his patient-centric approach and minimally invasive procedures."
        },
        {
            img: doc2,
            name: "Dr. Ananya Reddy",
            special: "Pediatrician",
            bio: "Dr. Reddy brings warmth and expertise to child healthcare. She focuses on preventive care, vaccinations, and developmental assessments, making visits easy for both kids and parents."
        },
        {
            img: doc3,
            name: "Dr. Rakesh Iyer",
            special: "Interventional Cardiologist",
            bio: "A leading name in heart care, Dr. Iyer is an expert in angioplasty, stent placement, and cardiac diagnostics. His commitment to early detection and lifestyle-based recovery stands out."
        },
        {
            img: doc4,
            name: "Dr. Kavitha Sharma",
            special: "General & Laparoscopic Surgeon",
            bio: "Dr. Sharma has a decade of surgical excellence in procedures ranging from hernia repairs to appendectomies. She’s recognized for precision and compassionate post-op care."
        },
        {
            img: doc5,
            name: "Dr. Faisal Khan",
            special: "Dermatologist & Skin Specialist",
            bio: "Known for his evidence-based skin treatments, Dr. Khan specializes in acne, pigmentation, and hair loss. His holistic skin wellness programs attract patients from all over the city."
        },
        {
            img: doc6,
            name: "Dr. Shruthi Menon",
            special: "Obstetrics & Gynecology",
            bio: "Dr. Menon has helped hundreds of women through safe pregnancies, menstrual health issues, and fertility care. Her empathetic counseling and modern approach make her highly trusted."
        }
    ];
    const number=[
        {
            num:"98%",
            title:"Patient Satisfaction Rate"
        },
        {
            num:"200+",
            title:"Medical Specialists"
        },
        {
            num:"24/7",
            title:"Emergency Care Available"
        },
    ]
    return (
        <div>
            <div className='doctor-img'>
                <p className='font-bold lg:text-7xl text-5xl z-10 text-white'>Doctors</p>
            </div>
            <div className='mx-5'>
                <p className='mt-10 font-bold text-4xl text-center text-[#0C1881]'>Our Experts</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
  {doctors.map((item, index) => (
    <div key={index} className='bg-white p-4 rounded hover:shadow-lg shadow-gray-500'>
      
      <div className="relative">
  <img src={item.img} alt="" className='w-full h-auto rounded' />

  {/* Full-width gray background at bottom with name */}
  <p className='absolute bottom-0 left-0 w-full bg-gray-500 bg-opacity-100 text-white pl-2 py-1 font-bold '>
 {item.name}
  </p>
</div>

      
      <p className='mt-2'><span className='font-bold text-[#0C1881]'>Speciality:</span> {item.special}</p>
      <p className='mt-2'><span className='font-bold text-[#0C1881]'>Bio:</span> {item.bio}</p>
    </div>
  ))}
</div>
<div className='bg-[#EFF9FC] p-10 mt-10 mb-5 rounded-md shadow-lg shadow-neutral-500'>
    <div className='text-center'>
        <p className='font-bold text-2xl lg:text-4xl '>Our Commitment to Excellence</p>
        <p className='text- text-gray-400 lg:text-xl text-md mt-2'>Each department at MedVibe is committed to providing exceptional care through continuous education, research, and the implementation of the latest medical advancements.</p>
    </div>
    <div className='flex lg:justify-evenly justify-center items-center lg:flex-row flex-col mt-4 gap-5'>
        {
number.map((item,index)=>(
    <div key={index} className='bg-white text-center shadow-neutral-500 shadow-md p-5 rounded-md w-72'>
    <p className='text-[#14B8A6] font-bold text-3xl'>{item.num}</p>
    <p className='text-gray-500 text-lg'>{item.title}</p>
</div>
))
        }
   
    </div>
   

</div>

            </div>
        </div>
    )
}

export default Doctor
