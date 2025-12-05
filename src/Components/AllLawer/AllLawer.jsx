import React from 'react';
import { useLoaderData } from 'react-router';
import Lawer from '../Lawer/Lawer';

const AllLawer = () => {
    const lawers = useLoaderData();
    console.log(lawers);
    return (
      <div>
        {lawers.map((lawer) => (
          <Lawer key={lawer.id} lawer={lawer}></Lawer>
        ))}
      </div>
    );
};

export default AllLawer;