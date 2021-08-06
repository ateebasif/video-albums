import firebase, { auth } from "utils/firebase/firebase";

export const UpdateProfile = async (photoURL) => {
  const currentUser = auth().currentUser;
  const db = firebase.firestore();
  const { uid } = currentUser;
  const profileRef = db.collection("userProfile").doc(uid);

  const res = await profileRef
    .set(
      {
        profilePhoto: photoURL,
      },
      { merge: true }
    )
    .then(() => {
      console.log("updated successful");
      return true;
    })
    .catch((err) => {
      console.log("update error", err);
      return err;
    });

  return res;
  // timestamp: firebase.firestore.FieldValue.serverTimestamp();
};
