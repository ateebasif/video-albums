import { useState, useEffect } from "react";
import _get from "lodash/get";

import { firestore, auth } from "utils/firebase/firebase";

function UseVideosGet(album) {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = auth().currentUser;
    const albumRef = firestore
      .collection("videos")
      .where("createdBy", "==", _get(currentUser, "uid", ""))
      .where("albumId", "==", _get(album, "id", ""));

    albumRef.onSnapshot(async (snapshot) => {
      const tempAlbums = [];
      snapshot.forEach((doc) => {
        tempAlbums.push({ ...doc.data(), id: doc.id });
      });

      setDocs(tempAlbums);
      setLoading(false);
    });
  }, [album]);

  return { docs, loading };
}

export default UseVideosGet;
