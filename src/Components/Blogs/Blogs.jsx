import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from '../Blog/Blog';
import Navbar from '../Navbar/Navbar';

const Blogs = () => {
    const data_blogs = useLoaderData();
    console.log(data_blogs);
    return (
        <div className='bg-gray-100 pb-10'>
            <Navbar></Navbar>
            <div className='text-center'>
                <h1 className='text-4xl font-bold mb-7 mt-10'>Blogs</h1>
                <p className='mb-16 text-gray-500'>Let's explore some basic concept that will make you a good developer</p>
            </div>
            {
                data_blogs.map(singleBlog=> <Blog  singleBlog={singleBlog}></Blog>)
            }
        </div>
    );
};

export default Blogs;