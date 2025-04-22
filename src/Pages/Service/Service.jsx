import React from 'react';
import './Service.css'
import CountUp from 'react-countup';

const Service = () => {
    return (
        <div>
         <div className='flex flex-col justify-center items-center'>
         <h1 className='font-bold text-[40px] text-center'>We Provide Best Law Services</h1>
         <p>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>
         </div>
         <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mx-10 my-3'>
            <div className='border border-[rgba(15,15,15,0.15)] bg-[rgba(15,15,15,0.05)] p-4 rounded-2xl'>
                <img src="/asset/success-doctor.png" alt="" />
               <div className='count-up'>
                <h1 className='font-bold'>
                <CountUp end={199} duration={1} />+

                </h1>
                
               </div>
               <p>Total Lawyer</p>

            </div>
            <div className='border border-[rgba(15,15,15,0.15)] bg-[rgba(15,15,15,0.05)] p-4 rounded-2xl'>
                <img src="/asset/success-review.png" alt="" />
                <div className='count-up'>
                <h1 className='font-bold'>
                <CountUp end={467} duration={2} />+

                </h1>
                
               </div>
                <p>Total Reviews</p>
            </div>
            <div className='border border-[rgba(15,15,15,0.15)] bg-[rgba(15,15,15,0.05)] p-4 rounded-2xl'>
                <img src="/asset/success-patients.png" alt="" />
                <div className='count-up'>
                <h1 className='font-bold'>
                <CountUp end={1990} duration={2} />+

                </h1>
                
               </div>
                <p>Cases Initiated</p>
            </div>
            <div className='border border-[rgba(15,15,15,0.15)] bg-[rgba(15,15,15,0.05)] p-4 rounded-2xl'>
                <img src="/asset/success-staffs.png" alt="" />
                <div className='count-up'>
                <h1 className='font-bold'>
                <CountUp end={399} duration={2} />+

                </h1>
                
               </div>
                <p>Total Stuffs</p>
            </div>
         </div>
        </div>
    );
};

export default Service;