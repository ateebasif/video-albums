import React from "react";

import AlbumsPage from "components/Albums";
import useAlbumsGet from "hooks/useAlbumsGet";
import CreateAlbum from "./CreateAlbum";

function Album() {
  const docs = useAlbumsGet();

  return <AlbumsPage albums={docs} creatView={CreateAlbum} />;
}

export default Album;
