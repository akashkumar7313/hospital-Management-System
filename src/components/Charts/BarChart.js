import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

const BarChart = () => {
    const [basicData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Expenses',
                backgroundColor: '#42A5F5',
                data: [6500, 5900, 8000, 8100, 5600, 5500, 4000, 8100, 5600, 5500,]
            },
            {
                label: 'Sales',
                backgroundColor: '#FFA726',
                data: [2800, 4800, 4000, 1900, 8600, 2700, 9000, 2800, 8600, 2800, ]
            }
        ]
    });

    const getLightTheme = () => {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .7,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    },
                    suggestedMin: 0, // Set the minimum value for the Y-axis
                    suggestedMax: 10000, // Set the maximum value for the Y-axis
                }
            }
        };

        return {
            basicOptions
        }
    }

    const { basicOptions } = getLightTheme();

    return (
        <div>
            <div className="card p-2">
                <Chart type="bar" data={basicData} options={basicOptions} />
            </div>
        </div>
    )
}

export default BarChart;
