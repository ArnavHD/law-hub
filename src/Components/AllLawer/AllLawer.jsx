import React from 'react';
import { useLoaderData } from 'react-router';
import Lawer from '../Lawer/Lawer';

const AllLawer = () => {
    const lawers = useLoaderData();
    console.log(lawers);
    return (
      <div className="grid grid-cols-2 gap-16">
        {lawers.map((lawer) => (
          <Lawer key={lawer.id} lawer={lawer}></Lawer>
        ))}
        <button className="btn col-span-2 w-52 py-6 px-8 rounded-3xl mx-auto text-[18px] bg-[#0EA106] text-white">
          Show All Lawers
        </button>
      </div>
    );
};

export default AllLawer;