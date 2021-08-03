import React, { useState, useEffect } from "react";
import getAlbums from "utils/firebase/getSnapShots";

function GetAlbums() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const getDocs = async () => {
      const res = await getAlbums("albums");
      setDocs(res);
      return res;
    };
    getDocs();

    return () => {
      getDocs();
    };
  }, []);
  return docs;
}

export default GetAlbums;
