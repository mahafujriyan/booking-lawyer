import React from 'react';

const ErrorPages = () => {
    return (
        <div className=' flex flex-col justify-baseline items-center text-center  '>
            <div>
                <img src="/asset/error.jpeg" alt="" />
                <h1 className='text-3xl text-red-500 font-bold'>404-Page-Not-Found</h1>
                <p>opps! The page  you are looking for does not exist</p>
                <button className='bg-emerald-400 text-white p-1 ' >Go Back Home</button>
            </div>
        </div>
    );
};

export default ErrorPages;