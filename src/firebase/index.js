import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import config from "./config";

firebase.initializeApp(config);

const db = firebase.firestore();

export { db };

export default firebase;
