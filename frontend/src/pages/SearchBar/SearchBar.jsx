import React, { useState } from 'react';


const SearchBar = (props) => {
    
    const [searchTerm, setSearchTerm] = useState('');
    
    function searchVideos(event){
        event.preventDefault();
        let response = props.videos.filter((videos) => {
            if(videos.data.id.snippet.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return true;
            }
            else {
                return false;
            }
        });
        console.log(response)
        props.setVideos(response)
    }
    
    
    return (
        <form className='SearchBar' onSubmit={searchVideos}>
            <input placeholder='Search' type='text' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
            <button type='submit' >Search</button>
        </form>
    );
}

export default SearchBar