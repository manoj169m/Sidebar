import { BellRing } from "lucide-react";





export function Notification(){

    return(
    <div className=" p-2 bg-gray-100 rounded-xl shadow-md py-3 px-3 flex bg-gray-100 rounded-xl shadow-md">
      <button className="relative text-red-500 hover:text-gray-900 items-center focus:outline-none">
      <BellRing className="w-6 h-6" /> {/* Notification icon */}
      <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-green-500"></span> {/* Notification badge */}
    </button>
    </div>
    )
}