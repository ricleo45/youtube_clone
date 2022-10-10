import React, { useState , useEffect } from 'react';
import KEY from "../../localKey";
import axios from 'axios';
import VideoPage from '../YouTubePage/VideoPage/VideoPage';



const SearchBar = (props) => {
    
    const [searchTerm, setSearchTerm] = useState();
    
    

    useEffect(() => {
      getVideo();

    }, []);


    const getVideo = async (searchTerm) => {
      try {
        let response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&key=${KEY}&maxResults=1&type=video`
        );
      debugger;
          
      } catch (error) {
        console.log(error.response.data);
      }
    };
    VideoPage();

    function searchVideos(event){
        
        event.preventDefault();
    }
    
    
    return (
        <form className='SearchBar' onSubmit={searchVideos}>
            <input placeholder='Search' type='text' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
            <button type='submit' >Search</button>
        </form>
    );
    
  }

export default SearchBar