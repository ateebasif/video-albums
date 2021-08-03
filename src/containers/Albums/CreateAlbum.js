import React from "react";
import CreateAlbumForm from "components/Albums/CreateAlbum";
import createAlbum from "utils/firebase/createSnapshot";

function CreateAlbum() {
  return <CreateAlbumForm createAlbum={createAlbum} />;
}

export default CreateAlbum;
