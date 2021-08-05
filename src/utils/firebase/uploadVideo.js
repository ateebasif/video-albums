import _get from "lodash/get";
import createVideoDoc from "./createSnapshot";
import { auth } from "./firebase";

export const uploadVideo = async (
  uploadTask,
  album,
  fileDisplayName,
  resetValues,
  getUploadProgressValue
) => {
  const uploadRes = await uploadTask.on(
    "state_changed",
    (snapshot) => {
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      getUploadProgressValue(Math.ceil(progress));
    },
    (error) => {
      // Handle unsuccessful uploads
    },
    () => {
      uploadTask.snapshot.ref.getDownloadURL().then(async (downloadURL) => {
        const { id, name } = album;
        const currentUser = auth().currentUser;

        const videoDocData = {
          videoName: fileDisplayName,
          url: downloadURL,
          album: name,
          createdBy: _get(currentUser, "uid", ""),
          albumId: id,
        };

        await createVideoDoc(videoDocData, "videos");

        resetValues();
      });
    }
  );
  return uploadRes;
};
