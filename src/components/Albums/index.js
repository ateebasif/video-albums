import React from "react";
import PropTypes from "prop-types";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import _get from "lodash/get";
import Drawer from "components/Drawer";
import Card from "./Card";

function Albums(props) {
  const { albums, creatView } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const CreatView = creatView;

  // const albums = [
  //   {
  //     imageUrl: "https://bit.ly/2Z4KKcF",
  //     imageAlt: "Rear view of modern home with pool",
  //     title: "Modern home in city center in the heart of historic Los Angeles",
  //     id: 1,
  //   }
  // ];

  return (
    <div>
      <Box display="flex" justifyContent="flex-end" pt="10" pr="10">
        <Button onClick={onOpen}>Add Album</Button>
      </Box>
      <Box p="10" pl="40" display="flex" flexWrap="wrap">
        {albums.map((album) => (
          <Box key={_get(album, "id", "")} pr="20" pb="10">
            <Card album={album} />
          </Box>
        ))}
      </Box>

      <Drawer {...{ isOpen, onOpen, onClose }} title="Create New Album">
        <CreatView />
      </Drawer>
    </div>
  );
}

Albums.propTypes = {
  creatView: PropTypes.any,
  albums: PropTypes.array,
};

export default Albums;
