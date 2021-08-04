import React, { useState } from "react";
import PropTypes from "prop-types";
import _get from "lodash/get";
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Image,
  Icon,
  Spinner,
} from "@chakra-ui/react";
import { BsImage } from "react-icons/bs";

import { defaultCoverUrl } from "utils/constants/defaultCoverUrl";
import { auth } from "utils/firebase/firebase";
import firebase from "utils/firebase/firebase";

import { StyledButton } from "../styles";

function CreateAlbumForm(props) {
  const { createAlbum, onClose } = props;
  const [albumName, setAlbumName] = useState("");
  const [file, setFile] = useState(null);
  const [previewSrc, setpreviewSrc] = useState(defaultCoverUrl);
  const [loading, setLoading] = useState(false);
  const collectionName = "albums";

  const handleOnChange = (e) => {
    setAlbumName(_get(e, "target.value", ""));
  };

  const handleFileChange = (e) => {
    setFile(_get(e, "target.files[0]", ""));
    setpreviewSrc(URL.createObjectURL(_get(e, "target.files[0]", "")));
  };

  const getFileRef = async () => {
    if (file) {
      const storage = firebase.storage();
      const storageRef = storage.ref();
      const fileRef = storageRef.child(_get(file, "name", ""));
      await fileRef.put(file);

      return fileRef;
    }
    return null;
  };

  const handleOnSubmit = async (e) => {
    // if (!albumName) return null;
    e.preventDefault();
    setLoading(true);
    const user = auth().currentUser;
    const fileRef = await getFileRef();

    const payLoad = {
      createdBy: _get(user, "uid", ""),
      name: albumName,
      coverUrl: fileRef ? await fileRef.getDownloadURL() : "",
    };
    console.log("payLoad", payLoad);
    const res = await createAlbum(payLoad, collectionName);

    if (res) {
      setLoading(false);
      onClose();
    }
  };

  const handleOnRemoveCover = () => {
    setpreviewSrc(defaultCoverUrl);
    setFile(null);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <FormControl id="name" isRequired>
          <FormLabel>Album Name</FormLabel>
          <Input
            name="name"
            type="text"
            placeholder="Album Name"
            onChange={handleOnChange}
          />
        </FormControl>

        <Box display="flex" justifyContent="center" pt="8" pb="8">
          {previewSrc && (
            <Image
              src={previewSrc}
              borderRadius="10"
              height="300"
              width="370"
              alt="preview"
            />
          )}
        </Box>

        <Box display="flex" justify="space-between">
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
              Select Cover
              <Icon as={BsImage} boxSize="8" ml="30" mr="1px" />
            </Box>
          </label>

          <Box
            border="1px solid #e2e8f0"
            padding="2"
            ml="6"
            display="flex"
            borderRadius="8"
            cursor="pointer"
            width="10em"
            alignItems="center"
            _hover={{
              background: "#dfdfdf",
              color: "#221d1d",
            }}
            onClick={handleOnRemoveCover}
          >
            Remove Cover
          </Box>

          <StyledButton type="submit" disabled={loading}>
            <Box
              border="1px solid #e2e8f0"
              padding="2"
              height="12"
              ml="6"
              display="flex"
              borderRadius="8"
              cursor="pointer"
              width="10em"
              alignItems="center"
              _hover={{
                background: "#dfdfdf",
                color: "#221d1d",
              }}
            >
              {loading ? (
                <>
                  Creating...
                  <Box pl="4" display="flex" alignItems="center">
                    <Spinner color="#726f6f" />
                  </Box>
                </>
              ) : (
                "Create Album"
              )}
            </Box>
          </StyledButton>
        </Box>

        <Input
          name="albumCover"
          type="file"
          placeholder="Album Cover"
          onChange={handleFileChange}
          id="file-upload"
          display="none"
        />
      </form>
    </div>
  );
}

CreateAlbumForm.propTypes = {
  createAlbum: PropTypes.func,
  onClose: PropTypes.func,
};
export default CreateAlbumForm;
