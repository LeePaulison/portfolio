import React from "react";
import PropTypes from "prop-types";

const animationFrame = window.requestAnimationFrame;
const cancelAnimationFrame = window.cancelAnimationFrame;
const UPDATE_INTERVAL = 250; // update every 250ms
let previousTime = 0;

const SeekBar = React.forwardRef(function Seekbar(props, ref) {
  const { videoPlayer, state } = props;
  const { duration } = state;
  const [ct, setCT] = React.useState(0);

  const whilePlaying = () => {
    if (Date.now() - previousTime >= UPDATE_INTERVAL) {
      setCT(videoPlayer.current.currentTime);
      previousTime = Date.now();
    }
    animationFrame(whilePlaying);
  };

  const notPlaying = () => {
    cancelAnimationFrame(whilePlaying);
  };

  React.useImperativeHandle(ref, () => ({
    whilePlaying,
    notPlaying,
  }));

  const displayTime = (time) => {
    if (isNaN(time)) {
      return "0:00";
    }

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className='flex flex-row content-center gap-3 p-4 align-middle'>
      {displayTime(ct)}
      <input
        type='range'
        min='0'
        max={duration}
        value={videoPlayer.current?.currentTime ? videoPlayer.current.currentTime : 0}
        onChange={(evt) => {
          videoPlayer.current.currentTime = evt.target.value;
          setCT(evt.target.value);
        }}
        className='w-full p-0 mb-0 cursor-pointer'
      />
      {displayTime(duration)}
    </div>
  );
});

export { SeekBar };

SeekBar.propTypes = {
  videoPlayer: PropTypes.object,
  state: PropTypes.object,
  duration: PropTypes.number,
  setSync: PropTypes.func,
};
