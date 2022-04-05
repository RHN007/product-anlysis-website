import React from 'react';

import { LineChart, Line, XAxis, YAxis, Tooltip,BarChart, Bar ,Legend,CartesianGrid } from 'recharts';

const Dashboard = () => {
   
    const data = [
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    }
]
   
   
   
    return (
        <div>
               <section className='flex justify-center content-center align-middle'>
                   
                   
                 <div className='w-1/2 p-15 m-14'>
                     <LineChart width={400} height={500} data={data}>

                    <Line dataKey = {'investment'} fill="#FF6347"></Line>
                    <Line dataKey = {'sell'} fill="#82ca9d"></Line>
                    <Line dataKey = {'revenue'} fill="#8884d8"></Line>
                    <XAxis dataKey = {'month'}></XAxis>
                     <YAxis  YAxis dataKey = {'investment'} fill="#FF6347"></YAxis>
                
                <Tooltip></Tooltip>
                
            </LineChart>
                   
                   
                   </div>
                   
     <div className='w-1/2 m-14 '>
                      <BarChart
                         width={500}
                         height={300}
                         data={data}
                        margin={{
                         top: 5,
                         right: 30,
                     left: 20,
                     bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={'month'} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={'investment'} fill="#8884d8" />
          <Bar dataKey={'sell'}fill="#82ca9d" />
          <Bar dataKey={'revenue'}fill="#82ca9d" />
        </BarChart>

                   </div>
                   
                   </section>
               
              
        </div>
    );
};

export default Dashboard;