import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';


const Cards = ({data}) => {
const[displayCard,setDisplayCard]=useState([])
const[showAll,setShowAll]=useState(false)
useEffect(()=>{
   if(showAll){
    setDisplayCard(data)
   }
   else{
    setDisplayCard(data.slice(0,6))
   }
},[data,showAll])
    return (
        <div className='py-10'>
           <div className='flex flex-col justify-center items-center  text-center'>
           <h1 className='font-bold text-[40px]
           p-2'>Our Best Lawyers</h1>
           <p>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a  <br />routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>

           </div>
            <div  className='grid grid-cols-1 md:grid-cols-2  gap-3 my-2 px-10 justify-center items-center'>
                {
                   displayCard.map(Lawyer=> <Card Lawyer={Lawyer} key={Lawyer.id}  ></Card>)
                }



            </div>
            <div className=' flex justify-center  '>
                <button onClick={()=>{setShowAll(prv=>!prv)
                    if(showAll) window.scrollTo(0,400)

                    
                }} className="bg-[#0EA106] text-white px-6 py-2 rounded-full hover:bg-amber-400">
                    <span>{showAll?'Show less':'Show All'}</span>
                </button>
            </div>
           
        </div>
    );
};

export default Cards;