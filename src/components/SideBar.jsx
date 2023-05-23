"use client"
import React from 'react'
import ToggleContent from './ToggleContent';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SideBar({series}) {
  const pathname = usePathname();
  const baseUrl = pathname.match(/(^\S*)\/\d*\/\d*$/)[1];

  return (
    <div className='w-[300px] h-5/6'>
      <div className='h-16 text-zinc-900 flex items-center justify-center text-lg text-bold border-[1px] border-black'>
        <Link href="/">Logo</Link>
      </div>
      <div className='w-[300px] h-full overflow-y-auto p-3 border-[1px] border-black'>
        {series.map(tema => {
          return (
            <div key={tema.id}>
              <ToggleContent textButton={tema.title}>

                {tema.series.map(serie =>

                  <div key={serie.id} title={serie.titulo} className='text-[11px] whitespace-nowrap overflow-hidden text-ellipsis'>

                    <Link href={`${baseUrl}/${tema.id}/${serie.id}`}>

                      {serie.titulo}

                    </Link>

                  </div>)}

              </ToggleContent>
            </div>
          )

        })}
      </div>
    </div>
  )
}
