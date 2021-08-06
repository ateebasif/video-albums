import React from "react";
import PropTypes from "prop-types";

import { StyledVideoPlayer, TextContainer } from "./styles";

function VideoPlayer(props) {
  const { videoUrl } = props;

  return (
    <>
      {!videoUrl && (
        <TextContainer>
          Select A video to Play <br /> or upload a new one!
        </TextContainer>
      )}
      {videoUrl && (
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
      )}
    </>
  );
}

VideoPlayer.propTypes = {
  videoUrl: PropTypes.string,
};

export default VideoPlayer;
