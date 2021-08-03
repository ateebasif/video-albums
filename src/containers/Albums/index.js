import React from "react";

import AlbumsPage from "components/Albums";
import getAlbums from "hooks/getAlbums";

import CreateAlbum from "./CreateAlbum";

function Album() {
  const docs = getAlbums();

  return <AlbumsPage albums={docs} creatView={CreateAlbum} />;
}

export default Album;
