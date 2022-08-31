import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function History() {

  let [uncompletedDays, setUncompletedDays] = useState(0)
  let [completedDays, setCompletedDays] = useState(0)
  let [activeTonnage, setTonnage] = useState([])

  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  let data = [
    { userid: 1, date: '29/08/2022', dayName: 'Monday', exercise: 'bench press', sets: 5, reps: 5, weight: 20, status: true },
    { userid: 1, date: '29/08/2022', dayName: 'Monday', exercise: 'bicep curls', sets: 5, reps: 5, weight: 20, status: true },
    { userid: 1, date: '29/08/2022', dayName: 'Monday', exercise: 'tricep extensions', sets: 5, reps: 5, weight: 20, status: true },
    // { userid: 1, date: '30/08/2022', dayName: 'Tuesday', exercise: 'bench press', sets: 5, reps: 5, weight: 20, status: true },
    // { userid: 1, date: '30/08/2022', dayName: 'Tuesday', exercise: 'bench press', sets: 5, reps: 5, weight: 20, status: false },
    { userid: 1, date: '03/08/2022', dayName: 'Monday', exercise: 'bench press', sets: 5, reps: 5, weight: 20, status: true },
    { userid: 1, date: '03/08/2022', dayName: 'Monday', exercise: 'bicep curls', sets: 5, reps: 5, weight: 20, status: false },
    { userid: 1, date: '03/08/2022', dayName: 'Monday', exercise: 'tricep extensions', sets: 5, reps: 5, weight: 20, status: false },
    // { userid: 1, date: '03/08/2022', dayName: 'Monday', exercise: 'bench press', sets: 5, reps: 5, weight: 20, status: false },
    // { userid: 1, date: '04/08/2022', dayName: 'Tuesday', exercise: 'bench press', sets: 5, reps: 5, weight: 20, status: true },
    // { userid: 1, date: '04/08/2022', dayName: 'Tuesday', exercise: 'bench press', sets: 5, reps: 5, weight: 20, status: false },

  ]


  function getTonnage(data, exercise) {
    let arr = []
    let tonnage = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].exercise == exercise) {
        tonnage += (data[i].weight * data[i].reps * data[i].sets)
      }
    }
    arr.push(tonnage)
    setTonnage(arr)
  }



  function consistency(data) {
    let completedDay = 0;
    let uncompletedDay = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].status) {
        // setCompletedDays((completedDays) => completedDays + 1)
        completedDay++;
      }
      else {
        // setUncompletedDays((uncompletedDays) => uncompletedDays + 1);
        uncompletedDay++
      }
    }
    setCompletedDays(completedDay)
    setUncompletedDays(uncompletedDay)
  }

  useEffect(() => {
    consistency(data)
    console.log({ completedDays })
    console.log({ uncompletedDays })
  }, [])

  useEffect(() => {
    getTonnage(data, 'bench press')
    console.log({ activeTonnage })
  }, [])

  useEffect(() => {
    setChartData({
      labels: ["Bench Press", "Bicep Curls", "Tricep extensions"],
      datasets: [
        {
          label: "Exercise",
          data: [3000, 1000, 2000],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.4)",
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Tonnage",
        },
      },
    });
  }, []);

  return (
    <div className='container'>
      <div className='text-center'>
        <h1>History</h1>
        <div>
          {completedDays}
        </div>
        <div>
          {uncompletedDays}
        </div>
        <div>
          {activeTonnage}
        </div>
      </div>
      <div>
      <div>
          <Bar options={chartOptions} data={chartData} />
        </div>
      </div>
    </div>
  )
}
