import React, { useState } from "react";
import _get from "lodash/get";
import { Input, Box, Text, Icon, chakra, Spinner } from "@chakra-ui/react";

import Alert from "components/Alert";

import { defaultProfileUrl } from "utils/constants/defaultCoverUrl";
import { BsImage } from "react-icons/bs";
import { UpdateProfile } from "utils/firebase/updateProfilePircture";

import { Container, StyledButton, AlertWrapper } from "./styles";

function ProfileSettings(props) {
  const { profileUrl } = props;

  const [loading, setLoading] = useState(false);
  const [previewSrc, setpreviewSrc] = useState("");
  const [successRes, setsuccessRes] = useState(false);
  const [alertRes, setAlertRes] = useState({ status: "", message: "" });

  const handleFileChange = (e) => {
    setpreviewSrc(URL.createObjectURL(_get(e, "target.files[0]", "")));
  };

  const onUpdateProfile = async () => {
    if (!previewSrc) {
      setAlertRes({ status: "warning", message: "Please Select A photo" });
      getSuccessRes();
      return null;
    }
    // if (!loading) return null;

    setLoading(true);

    const res = await UpdateProfile(previewSrc);
    if (res === true) {
      setLoading(false);
      setAlertRes({
        status: "success",
        message: "Profile Updated Successfully!",
      });

      getSuccessRes();
    }
  };

  const getSuccessRes = () => {
    setsuccessRes(true);

    setTimeout(() => {
      setsuccessRes(false);
    }, 2000);
  };

  const getProfileSrc = () => {
    if (!profileUrl && !previewSrc) return defaultProfileUrl;
    if (!previewSrc) return profileUrl;
    return previewSrc;
  };

  return (
    <Container>
      {successRes && (
        <Box position="relative">
          <AlertWrapper>
            <Alert alertInfo={alertRes} />
          </AlertWrapper>
        </Box>
      )}

      <Box>
        <chakra.img
          src={getProfileSrc()}
          height="212px"
          width="212px"
          alt="profile img not available"
          borderRadius="50%"
        />
      </Box>
      <Box mt="5">
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
            Select Profile Picture
            <Icon as={BsImage} boxSize="8" ml="20px" mr="1px" />
          </Box>
        </label>

        <Box
          border="1px solid #e2e8f0"
          padding="2"
          borderRadius="8"
          width="215.34px"
          mt="5"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          cursor="pointer"
          height="50px"
          _hover={{
            background: "#dfdfdf",
            color: "#221d1d",
          }}
        >
          <StyledButton disabled={loading} onClick={onUpdateProfile}>
            {loading ? (
              <Box display="flex" alignItems="center">
                <Text mr="2"> Upating...</Text> <Spinner color="#726f6f" />
              </Box>
            ) : (
              <Text> Update Profile Picture</Text>
            )}
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
      </Box>
    </Container>
  );
}

export default ProfileSettings;
