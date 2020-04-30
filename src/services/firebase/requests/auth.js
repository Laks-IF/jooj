import firebase from "../../../firebase";

const auth = async (provider) => {
  try {
    const result = await firebase.auth().signInWithPopup(provider);

    // TO USE GOOGLE API
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const token = result.credential.accessToken;

    const { user } = result;

    return user || null;
  } catch (error) {
    const error_code = error.code;
    const error_message = error.message;
    const email = error.email;
    const credential = error.credential;

    console.log(
      "Caso tenha aberto esta aba, por favor, copie e envie este erro ao desenvolvedor do aplicativo: "
    );
    console.log({
      error_code,
      error_message,
      email,
      credential,
    });
    throw "Ocorreu um erro ao fazer login, tente novamente";
  }
};

const getUser = async () => {
  const session = await firebase.auth();

  return session.currentUser;
};

const onAuthStateChange = (callback) => {
  firebase.auth().onAuthStateChanged(callback);
};

export default {
  auth,
  getUser,
  onAuthStateChange,
};
