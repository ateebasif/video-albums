import React from "react";
import PropTypes from "prop-types";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import Drawer from "components/Drawer";

import UploadVideoForm from "./VideoForm";
import VideoList from "./VideoList";

function AlbumView(props) {
  const { album } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Box display="flex" justifyContent="flex-end" pt="5" pr="10">
        <Button onClick={onOpen}>Add Video</Button>
      </Box>
      <VideoList />

      <Drawer {...{ isOpen, onOpen, onClose }} title="Upload New Video">
        <UploadVideoForm album={album} />
      </Drawer>
    </div>
  );
}

AlbumView.propTypes = {
  album: PropTypes.object,
};
export default AlbumView;
