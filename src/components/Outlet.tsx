
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import MovieDetails from "../pages/MovieDetails";
import CreateMovie from "../pages/CreateMovie";

const Outlet = () => {
  return (
    <div className="dashboard-container bg-[#000121]">
      <Sidebar />
      <div className="main-content relative">
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/movies/create" element={<CreateMovie />} />
          </Routes>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Outlet;
