import { Link } from "react-router-dom";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import User from "../assets/user-profile.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-6 pt-10  text-white bg-transparent absolute w-full top-0 right-0 z-10">
      <div className="flex space-x-8">
        <Link to="/">Movies</Link>
        <Link to="/series">Series</Link>
        <Link to="/documentaries">Documentaries</Link>
      </div>
      <div className="flex items-center space-x-6">
        <button>
          <DarkModeOutlinedIcon sx={{ fontSize: 24 }} />
        </button>
        <button>
          <NotificationsNoneIcon sx={{ fontSize: 24 }} />
        </button>
        <div className="flex items-center gap-2">
          <div className="rounded-full w-8 h-8 bg-slate-300 text-black text-xs flex items-center justify-center">
            <img src={User} />
          </div>
          <span>Tetiana</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
