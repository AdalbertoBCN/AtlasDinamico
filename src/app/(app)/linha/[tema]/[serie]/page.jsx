import ContentCharts from '@/components/ContentCharts'
import React from 'react'
import LineChart from '@/components/LineChart'

export default function Page({params}) {
  return (
    <div>
        <ContentCharts  idTema={params.tema} idSerie={params.serie} Chart={LineChart}/>
    </div>
  )
}
