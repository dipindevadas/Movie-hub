import { FaPlay, FaRegHeart } from "react-icons/fa";
import Banner from '../assets/banner.svg'

export const Featured = () => {
 return (
     <div   className="h-[500px] pt-[96px] bg-cover bg-center flex flex-col justify-center px-6 text-white relative"
      style={{
        backgroundImage: `linear-gradient(0deg, #191817 -4.62%, rgba(0, 0, 0, 0) 45.9%), url(${Banner})`
      }}>
    <h2 className="text-[48px] font-bold mb-2">Insider</h2>
    <p className="mb-4">2022 | Comedy horror | 1 Season</p>
    <div className="flex space-x-4">
      <button className="bg-purple-600 px-6 py-4.5 rounded-[14px] text-white flex items-center gap-2"><FaPlay /> Watch now</button>
      <button className="p-3.5 px-6 rounded-[14px]" style={{background: 'linear-gradient(98.85deg, #FFFFFF 3.36%, rgba(255, 255, 255, 0) 238.16%)'}}><FaRegHeart className="text-purple-600" /></button>
    </div>
  </div>
 )
}

