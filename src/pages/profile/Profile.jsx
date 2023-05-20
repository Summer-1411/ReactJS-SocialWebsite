import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";
import Share from "../../components/share/Share";

import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { makeRequest } from "../../axios";
// import { useQuery } from "@tanstack/react-query";
import Update from "../../components/update/Update";
import { useSelector } from "react-redux";

const Profile = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const [isFetch, setIsFetch] = useState(true);

  const [arrFollows, setArrFollow] = useState([]);

  const userId = Number(useParams().id);

  useEffect(() => {
    const getFollower = async () => {
      const res = await makeRequest.get(
        "/relationships?followedUserId=" + userId
      );
      setArrFollow(res.data);
      console.log(res.data);
    };
    getFollower();
  }, [userId]);

  useEffect(() => {
    const getUserById = async () => {
      try {
        const res = await makeRequest.get("/users/find/" + userId);
        setUserProfile(res.data);
        setIsFetch(false);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserById();
  }, [userId, currentUser]);

  const handleFollow = async () => {
    if (arrFollows.includes(currentUser.id)) {
      setArrFollow((prev) => prev.filter((id) => id !== currentUser.id));
      await makeRequest.delete("/relationships?userId=" + userId);
    } else {
      setArrFollow((prev) => [prev, currentUser.id]);
      await makeRequest.post("/relationships", { userId });
    }
  };

  return (
    <div className="profile">
      {isFetch ? (
        "Loading"
      ) : (
        <>
          <div className="images">
            <img
              src={"../upload/" + userProfile.coverPic}
              alt=""
              className="cover"
            />
            <img
              src={"../upload/" + userProfile.profilePic}
              alt=""
              className="profilePic"
            />
          </div>
          <div className="profileContainer">
            <div className="uInfo">
              <div className="left">
                <a href="http://facebook.com">
                  <FacebookTwoToneIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <InstagramIcon fontSize="large" />
                </a>
              </div>
              <div className="center">
                <span>{userProfile.name}</span>
                <div className="info">
                  <div className="item">
                    <PlaceIcon />
                    <span>{userProfile.city}</span>
                  </div>
                  <div className="item">
                    <LanguageIcon />
                    <span>{userProfile.website}</span>
                  </div>
                </div>
                <div className="action-user">
                  {userId === currentUser.id ? (
                    <button onClick={() => setOpenUpdate(true)}>Update</button>
                  ) : (
                    <button onClick={handleFollow}>
                      {arrFollows.includes(currentUser.id)
                        ? "Following"
                        : "Follow"}
                    </button>
                  )}
                  {userId === currentUser.id || (
                    <button className="btn-message">Message</button>
                  )}
                </div>
              </div>
              <div className="right">
                <MoreVertIcon />
              </div>
            </div>
            {currentUser.id === userId && <Share />}
            <Posts />
          </div>
        </>
      )}
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} />}
    </div>
  );
};

export default Profile;
