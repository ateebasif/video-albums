import firebase from "./firebase";

const firestore = firebase.firestore();

const createSnapshot = async (data, collectionName) => {
  if (!data && !collectionName) return null;

  const snapShotRef = firestore.collection(collectionName);
  const res = await snapShotRef
    .doc()
    .set(data)
    .then(() => {
      console.log("snapshot created");
      return true;
    })
    .catch((err) => {
      console.log("error in creating snapshot", err);
      return err;
    });

  return res;
};

export default createSnapshot;
