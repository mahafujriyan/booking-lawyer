import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

import { addAppoint } from '../../Utility/Index';



const LawyersDetails = () => {
    const data = useLoaderData();
  
    console.log(data)

  
   
    
  

    const {
      experience,
      image,
      licenseNumber,
      name,
      specialty,
      availableDays,
      fees
       = [],
    } = data || {};
    const navigate=useNavigate()

    const handleAppoint=()=>{
     
       addAppoint(data)
           navigate(`/bookings`)


    }
   
   
    

    return (
        <div>
            <section>
                <div className='bg-[rgba(15,15,15,0.05)] border border-[rgba(15,15,15,0.15)] flex flex-col justify-center items-center text-center m-5 rounded-xl p-6  '>
                    <h1 className='font-bold text-2xl p-2'>Lawyer’s Profile Details</h1>
                    <p>Seasoned corporate lawyer with over {experience} of experience in contract negotiation and regulatory compliance. Proven track record of mitigating legal <br /> risks and optimizing corporate governance. Skilled in M&A and {specialty}.</p>
                </div>
            </section>
            <section>
                <div className='flex gap-5 border rounded-lg border-[rgba(20,20,20,0.15)] p-6 m-5 '>
                    <div>
                        <img className='h-[350px] w-[300px]' src={image} alt="" />
                    </div>
                    <div>
                        <div>
                            <button className='bg-[rgba(23,106,229,0.1)] text-[#176AE5] rounded-full p-1'>{experience}+ experience </button>
                        </div>
                        <h1>{name}</h1>
                        <div className='flex gap-3.5'>
                            <button>{specialty}</button>
                            <button><span className='text-xl font-bold '>® </span> License No: {licenseNumber}</button>
                        </div>
                        <div className='flex items-center gap-2 flex-wrap mt-2'>
              <span className='font-semibold my-2'>Availability:</span>
              {availableDays.map((day, index) => (
                <span
                  key={index}
                  className='bg-orange-50 border border-orange-200 text-orange-500 px-3 py-1 rounded-xl text-sm font-medium'
                >
                  {day}
                </span>
              ))}
            </div>
            <h4>Consultation Fee:  <span className='text-[#0EA106]'>Taka {fees}</span></h4>
                      


                    </div>
                </div>
            </section>
            <section>
                <div className=' border border-[rgba(15,15,15,0.15)] p-5 m-5 rounded-2xl'>
                    <h1 className='text-center font-bold text-3xl'>Book an Appointment</h1>
                    <div className='flex justify-between '>
                        <h4 className='font-semibold'>Availability</h4>
                       <div className='border border-[rgba(9,152,47,0.1)] rounded-full' >
                       <button className='bg-[rgba(9,152,47,0.1)] text-[#09982F]  p-1'>Lawyer  Available Today</button>
                       </div>
                      
                    </div>
                    <p className='rounded-full bg-[rgba(255,160,0,0.1)] text-[#FFA000] p-0.5 text-center '>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
                    <div className='flex justify-center my-2'>
                        <button  onClick={ handleAppoint}className='bg-[#0EA106] text-white rounded-full px-8 py-1'>Book Appointment Now</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LawyersDetails;