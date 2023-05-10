import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userRedux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastOption } from "../../constants";
import axios from "axios";

export default function NavBar() {
    
    const {toggle, darkMode} = useContext(DarkModeContext)
    const currentUser = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();
    const handleLogout = async () => {
        try {
            await axios.post("http://localhost:8800/api/auth/logout")
            dispatch(logout())
            toast.success("Bạn đã đăng xuất thành công", toastOption)
        } catch (error) {
            toast.error("Có lỗi trong quá trình đăng xuất !", toastOption)
        }
    }
    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" className="logoApp">
                    SummerSocial
                </Link>
                <HomeOutlinedIcon />
                {darkMode ? <div onClick={toggle}>
                    <WbSunnyOutlinedIcon />
                </div> : <div onClick={toggle}>
                    <DarkModeOutlinedIcon />
                </div>}
                
                <GridViewOutlinedIcon />
                <div className="search">
                    <SearchOutlinedIcon />
                    <input placeholder="Tìm kiếm...." />
                </div>
            </div>
            <div className="right">
                <PersonOutlinedIcon />
                <Link to={"/chat"} style={{color:"inherit"}}>
                    <EmailOutlinedIcon />
                </Link>
                <NotificationsOutlinedIcon />
                <Link  className="user"
                    to={`/profile/${currentUser.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <img src={"../upload/" +currentUser.profilePic} alt="" />
                    <span>{currentUser.name}</span>
                </Link>
                <div className="btn-logout" onClick={handleLogout}>Đăng xuất</div>
            </div>  
        </div>
    )
}
