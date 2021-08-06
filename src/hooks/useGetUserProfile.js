import { useState, useEffect } from "react";
import _get from "lodash/get";

import { firestore, auth } from "utils/firebase/firebase";

function useGetUserProfile() {
  const [user, setUser] = useState([]);

  const fetchUser = () => {
    const currentUser = auth().currentUser;
    const profileRef = firestore
      .collection("userProfile")
      .where("uid", "==", _get(currentUser, "uid", ""));

    profileRef.onSnapshot(async (snapshot) => {
      const tempProfile = [];
      snapshot.forEach((doc) => {
        tempProfile.push({ ...doc.data(), id: doc.id });
      });

      setUser(tempProfile);
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user };
}

export default useGetUserProfile;
