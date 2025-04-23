import React from 'react';
import {  useNavigate, useRouteError } from 'react-router';

const DynamicError = () => {
    const error=useRouteError()
    const navigate=useNavigate()

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1>No Lawyer Found</h1>
            
                
            <p>
                {
                    error?.status===404?error.statusText||'No Lawyer Found with this Id': 'Something went wrong. Please try again.'
                }
            </p>
           
             <div className='my-2 rounded-2xl'>
                <button onClick={()=>navigate('/')}  className='bg-emerald-400 text-white p-1 '>Go Back to Home</button>
             </div>
        </div>
    );
};

export default DynamicError;