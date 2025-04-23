import React, {  useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Booking from '../Booking/Booking';
import { getAppoint } from '../../Utility/Index';
import Rechart from '../../Pages/Rechart/Rechart';
import NoData from '../../Pages/NoData/NoData';



const Bookings = () => {
    const booksData=useLoaderData()
   
   
     const[appoints,setAppoints]=useState([])
    useEffect(()=>{
       const bookingsAppoint=getAppoint()
       setAppoints(bookingsAppoint)
       

    },[])

  
    const handleCancel=(id)=>{
       
        const singleAppoints =appoints.filter(a => a.id !== id);
        setAppoints(singleAppoints)
       

    }


 

    return (
        <div>
            <div>
              <Rechart appoints={appoints}/>

            </div>
            <div className='flex flex-col justify-center items-center text-center my-10'>
                {
                appoints.length>0?(<span>
                     <h1 className='text-2xl' > My Today Appointments</h1> <p>Our platform contacts you with verified experience lawyer across various specialty -all at your convenience</p>
                </span>)  
                :(<NoData></NoData>)
               }
            
             
        
             
            
              
               
            </div>
            <div>
                {
                    appoints.length>0?(
                        appoints.map((appoint)=><Booking appoint={appoint} key={appoint.id} onCancel={handleCancel} ></Booking>)
                    ):''
                }
            </div>
           
        </div>
    );
};

export default Bookings;