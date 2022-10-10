import { useState } from "react";



const VideoPage = (props) => {
    const [videoId] = useState();
    
console.log(videoId);
  const videoUrl = `http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com`;
  return (
  <iframe
        id="player"
        type="text/html"
        width="540"
        height="390"
        src={videoUrl}
        frameBorder="0"
      ></iframe>
  )
}
export default VideoPage