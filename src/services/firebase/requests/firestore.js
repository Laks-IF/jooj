import { db } from "../../../config/firebase";

import bcrypt_services from "../../bcrypt";

import { resources } from "../resources";

function getTimestamp() {
  return {
    createdAt: new Date(),
  };
}

function getTeamInvite() {
  let dt = new Date().getTime();
  const uuid = "xyxxyyxx".replace(/[xy]/g, function (c) {
    let r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}

const userDefaultData = {
  teamId: null,
  isLeader: null,
  photoURL: "https://api.adorable.io/avatars/100/abott@adorable.png",
};

// ===================================================
// FIREBASE .SET() METHOD OPTIONS TO ALLOW MERGE
// ===================================================
const options = {
  merge: true,
};

async function getUser(data, uid) {
  // ===================================================
  // GET FIREBASE REFERENCES
  // ===================================================
  const resourceRef = db.collection(resources.USER);

  let documentRef = resourceRef.doc(uid);

  // ===================================================
  // IF USER EXISTS, GET CURRENT DATA, ELSE, SET AS {}
  // ===================================================
  let snapshot = await documentRef.get();
  snapshot = snapshot ? snapshot.data() : {};

  // ===================================================
  // IF USER EXISTS, INITIAL IS {}  ELSE, INITIAL IS TIMSTAMP OBJECT
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
}

async function createTeam({ name, password }, userId) {
  const teamResourceRef = db.collection(resources.TEAM);

  const data = {
    name,
    password: bcrypt_services.hashPassword(password),
    createdAt: getTimestamp(),
    invite: getTeamInvite(),
  };

  const teamRef = await teamResourceRef.add(data);

  const newUserData = { teamId: teamRef.id, isLeader: true };

  await updateUser(newUserData, userId);

  return newUserData;
}

async function updateUser(newData, userId) {
  const userResourceRef = db.collection(resources.USER);

  const userDocRef = userResourceRef.doc(userId);

  await userDocRef.set(newData, options);
}

export default {
  getUser,
  createTeam,
  updateUser,
};
