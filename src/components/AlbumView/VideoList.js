import React from "react";
import PropTypes from "prop-types";
import _get from "lodash/get";
import { Text, Box, Icon } from "@chakra-ui/react";
import { MdOndemandVideo } from "react-icons/md";
function VideoList(props) {
  const { videos, handleSelectVideoUrl, handleHighLightItem } = props;

  return (
    <Box pl="85px" overflowY="scroll" maxH="90vh">
      {videos.map((video, index) => (
        <Box key={_get(video, "id", "")} mb="8">
          <Text
            display="flex"
            alignItems="center"
            width="fit-content"
            cursor="pointer"
            _hover={{
              color: "#2c6a78",
            }}
            onClick={() => handleSelectVideoUrl(video)}
            color={handleHighLightItem(video)}
          >
            {index + 1}
            <Icon as={MdOndemandVideo} boxSize="6" ml="2" mr="2" />

            {_get(video, "videoName", "")}
          </Text>
        </Box>
      ))}
    </Box>
  );
}

VideoList.prpTypes = {
  video: PropTypes.array,
  handleSelectVideoUrl: PropTypes.func,
  handleHighLightItem: PropTypes.func,
};

export default VideoList;
