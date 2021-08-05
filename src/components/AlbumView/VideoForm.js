import React, { useState } from "react";
import PropTypes from "prop-types";
import _get from "lodash/get";
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Icon,
  Spinner,
  Progress,
} from "@chakra-ui/react";
import { RiVideoLine } from "react-icons/ri";

import firebase from "utils/firebase/firebase";

import { StyledButton } from "./styles";
import { uploadVideo } from "../../utils/firebase/uploadVideo";

function VideoForm(props) {
  const { album } = props;

  const [fileUrl, setFileUrl] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [fileDisplayName, setFileDisplayName] = useState("");

  const [progressValue, setprogressValue] = useState(false);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [notVideo, setNotVideo] = useState(false);

  const handleOnChange = (e) => {
    const targetInputValue = _get(e, "target.value", "");
    setFileDisplayName(targetInputValue);
  };

  const handleFileChange = (e) => {
    const file = _get(e, "target.files[0]", {});
    setFileUrl(file);
    setFileName(_get(file, "name", ""));
    if (
      _get(file, "name", "").includes(".mp4") ||
      _get(file, "name", "").includes(".mkv")
    ) {
      setNotVideo(false);
    } else {
      setNotVideo(true);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!fileUrl && !fileName) return null;
    if (notVideo) return null;
    setIsFileUploaded(true);
    setUploadComplete(false);
    const metaDate = {
      contentType: "video",
    };
    const { name: albumName } = album;
    const storageRef = firebase.storage().ref(albumName);
    const fileRef = storageRef.child(fileName);
    const uploadTask = fileRef.put(fileUrl, metaDate);

    await uploadVideo(
      uploadTask,
      album,
      fileDisplayName,
      resetValues,
      getUploadProgressValue
    );
  };

  const resetValues = () => {
    setFileName(null);
    setIsFileUploaded(false);
    setprogressValue(0);
    setUploadComplete(true);
    setFileDisplayName("");
  };

  const getUploadProgressValue = (progressValue) =>
    setprogressValue(progressValue);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <FormControl id="email" isRequired>
          <FormLabel>Video Name</FormLabel>
          <Input
            name="video"
            type="text"
            placeholder="Video Name"
            onChange={handleOnChange}
            value={fileDisplayName}
          />
        </FormControl>

        {progressValue > 0 && (
          <Box mt="5">
            {/* progress: */}
            {/* {progressValue} */}
            {progressValue}%
            <Progress hasStripe value={progressValue} />
          </Box>
        )}

        {uploadComplete && (
          <Box mt="5" color="green">
            Upload Successfull!
          </Box>
        )}

        {notVideo && (
          <Box mt="5" color="red">
            Please Select a video File!
          </Box>
        )}

        {fileName && <Box mt="5">Selected Video "{fileName}"</Box>}

        {/* Buttons box */}
        <Box display="flex" alignItems="center">
          <Box mt="5" mr="5">
            <label htmlFor="file-upload">
              <Box
                border="1px solid #e2e8f0"
                padding="2"
                borderRadius="8"
                width="fit-content"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                cursor="pointer"
                _hover={{
                  background: "#dfdfdf",
                  color: "#221d1d",
                }}
              >
                Select Video
                <Icon as={RiVideoLine} boxSize="8" ml="30" mr="1px" />
              </Box>
            </label>
          </Box>

          <Input
            name="albumCover"
            type="file"
            placeholder="Album Cover"
            onChange={handleFileChange}
            id="file-upload"
            display="none"
            accept="video/mp4,video/*,.mkv"
          />

          <Box mt="5">
            <StyledButton type="submit" disabled={isFileUploaded}>
              <Box
                border="1px solid #e2e8f0"
                padding="2"
                height="12"
                // ml="6"
                display="flex"
                borderRadius="8"
                cursor="pointer"
                width="10.4em"
                alignItems="center"
                _hover={{
                  background: "#dfdfdf",
                  color: "#221d1d",
                }}
              >
                {isFileUploaded ? (
                  <>
                    Uploading...
                    <Box pl="4" display="flex" alignItems="center">
                      <Spinner color="#726f6f" />
                    </Box>
                  </>
                ) : (
                  "Upload Video"
                )}
              </Box>
            </StyledButton>
          </Box>
        </Box>
      </form>
    </div>
  );
}

VideoForm.propTypes = {
  album: PropTypes.object,
};

export default VideoForm;
