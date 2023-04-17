import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Friends from "../../assets/1.png";
import { Link } from "react-router-dom";

const Navbar = () => {


    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span>Summer Social</span>
                </Link>
                <HomeOutlinedIcon />

                <DarkModeOutlinedIcon />
                
                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="right">
                <PersonOutlinedIcon />
                <EmailOutlinedIcon />
                
                <div className="user">
                    <img
                        src={Friends}
                        alt=""
                    />
                    <span>Summer</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
