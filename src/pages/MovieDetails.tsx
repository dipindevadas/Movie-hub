import { useQuery } from "@tanstack/react-query";
import { fetchMovieById } from "../api/api";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import Details from "../components/Details";

const MovieDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieById(id),
    enabled: !!id,
  });
  return (
    <div className="p-6 pt-[120px] min-h-screen  bg-gradient-to-r from-[rgba(97,0,194,0.4)] to-transparent to-[5%]">
      {isLoading && <p className="text-3xl font-bold text-red-600">Loading...</p>}

      <div className="grid grid-cols-6 gap-8">
        <div className="col-span-2">
          <MovieCard src={data?.poster_path ?? ""} alt={data?.title ?? ""} />
        </div>
        <div className="col-span-4 relative">
           {isFetching  && <p className="text-gray-500 text-sm absolute top-0 right-0">Updating...</p>}
          {data ? <Details isFetching={isFetching}  data={data} />:  <p className="text-red-500">Movie not found.</p>}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
