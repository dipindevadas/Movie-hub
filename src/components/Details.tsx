import React, { useState } from "react";
import { FaPlay, FaRegHeart } from "react-icons/fa";
import type { Movies } from "../types/Types";
import IMDB from '../assets/image 1.png'
import Trailer from "./Trailer";
import { FiDelete } from "react-icons/fi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMovie as deleteMovieByID, EditMovie } from "../api/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {EditOutlined, DeleteOutlined, DirtyLensOutlined} from '@mui/icons-material'
import Modal from "./common/Modal";
import MovieForm from "./MovieForm";



type DetailsProps ={
  data: Movies
  isFetching: boolean
}

 // Make sure this import points to your actual delete function

const Details = ({data, isFetching}:DetailsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const deleteMovie = useMutation({
    mutationFn: (id: any) => deleteMovieByID(id),
    onSuccess: ()=>{
      toast.success('Movie Deleted successfully')
      queryClient.invalidateQueries({queryKey: ['movies']})
      queryClient.invalidateQueries({queryKey: ['movie', data.id]})
      navigate('/')
    },
    onError: (error:any)=>{
      toast.error('Something went wrong'+error)
    }
  })


  const editMovies = useMutation({
    mutationFn: (data: Movies) => EditMovie(data),
    onSuccess: ()=>{
      queryClient.invalidateQueries({queryKey: ['movies']})
      queryClient.invalidateQueries({queryKey: ['movie', data.id]})
      toast.success('Movie Updated successfully')
      setIsModalOpen(false)
    },
    onError: (error:any)=>{
      toast.error('Something went wrong'+error)
    }
  })


  const handleDelete =(id:any)=>{
    console.log(id)
     deleteMovie.mutate(id)
  }


  const handleSubmit=(data:any)=>{
    editMovies.mutate(data)

  }

  return (
    <div >
      <h2 className="text-[48px] font-bold mb-2 line-clamp-1">{data.original_title}</h2>
      <p className="mb-6">{new Date(data.release_date).getFullYear()} | Comedy horror | 1 Season</p>
      <div className="flex gap-2 items-center">
        <img className="w-[60px]" src={IMDB}/>
        <p>{data.vote_average.toFixed(1)} <span>/10</span></p>
      </div>
      <p className="my-6 w-3/4 leading-9">{data.overview}</p>
      <div className="flex space-x-4">
        <button className="bg-purple-600 px-6 py-4.5 rounded-[14px] text-white flex items-center gap-2">
          <FaPlay /> Watch now
        </button>
        <button
         
          className="p-3.5 px-6 rounded-[14px] cursor-pointer"
          style={{
            background:
              "linear-gradient(98.85deg, #FFFFFF 3.36%, rgba(255, 255, 255, 0) 238.16%)",
          }}
        >
          <FaRegHeart className="text-purple-600 " />
        </button>

         <button
         onClick={()=>setIsModalOpen(true)}
          className="p-3.5 px-6 rounded-[14px] cursor-pointer"
          style={{
            background:
              "linear-gradient(98.85deg, #FFFFFF 3.36%, rgba(255, 255, 255, 0) 238.16%)",
          }}
        >
          <EditOutlined sx={{color:'#9810fa'}} />
        </button>



        <button
         onClick={()=>handleDelete(data.id)}
          
          className="p-3.5 px-6 rounded-[14px] cursor-pointer"
          style={{
            background:
              "linear-gradient(98.85deg, #FFFFFF 3.36%, rgba(255, 255, 255, 0) 238.16%)",
          }}
        >
          <DeleteOutlined sx={{color:'#ff6467'}}/>
        </button>

      </div>

      {
        isModalOpen && <Modal setIsModalOpen={setIsModalOpen}>
          <MovieForm  isEdit={true} onSubmit={handleSubmit} isDefaultData={data} />
        </Modal>
      }
    </div>
  );
};

export default Details;
