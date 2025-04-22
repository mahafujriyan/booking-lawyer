import React from 'react';
import { Link } from 'react-router';

const Card = ({Lawyer}) => {
  const{experience,image,licenseNumber,name, 
    specialty,id
  }=Lawyer;
    return (
        <div className="w-full max-w-sm bg-white rounded-xl shadow-md p-4 mx-10">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-300 rounded-md">
            <img src={image} alt="" />
          </div>
          <div>
            <div className='flex justify-center items-center gap-3'>
              <div className='rounded-full bg-[rgba(9,152,47,0.1)] text-[#09982F] px-2'><button>Available</button></div>
              <div className='text-[#176AE5] rounded-full bg-[rgba(23,106,229,0.1)] p-1.5'><button>{experience}</button></div>
            </div>
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-sm text-gray-500">{specialty}</p>
            <p className="text-sm text-gray-400">License No: {licenseNumber}</p>
          <div className='my-2'>
            <Link to={`/lawyers-details/${id}`}>
            <button className='text-[#176AE5]
            rounded-full border bg-[rgba(23,106,29,0.2)] p-1 '>
            View Details
            </button>
            </Link>
          </div>
          </div>
        </div>
      </div>
)};

export default Card;