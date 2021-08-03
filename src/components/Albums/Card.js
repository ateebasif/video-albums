import React from "react";
import PropTypes from "prop-types";
import { Box, Image } from "@chakra-ui/react";
import _get from "lodash/get";

import { defaultCoverUrl } from "utils/constants/defaultCoverUrl";

function AlbumsPage(props) {
  const { album } = props;

  return (
    <Box
      maxW="xs"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      cursor="pointer"
    >
      <Image
        src={
          _get(album, "coverUrl", "")
            ? _get(album, "coverUrl", "")
            : defaultCoverUrl
        }
        height="265px"
        width="265"
        alt={_get(album, "imageAlt", "not available")}
      />

      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          // isTruncated
        >
          {_get(album, "name", "")}
        </Box>
      </Box>
    </Box>
  );
}

AlbumsPage.propTypes = {
  album: PropTypes.object,
};

export default AlbumsPage;
