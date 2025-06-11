
import {  FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";


type CardProps={
   data:{
    id: number,
    poster_path: string,
    original_title: string,
    release_date: string,
    vote_average: number,
    isCreated?: boolean

   }

}


    const TrendingCard = ({ data}: CardProps) => {

    
        return (
  <Link to={`/movies/${data.id}`} key={data.id} className="bg-gray-800 rounded-[20px] shadow-lg overflow-hidden text-white relative border border-[#757474] h-[360px] cursor-pointer">
    <img src={data.isCreated ? data.poster_path : `https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.original_title} className="w-full h-full object-cover object-top" />
    <div className="absolute top-3 right-3 bg-black bg-opacity-60 p-2.5 bg-[linear-gradient(100.38deg,_#FFFFFF_12.94%,_rgba(255,255,255,0)_159.1%)] rounded-[10px]">
      <FaRegHeart className="text-purple-500" />
    </div>
    <div className="absolute bottom-0 w-full p-6  backdrop-blur-md bg-[linear-gradient(100.38deg,_#FFFFFF_12.94%,_rgba(255,255,255,0)_159.1%)]  

">
      <h3 className="font-semibold text-black line-clamp-1">{data.original_title}</h3>
      <p className="text-sm text-black">{data.release_date} | {data.vote_average}</p>
    </div>
  </Link>
);
  
}

export default TrendingCard

