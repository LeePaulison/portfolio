import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { SeekBar } from "./seekbar";
import { Volume } from "./volume";

export const Controls = (props) => {
  const { videoPlayer, state } = props;
  const [sync, setSync] = React.useState(0);
  const seekbar = useRef(null)
  const [isPlaying, setIsPlaying ] = useState(false);

  console.log("State: ", state);
  console.log('Seekbar:', seekbar)

  const controlsState = Object.assign(state, { setSync });

  const PlayPause = () => {
    if(!isPlaying) {
      seekbar.current.whilePlaying();
      videoPlayer.current.play();
      setIsPlaying(true);
    }

    if(isPlaying) {
      seekbar.current.notPlaying();
      videoPlayer.current.pause();
      setIsPlaying(false);
    }
  }

  return (
    <div>
      <SeekBar videoPlayer={videoPlayer} state={controlsState} ref={seekbar} />
      <div className='flex flex-row justify-between'>
        <i onClick={() => PlayPause() }>{isPlaying ? <span class="material-symbols-outlined">pause</span> : <span class="material-symbols-outlined">play_arrow</span> }</i>
        <Volume videoPlayer={videoPlayer} />
      </div>
    </div>
  );
};

Controls.propTypes = {
  videoPlayer: PropTypes.object,
  state: PropTypes.object,
};
