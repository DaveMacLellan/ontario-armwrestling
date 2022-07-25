import "./Gains.css"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'PR Lifts LBs',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Back Pressure',
        data: [80, 85, 95, 100, 110],
        borderColor: 'green',
        backgroundColor: 'lime',
      },
      {
        label: 'Side Pressure',
        data: [60, 70, 75, 78, 90],
        borderColor: 'teal',
        backgroundColor: 'aquamarine',
      },
      {
        label: 'Pronation',
        data: [40, 45, 55, 55, 60],
        borderColor: 'purple',
        backgroundColor: 'pink',
      },
    ],
  };

export default function Gains(){
    return(
      <div>
        <h1 className="gains-title">Lift Progress</h1>
        <div className="chart-container">
            <Line options={options} data={data} />
        </div>
      </div>        
    )
}