import React from 'react'

type TrailerProps={
    img : string
}
const Trailer = ({img}: TrailerProps) => {
  return (
   <div className=''>
     <div className='w-1/2 h-52 mt-8 rounded-2xl overflow-clip fixed right-8 bottom-8'>
       <img className='object-cover object-top' src={`https://image.tmdb.org/t/p/w500${img}`}/>
    </div>
   </div>
  )
}

export default Trailer