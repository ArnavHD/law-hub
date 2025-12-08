import React from 'react';
import { useLoaderData } from 'react-router';
import Graph from '../Graph/Graph';

const Graphs = ({ lawerInLocal, yesNo }) => {
  const data = useLoaderData();
  // console.log(data);
  const lawers = data.filter((lawer) => lawerInLocal.includes(lawer.id));
//   console.log(lawers);

  const chartData = lawers.map((lawer) => ({
    name: lawer.name,
    fee: lawer.fee,
  }));
  // console.log(chartData);

  return <div>{<Graph yesNo={yesNo} chartData={chartData}></Graph>}</div>;
};

export default Graphs;