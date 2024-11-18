import React, { ReactNode } from 'react'
import { SidebarInset } from '../ui/sidebar'
import Navbar from './Navbar'


export default function Content({children}:{children?:ReactNode}) {
  return (
    <>
        <SidebarInset className='bg-rose-50'>
            <Navbar/>
            {children}

        </SidebarInset>
      
    </>
  )
}
