import React from 'react'

type MovieCardProps ={
  src: string,
  alt: string
}

const MovieCard = ({src, alt}: MovieCardProps) => {
  console.log(src)
  return (
    <div className=' rounded-[20px] shadow-2xl overflow-clip'>

<img className='object-cover object-top' src={`https://image.tmdb.org/t/p/w500${src}`} alt={alt}/>
    </div>
  )
}

export default MovieCard