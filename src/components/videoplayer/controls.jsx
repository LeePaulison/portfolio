import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { SeekBar } from "./seekbar";
import { Volume } from "./volume";

export const Controls = (props) => {
  const { videoPlayer, state } = props;
  const seekbar = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  console.log("State: ", state);
  console.log("Seekbar:", seekbar);

  const PlayPause = () => {
    if (!isPlaying) {
      seekbar.current.whilePlaying();
      videoPlayer.current.play();
      setIsPlaying(true);
    }

    if (isPlaying) {
      seekbar.current.notPlaying();
      videoPlayer.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <SeekBar videoPlayer={videoPlayer} state={state} ref={seekbar} />
      <div className='flex flex-row justify-between'>
        <i onClick={() => PlayPause()}>
          {isPlaying ? (
            <span className='material-icons cursor-pointer'>pause</span>
          ) : (
            <span className='material-icons cursor-pointer'>play_arrow</span>
          )}
        </i>
        <Volume videoPlayer={videoPlayer} />
      </div>
    </div>
  );
};

Controls.propTypes = {
  videoPlayer: PropTypes.object,
  state: PropTypes.object,
};
