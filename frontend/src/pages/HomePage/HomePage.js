import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import KEY from "../../localKey";
import DisplayVideo from "../YouTubePage/VideoPage/VideoPage";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user] = useAuth();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideo = async () => {
      try {
        let response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=reactjs&key=${KEY}&maxResults=5&type=video`
        );

        setVideos(response.data);
        console.log(response.data.items);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    getVideo();
  }, []);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
    </div>
  );
};

export default HomePage;
