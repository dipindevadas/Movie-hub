import React, { useEffect, useState } from "react";
import type { Movies } from "../types/Types";
 // Adjust the import path if needed

type MovieFormProps = {
  onSubmit: (movieData: any) => void;
  isDefaultData?: Movies,
  isEdit?: boolean
  
};

const MovieForm = ({onSubmit, isDefaultData, isEdit}:MovieFormProps) => {
 const [movieData, setMovieData] = useState<Partial<Movies>>({
    title: '',
    original_title: '',
    overview: '',
    release_date: '',
    vote_average: 0,
    vote_count: 0,
    original_language: '',
    poster_path: '',
    isCreated: true
 })

 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(movieData);
   
  };

  useEffect(()=>{
    if(isDefaultData){
      setMovieData(isDefaultData)
    }
  },[isDefaultData])

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 text-black"
    >
      <h2 className="text-2xl font-bold mb-4">{isEdit ? 'Edit Movie' : 'Add New Movie'}</h2>

      <input
        type="text"
        name="title"
        value={movieData.title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMovieData({ ...movieData, title: e.target.value })}
        placeholder="Title"
        className="w-full border border-gray-300 p-2 rounded-xl"
      />

      <input
        type="text"
        name="original_title"
        value={movieData.original_title}
       onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setMovieData({...movieData,original_title:e.target.value})}
        placeholder="Original Title"
        className="w-full border border-gray-300 p-2 rounded-xl"
      />

      <input
        type="text"
        name="original_language"
        value={movieData.original_language}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setMovieData({...movieData,original_language:e.target.value})}
        placeholder="Original Language"
        className="w-full border border-gray-300 p-2 rounded-xl"
      />

      <textarea
        name="overview"
        value={movieData.overview}
        onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=>setMovieData({...movieData,overview:e.target.value})}
        placeholder="Overview"
        className="w-full border border-gray-300 p-2 rounded-xl h-32"

      />

      <input
        type="date"
        name="release_date"
        value={movieData.release_date}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setMovieData({...movieData,release_date:e.target.value})}
        placeholder="Release Date"
        className="w-full border border-gray-300 p-2 rounded-xl"
      />

      <input
        type="number"
        name="vote_average"
        value={movieData.vote_average}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setMovieData({...movieData,vote_average:parseInt(e.target.value)})}
        placeholder="Vote Average"
        className="w-full border border-gray-300 p-2 rounded-xl"
      />

      <input
        type="number"
        name="vote_count"
        value={movieData.vote_count}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setMovieData({...movieData,vote_count:parseInt(e.target.value)})}
        placeholder="Vote Count"
        className="w-full border border-gray-300 p-2 rounded-xl"
      />


      
      <input
        type="text"
        name="poster_path"
        value={movieData.poster_path}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setMovieData({...movieData,poster_path:e.target.value})}
        placeholder="Image URL"
        className="w-full border border-gray-300 p-2 rounded-xl"
      />




      <button
        type="submit"
        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
      >
        Submit
      </button>
    </form>
  );
};

export default MovieForm;
