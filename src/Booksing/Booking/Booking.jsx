import React from 'react';
import { removeAppoint } from '../../Utility/Index';

const Booking = ({ appoint, onCancel }) => {
    const{name,fees,specialty,id}=appoint;
    const handleCancel=()=>{
        removeAppoint(id)
        onCancel(id)
    }



 

    return (
        <div>
            <div className=' border border-[rgba(15,15,15,0.05)]  mx-10 my-3 p-4 rounded-2xl'>
                <div className='flex justify-between items-center my-4 border-b border-gray-200 border-dashed '>
                <div>
                    <h1 className='font-bold '>{name}</h1>
                    <h4>{specialty} Expert</h4>

                </div>
                <div>
                    <h4>Appointment fee: {fees}</h4>

                </div>

                </div>
                <div className='flex justify-center items-center border border-red-200 rounded-full p-0.5 text-red-500 '>
                <button onClick={handleCancel}>Cancel Appointment</button>
            </div>
            </div>
           
            
        </div>
    );
};

export default Booking;