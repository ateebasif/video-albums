import React from "react";
import { useLocation } from "react-router-dom";
import _get from "lodash/get";

import AlbumViewPage from "components/AlbumView";

function AlbumView() {
  const location = useLocation();
  const { album } = _get(location, "state", {});

  return <AlbumViewPage album={album} />;
}

export default AlbumView;
