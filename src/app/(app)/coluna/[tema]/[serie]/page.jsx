import ContentCharts from '@/components/ContentCharts'
import React from 'react'
import BarChart from '@/components/BarChart'

export default function Page({params}) {
  return (
    <div>
        <ContentCharts  idTema={params.tema} idSerie={params.serie} Chart={BarChart}/>
    </div>
  )
}
