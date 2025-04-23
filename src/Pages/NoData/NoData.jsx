import React from 'react';
import { useNavigate } from 'react-router';

const NoData = () => {
    const navigate=useNavigate()
    const handleGoHome=()=>{
        navigate('/')
    }
    return (
        <div>
            <h1 className='font-bold text-2xl '>You have not booked any appoint yet </h1>
            <p className='my-5'>Our platform contacts you with verified experience lawyer across various specialty -all at your convenience</p>
            <div>
            <button onClick={handleGoHome} className='bg-emerald-400 text-white p-1 ' >Go Back Home</button> 
            
            </div>

        </div>
    );
};

export default NoData;