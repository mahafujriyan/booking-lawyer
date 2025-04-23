import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,Cell } from 'recharts';


    
     
      

const Rechart = ({ appoints }) => {
  console.log(appoints)

  const ChartBar = (props) => {
    const { x, y, width, height, fill } = props;
     const path =
     
       `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;
    
  
    return <path d={path} fill={fill} />;
  };
  const COLORS = ['#1E90FF', '#FFA500', '#00C49F', '#FF8042', '#8884d8', '#FF6363', '#4CAF50'];
  const chartData = appoints.map((appoint, index) => ({
    name: appoint.name,
    fees: parseInt(appoint.fees),
    fill: COLORS[index % COLORS.length], 
  }));
  if (chartData.length === 0) return null; 



     
      
      
    return (

      <div className=" mt-5 p-6 w-full h-[600px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis domain={[1000,10000]} ticks={[0,1000, 2000,3000, 4000,5000, 6000, 7000,8000,9000, 10000]} />
          <Tooltip />
          <Bar
            dataKey="fees"
            shape={<ChartBar />}
            label={{ position: 'top' }}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
        
    );
};

export default Rechart;

