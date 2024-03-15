import React from "react";
import PropTypes from "prop-types";
import { SeekBar } from "./seekbar";
import { Volume } from "./volume";

export const Controls = (props) => {
  const { videoPlayer, state } = props;
  const [sync, setSync] = React.useState(0);

  console.log("State: ", state);

  const controlsState = Object.assign(state, { setSync });

  return (
    <div>
      <SeekBar videoPlayer={videoPlayer} state={controlsState} />
      <div className='flex flex-row justify-between'>
        <h1>Controls</h1>
        <Volume videoPlayer={videoPlayer} />
      </div>
    </div>
  );
};

Controls.propTypes = {
  videoPlayer: PropTypes.object,
  state: PropTypes.object,
};
