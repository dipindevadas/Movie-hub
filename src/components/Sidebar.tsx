import React from 'react'
import { Link } from 'react-router-dom'
import { FiHome, FiHeart, FiTrendingUp, FiCalendar, FiUsers, FiMessageCircle, FiSettings, FiLogOut } from "react-icons/fi";
import { FaPlay, FaRegHeart } from "react-icons/fa";
import coffee from '../assets/coffee.svg'

const Sidebar = () => {
  return (
   <aside className="w-64 min-w-64 bg-[#21201E] text-white h-screen p-6 flex flex-col justify-between shadow-[2px 0px 90px 0px #6100C266
]">
    <div>
     <div className='flex items-center gap-2 mb-12 mt-0'>
      <img src={coffee}/>
       <h1 className="text-2xl font-bold"> WATCH</h1>
     </div>

      <nav className="flex flex-col space-y-8 text-[14px]">
        <Link to="/" className="flex items-center gap-2 text-[14px]"><FiHome /> Home</Link>
        <Link to="/favourites" className="flex items-center gap-2 text-[14px]"><FiHeart /> Favourites</Link>
        <Link to="/trending" className="flex items-center gap-2 text-[14px]"><FiTrendingUp /> Trending</Link>
        <Link to="/coming-soon" className="flex items-center gap-2 text-[14px]"><FiCalendar /> Coming soon</Link>
        <Link to="/movies/create" className="flex items-center gap-2 text-[14px]"><FiUsers /> Create New</Link>
        <Link to="/social" className="flex items-center gap-2 text-[14px]"><FiMessageCircle /> Social</Link>
      </nav>
    </div>
    <div className="flex flex-col space-y-6 text-[14px]">
      <Link to="/settings" className="flex items-center gap-2 "><FiSettings /> Settings</Link>
      <Link to="/logout" className="flex items-center gap-2"><FiLogOut /> Logout</Link>
    </div>
  </aside>
  )
}

export default Sidebar