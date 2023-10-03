
import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

const PieChart = () => {
  const [chartData] = useState({
    labels: ['CBC Blood Complete Examination(91)',
      'Differential Leucicytes Count(53)',
      'Differential Count(40)',
      'Rota Virous(16)',
      'Rota Virous LgG(14)'
    ],
    datasets: [
      {
        data: [400, 200, 200, 100, 100],
        backgroundColor: [
          "#0074D9",
          "#FE4236",
          "#2ECC41",
          "#FF841A",
          "#7FDBFF",
        ],
        hoverBackgroundColor: [
          "#0074D9",
          "#FE4236",
          "#2ECC41",
          "#FF841A",
          "#7FDBFF",
        ]
      }
    ]
  });

  const [lightOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: '#495057'
        }
      }
    }
  });

  return (
    <div className="px-20 py-5 w-[100%] ">
      <Chart type="pie" data={chartData} options={lightOptions} style={{ position: 'relative', }} />
    </div>
  )
}

export default PieChart;
