import React, { useState } from 'react';


const Blog = ({blog}) => {
    const { question, answer } = blog || {};

    return (
        <div className='border border-[rgba(15,15,15,0.1)] bg-[rgba(15,15,15,0.05)] p-2'>
            <h1 className='font-bold'>{question}</h1>
            <p>{answer}</p>
        </div>
    );
};

export default Blog;