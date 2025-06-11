import axios from 'axios'
import toast from 'react-hot-toast';
import type { Movies } from '../types/Types';

const BASE_URL = 'http://localhost:4000/Movies';

export const fetchAllMovies = async ()=>{
    try {
        const response = await axios.get<Movies[]>(BASE_URL)
        // toast.success('Movies fetched successfully')
        return response.data
        
    } catch (error) {
        toast.error('Something went wrong')
        
    }
}


export const fetchMovieById = async(id:any) =>{
    try {
        const response = await axios.get<Movies>(`${BASE_URL}/${id}`)
        return response.data
        
    } catch (error) {
        toast.error('Something went wrong')
        
    }
}


export const addMovie = async(movieData:any)=>{
   const response = await axios.post(BASE_URL, movieData)
   return response.data
}


export const deleteMovie = async(id:any)=>{
    const response = await axios.delete(`${BASE_URL}/${id}`)
    return response

}


export const EditMovie = async(data:any)=>{
  const response = await axios.put(`${BASE_URL}/${data.id}`, data)
  return response.data

}

export const fetchAllMoviesInfinity = async ({ pageParam = 1 }) => {
  const response = await axios.get<Movies[]>(
    `http://localhost:4000/Movies?_page=${pageParam}&_limit=8`
  );

  return {
    data: response.data,
    nextPage: pageParam + 1,
    hasMore: response.data.length === 8,
  };
};