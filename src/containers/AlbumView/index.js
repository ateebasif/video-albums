import React from "react";
import { useLocation } from "react-router-dom";
import _get from "lodash/get";

import AlbumViewPage from "components/AlbumView";
import useVideosGet from "hooks/useVideosGet";

function AlbumView() {
  const location = useLocation();
  const { album } = _get(location, "state", {});
  const { docs } = useVideosGet(album);

  return <AlbumViewPage videos={docs} album={album} />;
}

export default AlbumView;
