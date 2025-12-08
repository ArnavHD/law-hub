import React from 'react';
import { FaCalendarDays } from 'react-icons/fa6';

const Blog = ({singleBlog}) => {
    const { question, answer } = singleBlog;
    return (
      <div className="p-8 bg-white mb-7 rounded-xl mx-40">
        <h2 className="mb-4 text-2xl font-bold">{question}</h2>
        <div className=" border border-dashed border-gray-400"></div>
        <div className="mt-4 mb-4">
          <span className="text-[#09982F] text-[17px]">Answer:</span>
          <br />
          <h3 className="text-[18px]">{answer}</h3>
        </div>
        <div className=" border border-dashed border-gray-400"></div>
        <p className="flex items-center gap-2 mt-3 text-[17px]">
          <FaCalendarDays size={25} />
          Added at 2025-12-07
        </p>
      </div>
    );
};

export default Blog;