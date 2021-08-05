import React from "react";
import PropTypes from "prop-types";

import { StyledVideoPlayer } from "./styles";

function VideoPlayer(props) {
  const { videoUrl } = props;

  return (
    <StyledVideoPlayer
      //   ref={handleVideoMounted}
      key={videoUrl}
      width="900"
      height="420"
      controls
      autoPlay="autoplay"
      //   muted
      loop
    >
      <source src={videoUrl} type="video/mp4" />
    </StyledVideoPlayer>
  );
}

VideoPlayer.propTypes = {
  videoUrl: PropTypes.string,
};

export default VideoPlayer;
