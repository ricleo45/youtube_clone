
<iframe
          id="player"
          type="text/html"
          width="550"
          height="390"
          src="https://www.youtube.com/embed/"videoId
          frameorder="0"
        ></iframe>

const DisplayVideo = (props) => {



    return(
        <div className="DisplayVideos">
            <h2>Video Info</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {props.videos.map((video)=>{
                        return (
                            <tr key={video.id}>
                                <td>{video.title}</td>
                                
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default DisplayVideo