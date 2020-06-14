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
  return {
    ...snapshot.data(),
    uid: snapshot.id,
  };
}

async function createTeam({ name, password }, userId) {
  const teamResourceRef = db.collection(resources.TEAM);

  const data = {
    name,
    password: bcrypt_services.hashPassword(password),
    invite: getTeamInvite(),
    ...getTimestamp(),
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

async function getTeamByInvite(invite) {
  try {
    const teamResourceRef = db.collection(resources.TEAM);

    let teamData = null;

    const teamSnapshot = await teamResourceRef
      .where("invite", "==", invite)
      .get();

    teamSnapshot.forEach((doc) => (teamData = { ...doc.data(), id: doc.id }));

    if (!teamData) throw new Error("Invalid invite");

    return teamData;
  } catch (error) {
    return null;
  }
}

async function getLeaderByTeam(teamId) {
  try {
    const userResourceRef = db.collection(resources.USER);

    let leaderData = null;

    const leaderSnapshot = await userResourceRef
      .where("teamId", "==", teamId)
      .where("isLeader", "==", true)
      .get();

    leaderSnapshot.forEach(
      (doc) => (leaderData = { ...doc.data(), id: doc.id })
    );

    if (!leaderData) throw new Error("Invalid invite");

    return leaderData;
  } catch (error) {
    return null;
  }
}

function getUsersByTeam(teamId, { limit }) {
  try {
    let start = null;

    let hasMore = null;

    async function initialQuery() {
      const query = db
        .collection(resources.USER)
        .where("teamId", "==", teamId)
        .orderBy("createdAt")
        .limit(limit);

      const initialResult = await query.get();

      start = initialResult.docs[initialResult.docs.length - 1];

      hasMore = initialResult.docs.length === limit;

      return {
        data: initialResult.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        hasMore,
      };
    }

    async function getMoreQuery() {
      const query = db
        .collection(resources.USER)
        .where("teamId", "==", teamId)
        .orderBy("createdAt")
        .startAfter(start)
        .limit(limit);

      const result = await query.get();

      start = result.docs[result.docs.length - 1];

      hasMore = result.docs.length === limit;

      return {
        data: result.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        hasMore,
      };
    }

    const queries = {
      initialQuery,
      getMoreQuery,
    };

    return queries;
  } catch (error) {
    console.log("u good? -no");
    console.log(error);
  }
}

export default {
  getUser,
  createTeam,
  updateUser,
  getTeamByInvite,
  getLeaderByTeam,
  getUsersByTeam,
};
