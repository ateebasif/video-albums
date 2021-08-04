import { useState, useEffect } from "react";
import _get from "lodash/get";

import { firestore, auth } from "utils/firebase/firebase";

function UseAlbumsGet() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const currentUser = auth().currentUser;
    const albumRef = firestore
      .collection("albums")
      .where("createdBy", "==", _get(currentUser, "uid", ""));

    albumRef.onSnapshot(async (snapshot) => {
      const tempAlbums = [];
      snapshot.forEach((doc) => {
        tempAlbums.push({ ...doc.data(), id: doc.id });
      });

      setDocs(tempAlbums);
    });
  }, []);

  return docs;
}

export default UseAlbumsGet;
