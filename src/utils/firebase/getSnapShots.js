import _get from "lodash/get";
import _extend from "lodash/extend";
import firebase from "./firebase";

const getSnapshots = async (collectionName) => {
  const firestore = firebase.firestore();
  const currentUser = firebase.auth().currentUser;
  const snapShotRef = firestore
    .collection(collectionName)
    .where("createdBy", "==", _get(currentUser, "uid", ""));

  const snapshot = await snapShotRef.get();
  const snapshotData = [];

  snapshot.forEach((doc) => {
    const data = doc.data();
    const extendedData = _extend(data, { ...data, id: _get(doc, "id", "") });
    snapshotData.push(extendedData);
  });

  return snapshotData;
};

export default getSnapshots;
