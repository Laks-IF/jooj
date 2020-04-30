import firebase from "../../../firebase";

const auth = async (provider) => {
  try {
    const result = await firebase.auth().signInWithPopup(provider);

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

    const errors = {
      "auth/account-exists-with-different-credential": {
        message: "Tente fazer login com outra rede social",
        toast: "error",
        render_error: true,
      },
      "auth/popup-closed-by-user": {
        message: "Opa, você fechou a janela de login",
        toast: "info",
        render_error: false,
      },
    };
    const default_error = {
      message: "Ocorreu um erro ao fazer login, tente novamente",
      toast: "error",
      render_error: true,
    };

    throw errors[error.code] || default_error;
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
