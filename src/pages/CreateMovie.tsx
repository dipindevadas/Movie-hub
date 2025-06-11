
import { useMutation, useQueryClient } from "@tanstack/react-query";
import MovieForm from "../components/MovieForm";
import { addMovie } from "../api/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const CreateMovie = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const createMovies = useMutation({
        mutationFn: (movieData:any) =>  addMovie(movieData),
        onSuccess: ()=>{
            toast.success('Movie added successfully')
            queryClient.invalidateQueries({queryKey: ['movies']})
            navigate('/')
        },
        onError: (error:any)=>{
            toast.error(error.message)
        }
    })



    const handleSubmit = (movieData:any)=>{
        createMovies.mutate(movieData)
    }
  return (
    <div>
      <div className="pt-[120px] p-6 bg-gradient-to-r from-[rgba(97,0,194,0.4)] to-transparent to-[5%]">
        <h2 className="text-white text-2xl mt-0 mb-4 font-bold">Create New Movie</h2>
        <MovieForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default CreateMovie;
