import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const blogs=useLoaderData()
    console.log(blogs)

    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold'>Blogs</h1>
            <p>Let's explore some basic concept that will make you a good developer</p>
            </div>
            <div className="grid grid-cols-1 gap-4  mx-10 my-5">
        {blogs.map((blog) => (
          <Blog blog={blog} />
        ))}
      </div>

            
        </div>
    );
};

export default Blogs;