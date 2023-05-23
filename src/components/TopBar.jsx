"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link'

export default function TopBar() {
  
  const pathname = usePathname();

  const finishUrl = pathname.match(/\d*\/\d*$/)[0];
  const baseUrl = pathname.match(/\w*\/\d*\/\d*$/)[0];

  const linhaUrl = pathname.includes('comparacao')
    ? `/comparacao/linha/${finishUrl}`
    : `/linha/${finishUrl}`;

  const colunaUrl = pathname.includes('comparacao')
    ? `/comparacao/coluna/${finishUrl}`
    : `/coluna/${finishUrl}`;

  const comparacaoUrl = pathname.includes('comparacao')
    ? `/${baseUrl}`
    : `/comparacao/${baseUrl}`;

  return (
    <div className='h-16 p-5 border-[1px] border-black'>
        <div className='flex h-full items-center justify-between'>
          <div className='flex gap-4'>
          <div>
            <Link href={colunaUrl}>Coluna</Link>
          </div>

          <div>
            <Link href={linhaUrl}>Linha</Link>
          </div>
          </div>

          <div>
            <Link href={comparacaoUrl}>Comparação</Link>
          </div>
        </div>
      </div>
  )
}
