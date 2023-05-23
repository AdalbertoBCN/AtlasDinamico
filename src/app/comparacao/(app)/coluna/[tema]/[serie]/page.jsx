import React from 'react'
import BarChart from '@/components/BarChart'
import ContentCompCharts from '@/components/ContentCompCharts'

export default function Page({params}) {
  return (
    <div>
        <ContentCompCharts  idTema={params.tema} idSerie={params.serie} Chart={BarChart}/>
    </div>
  )
}
