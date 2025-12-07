import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Lawer from "../Lawer/Lawer";

const AllLawer = () => {
  const [showAll, setShowAll] = useState(false);
  const lawers = useLoaderData();
  let listItem;

  if (showAll) {
    listItem = lawers;
    console.log(listItem);
  } else {
    listItem = lawers.slice(0,6);
    // console.log(listItem);
  }

  // console.log(lawers);
  return (
    <div className="grid grid-cols-2 gap-16 mb-24">
      {listItem.map((lawer) => (
        <Lawer key={lawer.id} lawer={lawer}></Lawer>
      ))}

      <button
        onClick={() => setShowAll(!showAll)}
        className="btn col-span-2 w-auto py-6 px-8 rounded-3xl mx-auto text-[18px] bg-[#0EA106] text-white"
      >
        {showAll ? "Show Less Lawers" : "Show All Lawers"}
      </button>
    </div>
  );
};

export default AllLawer;
