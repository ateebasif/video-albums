import React, { useState } from "react";
import PropTypes from "prop-types";
import _get from "lodash/get";
import { Box, Button, useDisclosure, Text } from "@chakra-ui/react";
import Drawer from "components/Drawer";

import UploadVideoForm from "./VideoForm";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";

function AlbumView(props) {
  const { videos, album } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [videoUrl, setVideoUrl] = useState("");

  const handleSelectVideoUrl = (video) => {
    setVideoUrl(video);
  };

  const handleHighLightItem = (item) => {
    if (_get(item, "id", "") === _get(videoUrl, "id", "")) return "#2c6a78";
    return "black";
  };

  return (
    <div>
      <Box display="flex" justifyContent="flex-end" pt="5" pr="10">
        <Button onClick={onOpen}>Add Video</Button>
      </Box>

      <Box display="flex" justifyContent="space-between">
        <Box width="30%">
          {_get(videos, "length", 0) === 0 && (
            <Text display="flex" justifyContent="center">
              Videos Not Found
            </Text>
          )}
          <VideoList
            videos={videos}
            handleSelectVideoUrl={handleSelectVideoUrl}
            handleHighLightItem={handleHighLightItem}
          />
        </Box>

        <Box width="70%" display="flex" justifyContent="center" pt="2%">
          <VideoPlayer videoUrl={_get(videoUrl, "url", "")} />
        </Box>
      </Box>

      <Drawer {...{ isOpen, onOpen, onClose }} title="Upload New Video">
        <UploadVideoForm album={album} />
      </Drawer>
    </div>
  );
}

AlbumView.propTypes = {
  album: PropTypes.object,
  videos: PropTypes.array,
};
export default AlbumView;
