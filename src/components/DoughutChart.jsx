"use client"
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

export default function LineChart({ chartData }) {
  return (
    <Doughnut data={chartData} style={{width: "800px"}}/>
  )
}
