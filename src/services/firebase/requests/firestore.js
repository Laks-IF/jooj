import { db } from "../../../firebase";

const userDefaultData = {
  teamId: null,
  isLeader: null,
  photoURL: "https://api.adorable.io/avatars/100/abott@adorable.png",
};

const getTimestamp = () => ({
  createdAt: new Date(),
});

const getUserData = async (resource, data, uid) => {
  const resourceRef = db.collection(resource);

  let documentRef = resourceRef.doc(uid);

  let snapshot = await documentRef.get();

  const initialObject = snapshot.exists ? {} : getTimestamp();

  const userData = { ...initialObject, ...userDefaultData, ...data };
  const options = {
    merge: true,
  };

  documentRef = resourceRef.doc(uid);
  await documentRef.set(userData, options);

  snapshot = await resourceRef.doc(uid).get();
  console.log("AEOEOAKAOEKEAKO");
  return snapshot.data();
};

// const getResourceWithId = async (id, data) => {
//   const resourceRef = db.collection(resource);

//   const query = resourceRef.doc(uid);

//   const snapshot = await query.get();

//   return snapshot;
// };

export default {
  getUserData,
};
