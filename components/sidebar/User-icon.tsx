
import {LogOut} from 'lucide-react'

export function UserNav(){
    
    return(
        <>
       <div className="flex items-center justify-between p-1 bg-gray-100 rounded-xl w-64 shadow-md px-2">
  {/* Logout Icon */}
  <div className="flex items-center text-gray-600 cursor-pointer hover:text-red-500">
    <LogOut className='text-white bg-red-400 p-1 rounded-md' />
  </div>

  {/* User Details */}
  <div className="ml-4 text-end">
    <p className=" text-lg font-semibold text-red-600">John Wick S</p>
    <p className="text-sm  text-gray-900">Assistant professor</p>
  </div>

  {/* User Icon */}
  <div className="ml-4">
    <div className="w-10 h-10 rounded-full bg-red-400 flex items-center justify-center text-white font-bold">
      JW
    </div>
  </div>
</div>

        </>
        
    )
}