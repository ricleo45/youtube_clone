import React from 'react';







const SearchResultPage = (props) => {
    return(
        <div className="RelatedVideos">
            <h2>Related Videos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Thumbnail</th>
                    </tr>
                </thead>
                <tbody>
                    {props.searchTerm.map((video)=>{
                        return (
                            <tr key={video.id}>
                                <td>{video.title}</td>
                                <td>{video.thumbnail}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default SearchResultPage
