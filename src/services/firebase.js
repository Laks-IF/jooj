import firebase from "../firebase";

const auth = async () => {
  try {
    console.log(firebase.auth.GoogleAuthProvider);
    const provider = new firebase.auth.GoogleAuthProvider();

    console.log(provider);

    const result = await firebase.auth().signInWithPopup(provider);

    // TO USE GOOGLE API
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const token = result.credential.accessToken;

    // The signed-in user info.
    const { user } = result;

    return user || null;
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;

    console.log("erro aqui");
    console.log(errorCode);
    console.log(errorMessage);
    console.log(email);
    console.log(credential);
  }
};

const getUser = async () => {
  const user = await firebase.auth().currentUser;

  return user;
};

const isAuth = () => {
  return !!getUser();
};

export default {
  auth,
  getUser,
  isAuth,
};
