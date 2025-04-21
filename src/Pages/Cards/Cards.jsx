import React from 'react';
import Card from '../Card/Card';


const Cards = ({data}) => {
console.log(data)
    return (
        <div className='py-10'>
           <div className='flex flex-col justify-center items-center  text-center'>
           <h1 className='font-bold text-[40px]
           p-2'>Our Best Lawyers</h1>
           <p>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a  <br />routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>

           </div>
            <div  className='grid grid-cols-1 md:grid-cols-2  gap-3 my-2 px-10fr65 justify-center items-center'>
                {
                   data.map(Lawyer=> <Card Lawyer={Lawyer} key={Lawyer.id}  ></Card>)
                }



            </div>
            <div className=' flex justify-center  '>
                <button className="bg-[#0EA106] text-white px-6 py-2 rounded-full hover:bg-amber-400">Show All Lawyer</button>
            </div>
           
        </div>
    );
};

export default Cards;