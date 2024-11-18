import React, { ReactNode } from 'react'
import { SidebarProvider } from '../ui/sidebar'
import Content from './Content-layout'
import { AppSidebar } from './AppSidebar'

export default function AdminLayout({children}:{children?:ReactNode}) {
  return (
    <>
    <SidebarProvider className='bg-slate-200'>
    <AppSidebar/>
    <Content>
        {children}

     </Content>
    </SidebarProvider>

      
    </>
  )
}
