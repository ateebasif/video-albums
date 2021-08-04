import React from "react";
import PropTypes from "prop-types";
import CreateAlbumForm from "components/Albums/CreateAlbum";
import createAlbum from "utils/firebase/createSnapshot";

function CreateAlbum(props) {
  const { onClose } = props;

  return <CreateAlbumForm createAlbum={createAlbum} onClose={onClose} />;
}

CreateAlbum.propTypes = {
  onClose: PropTypes.func,
};
export default CreateAlbum;
