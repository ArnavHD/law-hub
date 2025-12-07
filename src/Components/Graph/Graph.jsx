import React from "react";
import { CartesianGrid, Cell, ResponsiveContainer } from "recharts";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
// import { getPath } from 'recharts/types/shape/Curve';

const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  }, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
   Z`;

// const getPath = (x, y, width, height) =>
//   `M${x},${y + height}
//    L${x + width},${y + height}
//    L${x + width / 2},${y}
//    Z`;

export function TriangleBar(props) {
  const { fill, x, y, width, height } = props;

  if (x == null || y == null || width == null || height == null) {
    // recharts types demand that JSX.Element is returned, even if nothing is rendered
    
    return <></>;
  }

  return (
    <path
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke="none"
      fill={fill}
    />
  );
}

const Graph = ({ chartData }) => {
  console.log("From graph", chartData);
//   const { name, fee } = lawer;
//   const data = [{ name: name, fee: fee }];
const colors = ["#8894d8", "#82ca9d", "#ffc658", "#ff8042"];

  return (
    <div className="w-full p-12 border border-[rgba(20,20,20,0.15)] rounded-2xl mt-8 mb-24">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          margin={{ top: 5, right: 20, left: 10, bottom: 20 }}
        >
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip formatter={(value) => `$${value}`} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="fee" shape={<TriangleBar />}>
            {chartData.map((entry, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
