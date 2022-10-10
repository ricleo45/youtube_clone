import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import VideoPage from "../YouTubePage/VideoPage/VideoPage";
import useAuth from "../../hooks/useAuth";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user] = useAuth();

  return (
    <div className="container">
      <SearchBar />
      <h1>Welcome {user.first_name}!</h1>
      <VideoPage />
    </div>
  );
};

export default HomePage;
