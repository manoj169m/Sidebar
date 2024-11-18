import React from 'react'
import { SidebarTrigger } from '../ui/sidebar'
import { Separator } from '@radix-ui/react-separator'
import { UserNav } from './User-icon'
import { Notification } from './Notification'

export default function Navbar() {
  return (
    <header className="flex h-16 p-8 shrink-0 text-gray-800  bg-rose-50 items-center justify-between gap-2 px-4 transition-[width,height] ease-linear
     group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12  ">
    {/* Left side: Sidebar trigger */}
    <div className="flex items-center gap-2">
    <SidebarTrigger className="-ml-1 h-10 w-8" />
    <Separator orientation="vertical" className="mr-2 h-4" />
    </div>
    <div className="flex items-center gap-2">

    <h1 className='text-white font-bold hidden text-md md:block'> ABC SCHOOL</h1>
    <h1 className='text-white font-bold text-sm md:hidden'> ABC</h1>

    <Separator orientation="vertical" className="mr-2 h-4" />
    </div>
  
    {/* Right side: Notification button and avatar */}
    <div className="flex items-center gap-4">
      {/* Notification button */}
      <Notification/>
  
      {/* User avatar */}
     <UserNav/>
    </div>
  </header>
  )
}
