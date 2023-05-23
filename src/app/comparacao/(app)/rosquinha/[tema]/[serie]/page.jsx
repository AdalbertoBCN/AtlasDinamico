import ContentCompCharts from '@/components/ContentCompCharts'
import React from 'react'
import DoughutChart from '@/components/DoughutChart'

export default function Page({params}) {
  return (
    <div>
        <ContentCompCharts  idTema={params.tema} idSerie={params.serie} Chart={DoughutChart}/>
    </div>
  )
}
