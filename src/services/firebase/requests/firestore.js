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
  // ===================================================
  // GET FIREBASE REFERENCES
  // ===================================================
  const resourceRef = db.collection(resource);

  let documentRef = resourceRef.doc(uid);

  // ===================================================
  // IF USER EXISTS, GET CURRENT DATA, ELSE, SET AS {}
  // ===================================================
  let snapshot = await documentRef.get();
  snapshot = snapshot ? snapshot.data() : {};

  // ===================================================
  // IF USER EXISTS, INITIAL IS {}  ELSE, INITIAL IS CURRENT TIME
  // ===================================================
  const initialObject = snapshot && snapshot.exists ? {} : getTimestamp();

  // ===================================================
  // TO MAKE SURE SNAPSHOT IS OBJECT
  // ===================================================
  snapshot = snapshot || {};

  // ===================================================
  // MERGE CURRENT DATA IF EXISTS WITH UPDATED DATA
  // ===================================================
  const userData = {
    ...initialObject,
    ...userDefaultData,
    ...data,
    ...snapshot,
  };

  // ===================================================
  // FIREBASE .SET() METHOD OPTIONS TO ALLOW MERGE
  // ===================================================
  const options = {
    merge: true,
  };

  // ===================================================
  // ALWAYS USER OPEN APP, UPDATE YOUR DATA IN FIRESTORE
  // ===================================================
  await documentRef.set(userData, options);

  // ===================================================
  // THEN GET UPDATED SNAPSHOT
  // ===================================================
  snapshot = await documentRef.get();

  // ===================================================
  // RETURN DATA OF UPDATED SNAPSHOT
  // ===================================================
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
