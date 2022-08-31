import React, { useState, useEffect } from 'react'
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement
)

const Graph = () => {

  const [chart, setChart ] = useState([])

  const baseUrl = "https://api.coinranking.com/v2/coins?limit=10"
  const proxyUrl = "https://cors-anywhere.herokuapp.com/"
  const apiKey = "coinrankingf31c257872c1a1e1fa4fa838bb087cc27e342b8f1a86f1e6"

  // BEFORE CHECKING YOU HAVE DATA IN CONSOLE! Go to https://cors-anywhere.herokuapp.com/corsdemo & click Request Temporary Access

  //ProxyUrl is to allow CORS in browser when fetching

  useEffect(() => {
    const fetchCoins = async () => {
      await fetch(`${proxyUrl}${baseUrl}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': `${apiKey}`,
          'Access-Control-Allow-Origin': '*'
        }
      }).then((response) => [
        response.json().then((json) => {
          console.log(json.data)
          setChart(json.data)
        })
      ]).catch(error => {
        console.log(error);
      })
    }
    fetchCoins()
  }, [baseUrl, proxyUrl, apiKey])

  const data = {
    labels: chart?.coins?.map(x => x.name),
    datasets: [{
        label: `${chart?.coins?.length} Coins Available`,
        data: chart?.coins?.map(x => x.price),
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
}

  var options = {
    maintainAspectRatio: false,
    responsive:true,
      scales: {
          y: {
              beginAtZero: true
          }
      },
      legend: {
        labels: {
          fontSize: 26
        }
      }
  }



  return (
    <Line
      data={data}
      options={options}
    />
  )
}

export default Graph
