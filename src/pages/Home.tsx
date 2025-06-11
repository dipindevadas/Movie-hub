
import TrendingCard from "../components/TrendingCard";
import { Featured } from "../components/Featured";
import {  useQuery } from "@tanstack/react-query";
import { fetchAllMovies } from "../api/api";
import type { Movies } from "../types/Types";
import CardSkeliton from "../components/common/CardSkeliton";


const Home = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchAllMovies,
  });

  return (
    <div className=" flex-1 ">
      <div className="">
        <Featured />
        <div className="p-6 bg-gradient-to-r from-[rgba(97,0,194,0.4)] to-transparent to-[5%]">
          <h2 className="text-white text-2xl mt-0 mb-4 font-bold">Trending</h2>
          {isLoading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[...Array(8)].map((_, index) => (
                <CardSkeliton key={index} />
              ))}
            </div>
          )}
          {isError && <p>{error.message}</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {data && data.map((movie: Movies) => <TrendingCard data={movie} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
