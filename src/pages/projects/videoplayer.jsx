// media
import React from "react";
import demo from "./../../assets/media/Videodemo-h264-amd.mp4";
// components
import { Controls } from "./../../components/videoplayer/controls";

const videoStyle = {
  maxWidth: "1280px",
  height: "auto",
  margin: "0 auto",
};

export const VideoPlayer = () => {
  const videoRef = React.useRef(null);
  const [duration, setDuration] = React.useState(0);

  return (
    <div className='flex flex-col items-center'>
      <h1>Videoplayer</h1>
      <div className='video-player' style={videoStyle}>
        <video
          width='1280'
          height='720'
          ref={videoRef}
          preload='metadata'
          onLoadedMetadata={(evt) => setDuration(evt.target.duration)}
        >
          <source src={demo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <Controls videoPlayer={videoRef} state={{ duration }} />
      </div>
    </div>
  );
};
