import ContentCharts from '@/components/ContentCharts'
import React from 'react'
import DoughutChart from '@/components/DoughutChart'

export default function Page({params}) {
  return (
    <div>
        <ContentCharts  idTema={params.tema} idSerie={params.serie} Chart={DoughutChart}/>
    </div>
  )
}
