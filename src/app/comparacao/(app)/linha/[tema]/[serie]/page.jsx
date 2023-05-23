import React from 'react'
import LineChart from '@/components/LineChart'
import ContentCompCharts from '@/components/ContentCompCharts'

export default function Page({params}) {
  return (
    <div>
        <ContentCompCharts idTema={params.tema} idSerie={params.serie} Chart={LineChart}/>
    </div>
  )
}
