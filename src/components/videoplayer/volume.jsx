import React from "react";
import PropTypes from "prop-types";

export const Volume = (props) => {
  const { videoPlayer } = props;
  const [volume, setVolume] = React.useState(0.5);

  return (
    <input
      type='range'
      min='0'
      max='1'
      step={0.01}
      value={volume}
      onChange={(evt) => {
        videoPlayer.current.volume = evt.target.value;
        setVolume(evt.target.value);
      }}
      className='cursor-pointer'
    />
  );
};

Volume.propTypes = {
  videoPlayer: PropTypes.object,
};
